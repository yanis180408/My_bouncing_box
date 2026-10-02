# Welcome to My Bouncing Box
***

## Task
The goal of this project is to create a web animation in which a box moves continuously inside a container and bounces off its edges.
Each time the box touches a wall, its direction changes as if it had hit the border, and the animation keeps running without stopping.
The challenge lies in handling the animation loop, updating the position and velocity of the box on every frame, and detecting collisions with the boundaries correctly.

## Description
I solved this problem by separating the state of the box from its rendering:
- **State** : the box has a position (`x`, `y`) and a velocity (`dx`, `dy`) that are updated on every frame.
- **Animation Loop** : `requestAnimationFrame` calls an update function before each repaint, which keeps the animation smooth and in sync with the screen refresh rate.
- **Collision Detection** : after each move, the position is compared to the container's width and height. When the box reaches an edge, the matching velocity component is reversed (`dx` for the left and right walls, `dy` for the top and bottom).
- **Boundary Correction** : the position is clamped to the container so the box never gets stuck outside it or goes through a wall, even at high speed.
- **Rendering** : the box is drawn in the browser with HTML and CSS, and its position is updated with the `transform` property on every frame.
- **Responsive Container** : the limits are read from the container's current size, so the box keeps bouncing correctly when the window is resized.

## Installation
The project runs entirely in the browser, so no compilation is needed.
1. Get the project :
```bash
git clone [REPOSITORY_URL]
cd my_bouncing_box
```

2. Open the page directly in a browser :
```bash
open index.html
```

3. Or serve it locally (optional) :
```bash
python3 -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

## Usage
Open `index.html` in a browser. The box starts moving automatically and bounces off the four walls of its container.

**Behavior :**
| Event | Result |
|-------|--------|
| Box hits the left or right wall | Horizontal direction is reversed |
| Box hits the top or bottom wall | Vertical direction is reversed |
| Box hits a corner | Both directions are reversed |
| Window is resized | Limits are updated and the box keeps bouncing |

**Project structure :**
```
my_bouncing_box/
├── index.html
├── css/
│   └── style.css
└── js/
    └── script.js
```

### The Core Team


<span><i>Made at <a href='https://qwasar.io'>Qwasar SV -- Software Engineering School</a></i></span>
<span><img alt='Qwasar SV -- Software Engineering School's Logo' src='https://storage.googleapis.com/qwasar-public/qwasar-logo_50x50.png' width='20px' /></span>
