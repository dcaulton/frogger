(ns frogger.core)

(def hop-size 40)
(def canvas-width 800)

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
  {1 "#4ade80"   ; light green
   2 "#166534"   ; dark green
   3 "#1f2937"}) ; dark (wheels etc.)

;; ---------- level definition ----------
;; This is the only place you describe a level.
;; :type is a placeholder for future behavior (:log, :crocodile, etc.)
(def level-1
  {:name "Level 1"
   :frog {:x 400 :y 360}
   :lanes
   [{:y 280
     :speed 2.2
     :type :car
     :entities [{:x 80  :w 70}
                {:x 280 :w 60}
                {:x 520 :w 80}]}
    {:y 200
     :speed -1.8
     :type :truck
     :entities [{:x 40  :w 120}
                {:x 300 :w 140}
                {:x 560 :w 110}]}
    {:y 120
     :speed 1.4
     :type :log          ; placeholder – later the frog can ride these
     :entities [{:x 100 :w 100}
                {:x 350 :w 130}
                {:x 600 :w 90}]}]})

;; ---------- helpers ----------
(defn make-state [level]
  {:frog (:frog level)
   :keys #{}
   :prev-keys #{}
   :dead? false
   :dead-until 0
   :won? false
   :confetti []
   :lanes (mapv (fn [lane]
                  (assoc lane
                         :pixel-map (get pixel-maps (:type lane) car-pixels)))
                (:lanes level))})

(defonce state (atom (make-state level-1)))

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

(defn any-collision? []
  (let [{:keys [frog lanes]} @state]
    (some (fn [lane]
            ;; only cars/trucks kill for now; logs will be rideable later
            (when (#{:car :truck} (:type lane))
              (some #(collides? frog % (:y lane)) (:entities lane))))
          lanes)))

(defn spawn-confetti! []
  (let [palette ["#facc15" "#f472b6" "#60a5fa" "#4ade80" "#fb923c" "#c084fc"]
        particles (for [_ (range 80)]
                    {:x (+ 350 (rand-int 100))
                     :y 40
                     :vx (- (rand 6) 3)
                     :vy (+ 1 (rand 4))
                     :color (rand-nth palette)
                     :life 120})]
    (swap! state assoc :confetti (vec particles) :won? true)))

(defn draw-pixels! [ctx pixels x y scale]
  (doseq [row (range (count pixels))
          col (range (count (first pixels)))]
    (when-let [c (get colors (get-in pixels [row col]))]
      (set! (.-fillStyle ctx) c)
      (.fillRect ctx
                 (+ x (* col scale))
                 (+ y (* row scale))
                 scale scale))))

(defn draw! [ctx]
  (let [canvas (.-canvas ctx)
        {:keys [frog lanes dead? won? confetti]} @state]
    (set! (.-fillStyle ctx) "#1a1a2e")
    (.fillRect ctx 0 0 (.-width canvas) (.-height canvas))

    ;; home
    (set! (.-fillStyle ctx) "#14532d")
    (.fillRect ctx 0 0 (.-width canvas) 50)
    (set! (.-fillStyle ctx) "#86efac")
    (set! (.-font ctx) "16px sans-serif")
    (.fillText ctx "HOME" 370 30)

    ;; lanes + entities
    (doseq [lane lanes]
      (set! (.-fillStyle ctx) "#16213e")
      (.fillRect ctx 0 (- (:y lane) 22) (.-width canvas) 44)
      (doseq [ent (:entities lane)]
        (draw-pixels! ctx
                      (:pixel-map lane)
                      (:x ent)
                      (- (:y lane) 16)
                      4)))

    ;; confetti
    (doseq [p confetti]
      (set! (.-fillStyle ctx) (:color p))
      (.fillRect ctx (:x p) (:y p) 6 6))

    ;; frog / skull
    (if dead?
      (do (set! (.-font ctx) "32px sans-serif")
          (set! (.-fillStyle ctx) "#facc15")
          (.fillText ctx "☠️" (- (:x frog) 16) (+ (:y frog) 10)))
      (when-not won?
        (draw-pixels! ctx frog-pixels (- (:x frog) 16) (- (:y frog) 16) 4)))

    (when won?
      (set! (.-fillStyle ctx) "#fef08a")
      (set! (.-font ctx) "28px sans-serif")
      (.fillText ctx "YOU WIN!" 320 200))))

(defn update! []
  (let [now (js/Date.now)
        {:keys [dead? dead-until won? keys prev-keys]} @state]
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
                               (update :vy + 0.15)
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

        ;; move + wrap entities
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

        (when (any-collision?)
          (swap! state assoc :dead? true :dead-until (+ now 3000)))

        (when (< (:y (:frog @state)) 40)
          (spawn-confetti!))))))

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