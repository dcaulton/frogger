(ns frogger.core)

(def hop-size 40)
(def canvas-width 800)
(def canvas-height 400)

;; continuous water region (hard-coded)
(def water-top 100)
(def water-bottom 185)

(def frog-pixels
  [[0 0 1 1 1 1 0 0]
   [0 1 1 1 1 1 1 0]
   [1 2 1 1 1 1 2 1]
   [1 1 1 1 1 1 1 1]
   [0 1 1 2 2 1 1 0]
   [0 1 1 1 1 1 1 0]
   [1 1 0 0 0 0 1 1]
   [1 0 0 0 0 0 0 1]])

(def car-pixels
  [[0 1 1 1 1 0]
   [1 2 1 1 2 1]
   [1 1 1 1 1 1]
   [0 3 0 0 3 0]])

(def truck-pixels
  [[1 1 1 1 1 1 1 1 1 1 1 1]
   [1 2 1 1 1 1 1 1 1 1 2 1]
   [1 1 1 1 1 1 1 1 1 1 1 1]
   [3 0 3 0 3 0 3 0 3 0 3 0]])

(def log-pixels
  [[4 4 5 4 4 5 4 4 5 4 4 5 4 4]
   [5 4 4 5 4 4 5 4 4 5 4 4 5 4]
   [4 5 4 4 5 4 4 5 4 4 5 4 4 5]
   [4 4 5 4 4 5 4 4 5 4 4 5 4 4]])

(def pixel-maps
  {:frog frog-pixels :car car-pixels :truck truck-pixels :log log-pixels})

(def palette
  {1 "#4ade80" 2 "#166534" 3 "#1f2937" 4 "#92400e" 5 "#78350f"})

(defn pixel-width [pixels] (count (first pixels)))
(defn pixel-height [pixels] (count pixels))

(defn entity-size [lane]
  (let [scale (case (:type lane) :truck 5 :log 4 4)
        pm (:pixel-map lane)]
    {:w (* (pixel-width pm) scale)
     :h (* (pixel-height pm) scale)
     :scale scale}))

(def frog-size
  (let [s 4]
    {:w (* (pixel-width frog-pixels) s)
     :h (* (pixel-height frog-pixels) s)}))

(def level
  {:name "Evening Crossing"
   :frog {:x 400 :y 360}
   :homes [{:x 80} {:x 220} {:x 360} {:x 500} {:x 640}]
   :colors
   {:bg "#0f172a" :road "#1e293b" :water "#0c4a6e"
    :water-highlight "#38bdf8" :home-zone "#14532d" :truck "#dc2626"}
   :lanes
   [{:y 310 :speed 2.1 :type :car :water? false
     :entities [{:x 60} {:x 240} {:x 460} {:x 640}]}
    {:y 240 :speed -1.6 :type :truck :water? false
     :entities [{:x 20} {:x 280} {:x 540}]}
    {:y 160 :speed 1.2 :type :log :water? true
     :entities [{:x 40} {:x 280} {:x 520}]}
    {:y 115 :speed -0.9 :type :log :water? true
     :entities [{:x 80} {:x 340} {:x 580}]}]})

(defn make-state [lvl]
  {:frog (:frog lvl)
   :keys #{} :prev-keys #{}
   :dead? false :dead-until 0 :won? false :confetti []
   :occupied-homes #{}
   :homes (:homes lvl)
   :colors (:colors lvl)
   :time 0
   :closed? false
   :lanes (mapv #(assoc % :pixel-map (get pixel-maps (:type %) car-pixels))
                (:lanes lvl))})

(defonce state (atom (make-state level)))

(declare game-loop)

(defn collides? [frog entity lane]
  (let [{:keys [w h]} (entity-size lane)
        fw (:w frog-size) fh (:h frog-size)
        fx (- (:x frog) (/ fw 2))
        fy (- (:y frog) (/ fh 2))
        ex (:x entity)
        ey (- (:y lane) (/ h 2))]
    (and (< fx (+ ex w))
         (> (+ fx fw) ex)
         (< fy (+ ey h))
         (> (+ fy fh) ey))))

