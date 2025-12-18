import { useEffect, useState } from "react";
import { imageMap } from "../data/imageMap.js";
import "./BattleFloor.css";

export function BattleFloor({ battle, onEnd }) {
  const { p1, p2, topic } = battle;
  const images = imageMap[topic] || [];

  const [index, setIndex] = useState(0);
  const [turn, setTurn] = useState(p1); // active player
  const [showAnswer, setShowAnswer] = useState(false);

  const [time, setTime] = useState({
    [p1.id]: 30,
    [p2.id]: 30,
  });

  const [ended, setEnded] = useState(false);
  const [locked, setLocked] = useState(false);

  // =============================
  // Timer
  // =============================
  useEffect(() => {
    if (ended) return;

    const timer = setInterval(() => {
      setTime(prev => {
        const currentId = turn.id;
        const newTime = prev[currentId] - 1;

        if (newTime <= 0) {
          clearInterval(timer);
          finishBattle(prev); 
          return prev;
        }

        return { ...prev, [currentId]: newTime };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [turn, ended]);

  // =============================
  // End of round
  // =============================
  const finishBattle = (finalTime) => {
    
    if (ended) return;
    setEnded(true);

    const winner = finalTime[p1.id] > finalTime[p2.id] ? p1 : p2;
    const loser = winner.id === p1.id ? p2 : p1;

    onEnd(winner, topic);
  };

  // =============================
  // Next image
  // =============================
  const nextImage = () => {
    if (ended) return;
    if (index + 1 >= images.length) {
      finishBattle(time);
      return;
    }
    setIndex(i => i + 1);
    setShowAnswer(false);
    setLocked(false);
  };

  // =============================
  // User actions
  // =============================
  const onYes = () => {
    if (locked || ended) return;
    setLocked(true);

    setTurn(turn.id === p1.id ? p2 : p1);
    setShowAnswer(true);

    setTimeout(nextImage, 600);
  };

  const onNo = () => {
    if (locked || ended) return;
    setLocked(true);

    setTime(prev => {
      const currentId = turn.id;
      const newTime = prev[currentId] - 3;

      if (newTime <= 0) {
        finishBattle({ ...prev, [currentId]: 0 });
        return prev;
      }

      return { ...prev, [currentId]: newTime };
    });

    setShowAnswer(true);
    setTimeout(nextImage, 600);
  };

  // =============================
  // Keyboard
  // =============================
  useEffect(() => {
    const yesKeys = new Set(["y","Y","ArrowRight"]); 
    const noKeys = new Set(["x","X","ArrowLeft"]); 

    const handleKey = (e) => {
      if (yesKeys.has(e.key)) onYes();
      if (noKeys.has(e.key)) onNo();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [turn, locked, ended]);

  if (!images[index]) return null;
  const current = images[index];
   const answer = current.answer
  return (
<div>
  <img src={current.src} alt={answer} style={{ height: 300, objectFit: "cover" }} />
  <div className="hud" role="img" aria-label="Scoreboard: Armand 44 vs Matt 45, event Push-Ups">
    {/* <!-- top ribbons --> */}
    <div className={"nameplate left " + (turn.id === p1.id ? "active" : "")}>{p1.name}</div>
    <div className="state left">KS</div>

    <div className={"nameplate right " + (turn.id === p2.id ? "active" : "")}>{p2.name}</div>
    <div className="state right">TX</div>

    {/* <!-- main row --> */}
    <div className={"score left " + (turn.id === p1.id ? "active" : "")}>{time[p1.id]} </div>
    <div className="join left"></div>

    <div className="center">
      <div className="event"> {showAnswer && answer}</div>
    </div>

    <div className="join right"></div>
    <div className={"score right " + (turn.id === p2.id ? "active" : "")}>{time[p2.id]}</div>
  </div>
    <p className="footer">Y = Knew | X = Didn't know</p>
</div>

  );
}
