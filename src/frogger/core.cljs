(ns frogger.core)

(defonce state
  (atom {:frog {:x 400 :y 360}
         :keys #{}
         :dead? false
         :dead-until 0
         :won? false
         :confetti []
         :lanes [{:y 280 :speed 2 :cars [{:x 100 :w 60}
                                         {:x 300 :w 80}
                                         {:x 550 :w 50}]}
                 {:y 200 :speed -1.5 :cars [{:x 50 :w 70}
                                            {:x 250 :w 90}
                                            {:x 480 :w 60}]}
                 {:y 120 :speed 2.5 :cars [{:x 150 :w 55}
                                           {:x 400 :w 75}
                                           {:x 620 :w 65}]}]}))

(declare game-loop)

(defn collides? [frog car lane-y]
  (let [fx (:x frog) fy (:y frog)
        cx (:x car)  cy lane-y
        fw 30 fh 30
        cw (:w car) ch 24]
    (and (< fx (+ cx cw))
         (> (+ fx fw) cx)
         (< fy (+ cy ch))
         (> (+ fy fh) cy))))

(defn any-collision? []
  (let [{:keys [frog lanes]} @state]
    (some (fn [lane]
            (some #(collides? frog % (:y lane)) (:cars lane)))
          lanes)))

(defn spawn-confetti! []
  (let [colors ["#facc15" "#f472b6" "#60a5fa" "#4ade80" "#fb923c" "#c084fc"]
        particles (for [_ (range 80)]
                    {:x (+ 350 (rand-int 100))
                     :y 40
                     :vx (- (rand 6) 3)
                     :vy (+ 1 (rand 4))
                     :color (rand-nth colors)
                     :life 120})]
    (swap! state assoc :confetti (vec particles) :won? true)))

(defn draw! [ctx]
  (let [canvas (.-canvas ctx)
        {:keys [frog lanes dead? won? confetti]} @state]
    ;; background
    (set! (.-fillStyle ctx) "#1a1a2e")
    (.fillRect ctx 0 0 (.-width canvas) (.-height canvas))

    ;; victory zone
    (set! (.-fillStyle ctx) "#14532d")
    (.fillRect ctx 0 0 (.-width canvas) 50)
    (set! (.-fillStyle ctx) "#86efac")
    (set! (.-font ctx) "16px sans-serif")
    (.fillText ctx "HOME" 370 30)

    ;; lanes
    (set! (.-fillStyle ctx) "#16213e")
    (doseq [lane lanes]
      (.fillRect ctx 0 (- (:y lane) 20) (.-width canvas) 40))

    ;; cars
    (set! (.-fillStyle ctx) "#ef4444")
    (doseq [lane lanes
            car (:cars lane)]
      (.fillRect ctx (:x car) (- (:y lane) 12) (:w car) 24))

    ;; confetti
    (doseq [p confetti]
      (set! (.-fillStyle ctx) (:color p))
      (.fillRect ctx (:x p) (:y p) 6 6))

    ;; frog or skull
    (if dead?
      (do
        (set! (.-font ctx) "32px sans-serif")
        (set! (.-fillStyle ctx) "#facc15")
        (.fillText ctx "☠️" (- (:x frog) 16) (+ (:y frog) 10)))
      (when-not won?
        (let [{:keys [x y]} frog]
          (set! (.-fillStyle ctx) "#4ade80")
          (.fillRect ctx (- x 15) (- y 15) 30 30))))

    ;; win message
    (when won?
      (set! (.-fillStyle ctx) "#fef08a")
      (set! (.-font ctx) "28px sans-serif")
      (.fillText ctx "YOU WIN!" 320 200))))

(defn update! []
  (let [now (js/Date.now)
        {:keys [dead? dead-until won? keys frog]} @state]
    (cond
      ;; death timer
      dead?
      (when (>= now dead-until)
        (swap! state assoc
               :dead? false
               :frog {:x 400 :y 360}))

      ;; already won — just animate confetti
      won?
      (swap! state update :confetti
             (fn [ps]
               (->> ps
                    (mapv (fn [p]
                            (-> p
                                (update :x + (:vx p))
                                (update :y + (:vy p))
                                (update :vy + 0.15) ; gravity
                                (update :life dec))))
                    (filterv #(pos? (:life %))))))

      ;; normal play
      :else
      (do
        (let [speed 4]
          (when (keys "ArrowLeft")  (swap! state update-in [:frog :x] - speed))
          (when (keys "ArrowRight") (swap! state update-in [:frog :x] + speed))
          (when (keys "ArrowUp")    (swap! state update-in [:frog :y] - speed))
          (when (keys "ArrowDown")  (swap! state update-in [:frog :y] + speed)))

        ;; wrap cars
        (swap! state update :lanes
               (fn [lanes]
                 (mapv (fn [lane]
                         (let [speed (:speed lane)]
                           (update lane :cars
                                   (fn [cars]
                                     (mapv (fn [car]
                                             (let [new-x (+ (:x car) speed)
                                                   w (:w car)]
                                               (cond
                                                 (> new-x 800) (assoc car :x (- w))
                                                 (< (+ new-x w) 0) (assoc car :x 800)
                                                 :else (assoc car :x new-x))))
                                           cars)))))
                       lanes)))

        ;; collision
        (when (any-collision?)
          (swap! state assoc
                 :dead? true
                 :dead-until (+ now 3000)))

        ;; victory
        (when (< (:y frog) 40)
          (spawn-confetti!))))))

(defn game-loop [ctx]
  (update!)
  (draw! ctx)
  (js/requestAnimationFrame #(game-loop ctx)))

(defn init []
  (let [canvas (js/document.getElementById "game")
        ctx (.getContext canvas "2d")]
    (js/console.log "Frogger started")
    (game-loop ctx)))

(defn reload! []
  (js/console.log "reloaded"))

(defn on-key [e down?]
  (let [k (.-key e)]
    (when (#{"ArrowUp" "ArrowDown" "ArrowLeft" "ArrowRight"} k)
      (.preventDefault e)
      (swap! state update :keys (if down? conj disj) k))))

(set! (.-onkeydown js/window) #(on-key % true))
(set! (.-onkeyup js/window) #(on-key % false))