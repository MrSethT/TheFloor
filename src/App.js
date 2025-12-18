import { useState } from "react";
import { ArenaBoard } from "./components/ArenaBoard";
import { BattleFloor } from "./components/BattleFloor";
import { topicMap } from "./data/topics.js";

import './App.css';

function App() {
  const [screen, setScreen] = useState("arena");
  const [players, setPlayers] = useState([
    { id: 1, name: "Left", color: "blue" }, 
    { id: 2, name: "Right", color: "green" }
  ]);
  const [board, setBoard] = useState(topicMap);
  const [selected, setSelected] = useState([]);
  const [battle, setBattle] = useState({ p1: players[0], p2: players[1], topic: "food" });

  const onTileClick = (tile) => {
    setScreen("battle");
    setBattle({ p1: players[0], p2: players[1], topic: tile.topic }); 
  };

  const onEnd = (winner, topic) => {
    debugger;
    // Find the board item by topic
    const updatedBoard = board.map(item =>
      item.topic === topic ? { ...item, owner: winner } : item
    );
    setBoard(updatedBoard);
    setScreen("arena");
  };

  return (
    <div className="App">
      <header className="App-header">
        <div class="scoreboard">
        <div>
          {players[0].name}-
          {board.filter(cat => cat.owner?.id === players[0].id).length  }
          </div>
        <div class="lockup">
    <div class="the">THE</div>
    <div class="floor" data-text="FLOOR">FLOOR</div>
    </div>
    <div>
      {players[1].name}-
          {board.filter(cat => cat.owner?.id === players[1].id).length  }
    </div>
  </div>
        {screen}
        <button onClick={() => setScreen("arena")}>Arena</button>
        <button onClick={() => setScreen("battle")}>Battle</button>

      {screen === "arena" ? (
    <ArenaBoard board={board} selected={selected} onTileClick={onTileClick} />
  ) : (
    <BattleFloor battle={battle} onEnd={onEnd} />
  )}
      </header>
    </div>
  );
}

export default App;
