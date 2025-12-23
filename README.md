# 🏟️ The Arena – A Trivia Game in React

An interactive trivia game inspired by the TV show **"The Floor"**.  
The game is built as a board of player tiles — each duel is played on a specific topic and is decided by real-time image recognition.

---

## 🎮 Game Description

- There are **2 players or teams**, each with:
  - Left - Orange
  - Right - Green
- The game board shows a tile for each topic
- Selecting a tile creates a **duel** using that topic
- In a duel:
  - a player from each team is chosen to duel
  - images are shown according to the topic
  - each player gets **30 personal seconds**
  - a correct recognition awards a point and passes the turn
  - an incorrect recognition shows the answer but does not pass the turn
- At the end of the round:
  - a winner is determined
  - the winner claims the tile
  - the tile changes color, name to the winner
- The game automatically returns to the arena board
- The game is over when all the tiles are claimed and the winner is determined by wich player/team has claimed the most tiles 

---

## ⌨️ Game Controls

- **Y** – the player identified the image correctly  
- **X** – the player passes  
- No on-screen buttons — the game is intended to be run quickly by a host

---

## 🧠 Duel End Conditions

A duel ends when one of the following conditions is met:
1. One player's time runs out
2. There are no more images in the category

In either case — the game automatically returns to the arena board.

---

## 🗂️ Project Structure

Topics are created from the file structure.  A topic is created for each directory in assets. An image is created for each image in a topic directory.  The file name is used as the correct answer. 

```txt
assets/
├── food/
├── animals/
├── sports/
└── ...
|
src/
├── components/
│   ├── ArenaBoard.js      # board of tiles
│   ├── BattleScreen.js    # duel/battle screen
│   └── App.js             # screen management and main logic
│
├── data/
│   ├── imageMap.js          # maps images in directory stucture 
│   ├── topicMap.js          # maps foudn images to topics
│
└── index.js
|

```
