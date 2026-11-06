(ns frogger.core)

(def hop-size 40)
(def canvas-width 800)
(def canvas-height 400)

;; ---------- pixel maps ----------
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
  [[1 1 1 1 1 1 1 1]
   [1 2 1 1 1 1 2 1]
   [1 1 1 1 1 1 1 1]
   [3 0 3 0 3 0 3 0]])

(def log-pixels
  [[0 1 1 1 1 1 0]
   [1 2 1 2 1 2 1]
   [1 1 1 1 1 1 1]
   [0 1 1 1 1 1 0]])

(def pixel-maps
  {:frog  frog-pixels
   :car   car-pixels
   :truck truck-pixels
   :log   log-pixels})

(def colors
  {1 "#4ade80"
   2 "#166534"
   3 "#1f2937"
   4 "#65a30d"})

;; ---------- single pretty level ----------
(def level
  {:name "Evening Crossing"
   :frog {:x 400 :y 360}
   :homes [{:x 80} {:x 220} {:x 360} {:x 500} {:x 640}]
   :landscape
   {:bg "#0f172a"
    :road "#1e293b"
    :water "#0c4a6e"
    :water-highlight "#38bdf8"
    :home-zone "#14532d"}
   :lanes
   [{:y 300 :speed 2.0 :type :car
     :entities [{:x 70 :w 65} {:x 260 :w 70} {:x 480 :w 60} {:x 650 :w 55}]}
    {:y 230 :speed -1.7 :type :truck
     :entities [{:x 40 :w 130} {:x 280 :w 150} {:x 540 :w 120}]}
    {:y 150 :speed 1.3 :type :log
     :entities [{:x 90 :w 110} {:x 320 :w 140} {:x 580 :w 100}]}
    {:y 80 :speed -1.0 :type :log
     :entities [{:x 30 :w 120} {:x 250 :w 130} {:x 500 :w 110}]}]})

(defn make-state [lvl]
  {:frog (:frog lvl)
   :keys #{}
   :prev-keys #{}
   :dead? false
   :dead-until 0
   :won? false
   :confetti []
   :occupied-homes #{}
   :homes (:homes lvl)
   :landscape (:landscape lvl)
   :time 0
   :lanes (mapv #(assoc % :pixel-map (get pixel-maps (:type %) car-pixels))
                (:lanes lvl))})

(defonce state (atom (make-state level)))

(declare game-loop)

(defn collides? [frog entity lane-y]
  (let [fx (:x frog) fy (:y frog)
        ex (:x entity) ey lane-y
        fw 32 fh 32
        ew (:w entity) eh 28]
    (and (< fx (+ ex ew))
         (> (+ fx fw) ex)
         (< fy (+ ey eh))
         (> (+ fy fh) ey))))