(defn on-any-log? []
  (some (fn [lane]
          (when (= :log (:type lane))
            (some #(collides? (:frog @state) % lane) (:entities lane))))
        (:lanes @state)))

(defn in-water? []
  (let [fy (:y (:frog @state))]
    (and (>= fy water-top) (<= fy water-bottom))))

(defn deadly-collision? []
  (or
   (some (fn [lane]
           (when (#{:car :truck} (:type lane))
             (some #(collides? (:frog @state) % lane) (:entities lane))))
         (:lanes @state))
   (and (in-water?) (not (on-any-log?)))))

(defn home-index-at [x]
  (first (keep-indexed
          (fn [i h] (when (< (Math/abs (- x (:x h))) 28) i))
          (:homes @state))))

(defn spawn-confetti! []
  (let [cols ["#facc15" "#f472b6" "#60a5fa" "#4ade80" "#fb923c" "#c084fc"]
        particles (for [_ (range 90)]
                    {:x (+ 340 (rand-int 120)) :y 30
                     :vx (- (rand 7) 3.5) :vy (+ 1 (rand 5))
                     :color (rand-nth cols) :life 140})]
    (swap! state assoc :confetti (vec particles) :won? true)))

(defn draw-pixels! [ctx pixels x y scale color-override]
  (doseq [row (range (count pixels))
          col (range (count (first pixels)))]
    (when-let [idx (get-in pixels [row col])]
      (when (pos? idx)
        (set! (.-fillStyle ctx) (or color-override (get palette idx "#4ade80")))
        (.fillRect ctx (+ x (* col scale)) (+ y (* row scale)) scale scale)))))

(defn draw-water! [ctx colors t y height]
  (set! (.-fillStyle ctx) (:water colors))
  (.fillRect ctx 0 y canvas-width height)
  (set! (.-fillStyle ctx) (:water-highlight colors))
  (set! (.-globalAlpha ctx) 0.5)
  ;; three wave lines: top, middle, bottom
  (doseq [offset [8 (/ height 2) (- height 10)]]
    (doseq [i (range 0 canvas-width 12)]
      (let [wave (Math/sin (+ (/ i 28) (/ t 20) (* offset 0.05)))]
        (.fillRect ctx i (+ y offset (* wave 5)) 8 2))))
  (set! (.-globalAlpha ctx) 1))

(defn draw-close-button! [ctx]
  (set! (.-fillStyle ctx) "#7f1d1d")
  (.fillRect ctx (- canvas-width 70) 8 60 24)
  (set! (.-fillStyle ctx) "#fecaca")
  (set! (.-font ctx) "14px sans-serif")
  (.fillText ctx "Close" (- canvas-width 58) 25))

(defn draw! [ctx]
  (let [{:keys [frog lanes dead? won? confetti homes occupied-homes colors time closed?]} @state]
    (when-not closed?
      (set! (.-fillStyle ctx) (:bg colors))
      (.fillRect ctx 0 0 canvas-width canvas-height)

      (set! (.-fillStyle ctx) (:home-zone colors))
      (.fillRect ctx 0 0 canvas-width 50)

      ;; HARD-CODED continuous water
      (draw-water! ctx colors time water-top (- water-bottom water-top))

      ;; roads
      (doseq [lane lanes]
        (when-not (:water? lane)
          (set! (.-fillStyle ctx) (:road colors))
          (.fillRect ctx 0 (- (:y lane) 22) canvas-width 44)))

      (doseq [[i h] (map-indexed vector homes)]
        (set! (.-fillStyle ctx) (if (occupied-homes i) "#166534" "#052e16"))
        (.beginPath ctx)
        (.arc ctx (:x h) 28 20 0 (* 2 Math/PI))
        (.fill ctx)
        (when-not (occupied-homes i)
          (set! (.-fillStyle ctx) "#86efac")
          (set! (.-font ctx) "14px sans-serif")
          (.fillText ctx "○" (- (:x h) 7) 33)))

      (doseq [lane lanes]
        (let [{:keys [scale h]} (entity-size lane)
              override (when (= :truck (:type lane)) (:truck colors))]
          (doseq [ent (:entities lane)]
            (draw-pixels! ctx (:pixel-map lane)
                          (:x ent)
                          (- (:y lane) (/ h 2))
                          scale override))))

      (doseq [p confetti]
        (set! (.-fillStyle ctx) (:color p))
        (.fillRect ctx (:x p) (:y p) 5 5))

      (if dead?
        (do (set! (.-font ctx) "32px sans-serif")
            (set! (.-fillStyle ctx) "#facc15")
            (.fillText ctx "☠️" (- (:x frog) 16) (+ (:y frog) 10)))
        (when-not won?
          (let [{:keys [w h]} frog-size]
            (draw-pixels! ctx frog-pixels
                          (- (:x frog) (/ w 2))
                          (- (:y frog) (/ h 2))
                          4 nil))))

      (when won?
        (set! (.-fillStyle ctx) "#fef08a")
        (set! (.-font ctx) "28px sans-serif")
        (.fillText ctx "YOU WIN!" 310 200))

      (draw-close-button! ctx))))

(defn update! []
  (when-not (:closed? @state)
    (let [now (js/Date.now)
          {:keys [dead? dead-until won? keys prev-keys]} @state]
      (swap! state update :time inc)
      (cond
        dead? (when (>= now dead-until)
                (swap! state assoc :dead? false :frog {:x 400 :y 360}))
        won?  (swap! state update :confetti
                     (fn [ps]
                       (->> ps
                            (mapv #(-> % (update :x + (:vx %))
                                       (update :y + (:vy %))
                                       (update :vy + 0.12)
                                       (update :life dec)))
                            (filterv #(pos? (:life %))))))
        :else
        (do
          (let [just (clojure.set/difference keys prev-keys)]
            (when (just "ArrowLeft")  (swap! state update-in [:frog :x] - hop-size))
            (when (just "ArrowRight") (swap! state update-in [:frog :x] + hop-size))
            (when (just "ArrowUp")    (swap! state update-in [:frog :y] - hop-size))
            (when (just "ArrowDown")  (swap! state update-in [:frog :y] + hop-size)))
          (swap! state assoc :prev-keys keys)

          (when (on-any-log?)
            (when-let [lane (some (fn [l]
                                    (when (and (= :log (:type l))
                                               (some #(collides? (:frog @state) % l)
                                                     (:entities l)))
                                      l))
                                  (:lanes @state))]
              (swap! state update-in [:frog :x] + (:speed lane))))

          (swap! state update :lanes
                 (fn [lanes]
                   (mapv (fn [lane]
                           (let [spd (:speed lane)
                                 {:keys [w]} (entity-size lane)]
                             (update lane :entities
                                     (fn [ents]
                                       (mapv (fn [e]
                                               (let [nx (+ (:x e) spd)]
                                                 (cond
                                                   (> nx canvas-width) (assoc e :x (- w))
                                                   (< (+ nx w) 0) (assoc e :x canvas-width)
                                                   :else (assoc e :x nx))))
                                             ents)))))
                         lanes)))

          (when (deadly-collision?)
            (swap! state assoc :dead? true :dead-until (+ now 3000)))

          (when (< (:y (:frog @state)) 50)
            (if-let [idx (home-index-at (:x (:frog @state)))]
              (if (contains? (:occupied-homes @state) idx)
                (swap! state assoc :dead? true :dead-until (+ now 3000))
                (do (swap! state update :occupied-homes conj idx)
                    (swap! state assoc :frog {:x 400 :y 360})
                    (when (= (count (:occupied-homes @state))
                             (count (:homes @state)))
                      (spawn-confetti!))))
              (swap! state assoc :dead? true :dead-until (+ now 3000)))))))))

(defn game-loop [ctx]
  (update!)
  (draw! ctx)
  (js/requestAnimationFrame #(game-loop ctx)))

(defn close-game! []
  (swap! state assoc :closed? true))

(defn init []
  (let [canvas (js/document.getElementById "game")
        ctx (.getContext canvas "2d")]
    (.addEventListener canvas "click"
                       (fn [e]
                         (let [rect (.getBoundingClientRect canvas)
                               x (- (.-clientX e) (.-left rect))
                               y (- (.-clientY e) (.-top rect))]
                           (when (and (> x (- canvas-width 70)) (< x canvas-width)
                                      (> y 8) (< y 32))
                             (close-game!)))))
    (game-loop ctx)))

(defn reload! [] (js/console.log "reloaded"))

(defn on-key [e down?]
  (let [k (.-key e)]
    (when (#{"ArrowUp" "ArrowDown" "ArrowLeft" "ArrowRight"} k)
      (.preventDefault e)
      (swap! state update :keys (if down? conj disj) k))))

(set! (.-onkeydown js/window) #(on-key % true))
(set! (.-onkeyup js/window) #(on-key % false))