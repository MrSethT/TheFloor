import { useState } from "react";
import { ArenaBoard } from "./components/ArenaBoard";
import { BattleFloor } from "./components/BattleFloor";
import { topicMap } from "./data/topicMap";

import "./App.css";

function App() {
  const [screen, setScreen] = useState("arena");
  const [winner, setWinner] = useState(null);
  const [players, setPlayers] = useState([
    { id: 1, name: "Left", color: "blue" },
    { id: 2, name: "Right", color: "green" },
  ]);
  const [board, setBoard] = useState(topicMap);
  const [selected, setSelected] = useState([]);
  const [battle, setBattle] = useState({
    p1: players[0],
    p2: players[1],
  });

  const onTileClick = (tile) => {
    setScreen("battle");
    setBattle({ p1: players[0], p2: players[1], topic: tile.topic });
  };

  const onEnd = (winner, topic) => {
    setWinner(winner);

    // Find the board item by topic
    const updatedBoard = board.map((item) =>
      item.topic === topic ? { ...item, owner: winner } : item
    );
    setBoard(updatedBoard);

    setTimeout(() => {
      setWinner(null);

      setScreen("arena");
    }, 4000);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="scoreboard">
          <div className={"score active " + (winner?.id  === players[0].id ? "winner":"")}  >
            {players[0].name} &nbsp;
            {board.filter((cat) => cat.owner?.id === players[0].name).length}
          </div>
          <div className="lockup">
            <div className="the">THE</div>
            <div className="floor" data-text="FLOOR">
              FLOOR
            </div>
          </div>
          <div className={"score active " + (winner?.id  === players[1].id ? "winner":"")}  >
            {players[1].name} &nbsp;
            {board.filter((cat) => cat.owner?.id === players[1].id).length}
          </div>
        </div>
        {screen === "arena" ? (
          <ArenaBoard
            board={board}
            selected={selected}
            onTileClick={onTileClick}
          />
        ) : (
          <BattleFloor battle={battle} onEnd={onEnd} />
        )}
      </header>
    </div>
  );
}

export default App;
