# FLAPPY BIRD
Flappy bird flew into an endless pipe zone (or is it?) and needs help flying through to get out.  

# ABOUT THE GAME
A simple side-scrolling game where the player controls a bird to fly between pipes without hitting them.  Flying between each set of pipes scores 1 point and hitting them or the ground ends the game.  See how long you can last and set records.  

Project based on [noanonoa work](https://github.com/noanonoa/flappy-bird):

## GETTING STARTED

First, install the Bun runtime:

```bash
curl -fsSL https://bun.sh/install | bash
```

Install the dependencies:

```bash
bun install
```

Then, run the development server:

```bash
bun run dev
```

Scan the QRCode in the terminal with your LynxExplorer App to see the result.

# WIREFRAME  
![wireframe for game screen](/src/assets/img/001-wireframe.png "Game Screen")  
![wireframe for collision mechanics](/src/assets/img/002-wireframe.png "Collision Mechanics")

# TECHNOLOGY
 * HTML/CSS on canvas
 * JavaScript for game logic

# ASSETS
### IMAGES
![flappy bird theme](/src/assets/img/og-theme.png)  
(src: google images)  
![flappy bird theme v2](/src/assets/img/og-theme-2.png)  
(src: https://www.spriters-resource.com/fullview/59894/)  
### AUDIO
(src: https://www.sounds-resource.com/mobile/flappybird/sound/5309/)
### SCREENSHOT
![flappy bird screenshot](/src/assets/img/001-screenshot.png)

# MVP
 * start the game with a 'press button'
 * bird falls default to gravity
 * bird flies to 'click' (might be better for mobile capabilities)
 * pipes spawn top and bottom and scroll to the left 
 * track score
 * end game on collision

# STRETCH GOALS
 * animate bird
 * add sounds for scoring, flying, and collision
 * a customized theme
 * game is animated while waiting for player to start game
 * night time / day time
 * add a running time to display
 * make the game web responsive

# GAMEPLAN
---
## HTML
 - [X] container for gaming screen
 - [X] game title
 - [X] game screen `<canvas>`

## CSS
 - [X] *centered* game title
 - [X] *centered* game screen

## JavaScript
### Pieces I need
 - [X] specify canvas size
 - [X] draw bird image
 - [X] top pipe image
 - [X] constant gap between pipes
 - [X] bottom pipe image
 - [X] score tracker
 - [X] ready screen: game state 0
 - [X] game over screen: game state 2
 - [X] background image
 - [X] ground image
 - [X] sounds on flying, collision, scoring, falling, and game over screen
### Functions I need
 - [X] start game: game state 1
    - [X] start on 'click' (mobile compatible)
    - [X] spawn set of pipes with constant gap
      - [X] if statement triggering at x-coordinate
 - [X] bird's movement
    - [X] gravity: bird's y-coordinate increases to fall  
     * velocity's value is incremented by gravity constant
     * bird's position function updates velocity's value
    - [X] flying: bird's y-coordinate decreases to fly on 'click'
        - [X] eventListener 'click' (also enabled 'spacebar')
    - [X] rotate bird upward each time it flies (smells like a challenge)
        - [X] animation object / array of images to flip through
 - [X] a drawing function to animate game
   - [X] place images and loop
    - [X] pipes' x-coordinates decrease to scroll left
        - [X] increment score by 1 upon passing pipe
    - [X] pipes' y-coordinates are generated randomly
    - [X] draw background
    - [X] draw bird
 - [X] Game Over: game state 2
    - [X] collision with pipes
    - [X] collision with floor and canvas ceiling
    - [X] cut screen
    - [X] restart game on 'click' start button
        - [X] display best score
        - [X] display current score
        - [X] reset score on start game
        - [X] reset pipes