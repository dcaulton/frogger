(ns frogger.core)

(defonce state
  (atom {:frog {:x 400 :y 360}
         :keys #{}
         :dead? false
         :dead-until 0
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

(defn draw! [ctx]
  (let [canvas (.-canvas ctx)
        {:keys [frog lanes dead?]} @state]
    ;; background
    (set! (.-fillStyle ctx) "#1a1a2e")
    (.fillRect ctx 0 0 (.-width canvas) (.-height canvas))

    ;; lanes
    (set! (.-fillStyle ctx) "#16213e")
    (doseq [lane lanes]
      (.fillRect ctx 0 (- (:y lane) 20) (.-width canvas) 40))

    ;; cars
    (set! (.-fillStyle ctx) "#ef4444")
    (doseq [lane lanes
            car (:cars lane)]
      (.fillRect ctx (:x car) (- (:y lane) 12) (:w car) 24))

    ;; frog or skull
    (if dead?
      (do
        (set! (.-font ctx) "32px sans-serif")
        (set! (.-fillStyle ctx) "#facc15")
        (.fillText ctx "☠️" (- (:x frog) 16) (+ (:y frog) 10)))
      (let [{:keys [x y]} frog]
        (set! (.-fillStyle ctx) "#4ade80")
        (.fillRect ctx (- x 15) (- y 15) 30 30)))))

(defn update! []
  (let [now (js/Date.now)
        {:keys [dead? dead-until keys]} @state]
    (if dead?
      ;; wait out the death timer
      (when (>= now dead-until)
        (swap! state assoc
               :dead? false
               :frog {:x 400 :y 360}))
      ;; normal play
      (do
        (let [speed 4]
          (when (keys "ArrowLeft")  (swap! state update-in [:frog :x] - speed))
          (when (keys "ArrowRight") (swap! state update-in [:frog :x] + speed))
          (when (keys "ArrowUp")    (swap! state update-in [:frog :y] - speed))
          (when (keys "ArrowDown")  (swap! state update-in [:frog :y] + speed)))

        ;; move cars
        (swap! state update :lanes
               (fn [lanes]
                 (mapv (fn [lane]
                         (update lane :cars
                                 (fn [cars]
                                   (mapv (fn [car]
                                           (update car :x + (:speed lane)))
                                         cars))))
                       lanes)))

        ;; check collision
        (when (any-collision?)
          (swap! state assoc
                 :dead? true
                 :dead-until (+ now 3000)))))))

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