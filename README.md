```markdown
# Frogger

A small Frogger-style game written in ClojureScript.  
Designed as a self-contained Easter egg that can be dropped into another application as plain JavaScript.

## Features

- Hopping frog with pixel-art sprite
- Cars and trucks (collision)
- Rideable logs on animated water
- Continuous water regions (die if you fall in without a log)
- Lily-pad homes at the top
- Death (skull) + restart
- Confetti on win
- Close button
- Data-driven level definition

## Development

Requirements (dev only):

- Java
- Clojure CLI
- Node.js

```bash
npm install
npx shadow-cljs watch app
```

Open http://localhost:8080

In another terminal:

```bash
npx shadow-cljs cljs-repl app
```

Hot reload is active. Edit `src/frogger/core.cljs` and the browser updates.

## Production build

```bash
npx shadow-cljs release app
```

Output lands in `public/js/main.js`.

## Using it in another app

Only the compiled JavaScript is required. No Java or Clojure is needed at runtime.

1. Copy `public/js/main.js` into your static assets.
2. Provide a canvas:

```html
<canvas id="game" width="800" height="400"></canvas>
<script src="/path/to/main.js"></script>
```

The game looks for an element with `id="game"` and starts automatically.

## Controls

- Arrow keys: hop
- Click “Close” (top-right): stop the game

## Project layout

```
src/frogger/core.cljs   # game logic and level data
public/index.html       # dev page
public/js/              # compiled output (after watch/release)
shadow-cljs.edn         # build config
```

## Level data

The level (lanes, entities, colors, homes) is plain data near the top of `core.cljs`.  
Edit it and reload to change the layout.
```