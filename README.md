# 🏟️ The Arena – A Trivia Game in React

An interactive trivia game inspired by the TV show **"The Floor"**.  
The game is built as a board of player tiles — each duel is played on a specific topic and is decided by real-time image recognition.

---

## 🎮 Game Description

- There are **15 players**, each with:
  - a name
  - a unique topic
  - a unique color
- The game board shows a tile for each player
- Selecting two tiles creates a **duel**
- The duel's topic is determined by the second tile selected
- In a duel:
  - images are shown according to the topic
  - each player gets **30 personal seconds**
  - a correct recognition awards a point and passes the turn
  - an incorrect recognition shows the answer but does not pass the turn
- At the end of the round:
  - a winner is determined
  - the loser loses their tile
  - the tile changes color, name, and topic to the winner
- The game automatically returns to the arena board

---

## ⌨️ Game Controls

- **Y** – the player identified the image correctly  
- **X** – the player did not recognize the image  
- No on-screen buttons — the game is intended to be run quickly by a host

---

## 🧠 Duel End Conditions

A duel ends when one of the following conditions is met:
1. One player's time runs out
2. There are no more images in the category

In either case — the game automatically returns to the arena board.

---

## 🗂️ Project Structure

```txt
src/
├── components/
│   ├── ArenaBoard.jsx      # board of tiles
│   ├── BattleScreen.jsx    # duel/battle screen
│   └── App.jsx             # screen management and main logic
│
├── data/
│   ├── players.js          # initial list of players
│   ├── images.js           # images by topic
│   └── topics.js           # topic names
│
├── assets/
│   ├── food/
│   ├── animals/
│   ├── sports/
│   └── ...
│
└── main.jsx
```