(defn deadly-collision? []
  (let [{:keys [frog lanes]} @state]
    (some (fn [lane]
            (when (#{:car :truck} (:type lane))
              (some #(collides? frog % (:y lane)) (:entities lane))))
          lanes)))

(defn home-index-at [x]
  (let [homes (:homes @state)]
    (first (keep-indexed
            (fn [i h] (when (< (Math/abs (- x (:x h))) 30) i))
            homes))))

(defn spawn-confetti! []
  (let [palette ["#facc15" "#f472b6" "#60a5fa" "#4ade80" "#fb923c" "#c084fc"]
        particles (for [_ (range 90)]
                    {:x (+ 340 (rand-int 120))
                     :y 30
                     :vx (- (rand 7) 3.5)
                     :vy (+ 1 (rand 5))
                     :color (rand-nth palette)
                     :life 140})]
    (swap! state assoc :confetti (vec particles) :won? true)))

(defn draw-pixels! [ctx pixels x y scale]
  (doseq [row (range (count pixels))
          col (range (count (first pixels)))]
    (when-let [c (get colors (get-in pixels [row col]))]
      (set! (.-fillStyle ctx) c)
      (.fillRect ctx (+ x (* col scale)) (+ y (* row scale)) scale scale))))

(defn draw-water! [ctx landscape t y height]
  (let [base (:water landscape)
        hi   (:water-highlight landscape)]
    (set! (.-fillStyle ctx) base)
    (.fillRect ctx 0 y canvas-width height)
    (set! (.-fillStyle ctx) hi)
    (set! (.-globalAlpha ctx) 0.6)
    (doseq [i (range 0 canvas-width 16)]
      (let [wave (Math/sin (+ (/ i 35) (/ t 25)))]
        (.fillRect ctx i (+ y 10 (* wave 7)) 8 3)))
    (set! (.-globalAlpha ctx) 1)))

(defn draw! [ctx]
  (let [{:keys [frog lanes dead? won? confetti homes occupied-homes landscape time]} @state]
    ;; sky / base
    (set! (.-fillStyle ctx) (:bg landscape))
    (.fillRect ctx 0 0 canvas-width canvas-height)

    ;; home zone
    (set! (.-fillStyle ctx) (:home-zone landscape))
    (.fillRect ctx 0 0 canvas-width 50)

    ;; water and roads
    (doseq [lane lanes]
      (if (= :log (:type lane))
        (draw-water! ctx landscape time (- (:y lane) 22) 44)
        (do
          (set! (.-fillStyle ctx) (:road landscape))
          (.fillRect ctx 0 (- (:y lane) 22) canvas-width 44))))

    ;; lily pads
    (doseq [[i h] (map-indexed vector homes)]
      (set! (.-fillStyle ctx) (if (occupied-homes i) "#166534" "#052e16"))
      (.beginPath ctx)
      (.arc ctx (:x h) 28 20 0 (* 2 Math/PI))
      (.fill ctx)
      (when-not (occupied-homes i)
        (set! (.-fillStyle ctx) "#86efac")
        (set! (.-font ctx) "14px sans-serif")
        (.fillText ctx "○" (- (:x h) 7) 33)))

    ;; entities
    (doseq [lane lanes]
      (doseq [ent (:entities lane)]
        (draw-pixels! ctx (:pixel-map lane) (:x ent) (- (:y lane) 16) 4)))

    ;; confetti
    (doseq [p confetti]
      (set! (.-fillStyle ctx) (:color p))
      (.fillRect ctx (:x p) (:y p) 5 5))

    ;; frog or skull
    (if dead?
      (do (set! (.-font ctx) "32px sans-serif")
          (set! (.-fillStyle ctx) "#facc15")
          (.fillText ctx "☠️" (- (:x frog) 16) (+ (:y frog) 10)))
      (when-not won?
        (draw-pixels! ctx frog-pixels (- (:x frog) 16) (- (:y frog) 16) 4)))

    (when won?
      (set! (.-fillStyle ctx) "#fef08a")
      (set! (.-font ctx) "28px sans-serif")
      (.fillText ctx "YOU WIN!" 310 200))))

(defn update! []
  (let [now (js/Date.now)
        {:keys [dead? dead-until won? keys prev-keys]} @state]
    (swap! state update :time inc)
    (cond
      dead?
      (when (>= now dead-until)
        (swap! state assoc :dead? false :frog {:x 400 :y 360}))

      won?
      (swap! state update :confetti
             (fn [ps]
               (->> ps
                    (mapv #(-> %
                               (update :x + (:vx %))
                               (update :y + (:vy %))
                               (update :vy + 0.12)
                               (update :life dec)))
                    (filterv #(pos? (:life %))))))

      :else
      (do
        ;; hops
        (let [just (clojure.set/difference keys prev-keys)]
          (when (just "ArrowLeft")  (swap! state update-in [:frog :x] - hop-size))
          (when (just "ArrowRight") (swap! state update-in [:frog :x] + hop-size))
          (when (just "ArrowUp")    (swap! state update-in [:frog :y] - hop-size))
          (when (just "ArrowDown")  (swap! state update-in [:frog :y] + hop-size)))
        (swap! state assoc :prev-keys keys)

        ;; ride logs
        (when-let [lane (some (fn [l]
                                (when (and (= :log (:type l))
                                           (some #(collides? (:frog @state) % (:y l))
                                                 (:entities l)))
                                  l))
                              (:lanes @state))]
          (swap! state update-in [:frog :x] + (:speed lane)))

        ;; move + wrap
        (swap! state update :lanes
               (fn [lanes]
                 (mapv (fn [lane]
                         (let [spd (:speed lane)]
                           (update lane :entities
                                   (fn [ents]
                                     (mapv (fn [e]
                                             (let [nx (+ (:x e) spd)
                                                   w  (:w e)]
                                               (cond
                                                 (> nx canvas-width) (assoc e :x (- w))
                                                 (< (+ nx w) 0)      (assoc e :x canvas-width)
                                                 :else               (assoc e :x nx))))
                                           ents)))))
                       lanes)))

        ;; death
        (when (deadly-collision?)
          (swap! state assoc :dead? true :dead-until (+ now 3000)))

        ;; homes
        (when (< (:y (:frog @state)) 50)
          (if-let [idx (home-index-at (:x (:frog @state)))]
            (if (contains? (:occupied-homes @state) idx)
              (swap! state assoc :dead? true :dead-until (+ now 3000))
              (do
                (swap! state update :occupied-homes conj idx)
                (swap! state assoc :frog {:x 400 :y 360})
                (when (= (count (:occupied-homes @state))
                         (count (:homes @state)))
                  (spawn-confetti!))))
            (swap! state assoc :dead? true :dead-until (+ now 3000))))))))

(defn game-loop [ctx]
  (update!)
  (draw! ctx)
  (js/requestAnimationFrame #(game-loop ctx)))

(defn init []
  (let [canvas (js/document.getElementById "game")
        ctx    (.getContext canvas "2d")]
    (js/console.log "Frogger started")
    (game-loop ctx)))

(defn reload! [] (js/console.log "reloaded"))

(defn on-key [e down?]
  (let [k (.-key e)]
    (when (#{"ArrowUp" "ArrowDown" "ArrowLeft" "ArrowRight"} k)
      (.preventDefault e)
      (swap! state update :keys (if down? conj disj) k))))

(set! (.-onkeydown js/window) #(on-key % true))
(set! (.-onkeyup   js/window) #(on-key % false))