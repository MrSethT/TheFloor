import { useEffect, useRef, useState, useCallback } from "react";
import { imageMap } from "../data/imageMap.js";
import "./BattleFloor.css";

export function BattleFloor({ battle, onEnd }) {
  const { p1, p2, topic } = battle;
  const images = imageMap[topic] || [];

  const [index, setIndex] = useState(-3);
  const [turn, setTurn] = useState(p1);
  const [showAnswer, setShowAnswer] = useState(false);

  const [time, setTime] = useState({
    [p1.id]: 30,
    [p2.id]: 30,
  });

  const [ended, setEnded] = useState(false);
  const [locked, setLocked] = useState(false);

  // ---- refs to avoid stale closures inside setInterval
  const indexRef = useRef(index);
  const turnRef = useRef(turn);
  const endedRef = useRef(ended);

  useEffect(() => {
    indexRef.current = index;
  }, [index]);

  useEffect(() => {
    turnRef.current = turn;
  }, [turn]);

  useEffect(() => {
    endedRef.current = ended;
  }, [ended]);

  // =============================
  // End of round
  // =============================
  const finishBattle = useCallback(
    (finalTime) => {
      if (endedRef.current) return;
      endedRef.current = true; // prevent double-finish even before React re-renders
      setEnded(true);

      const winner = finalTime[p1.id] > finalTime[p2.id] ? p1 : p2;
      onEnd(winner, topic);
    },
    [onEnd, p1, p2, topic]
  );

  // =============================
  // Timer
  // =============================
  useEffect(() => {
    if (ended) return;

    const timerId = window.setInterval(() => {
      if (endedRef.current) return;

      // countdown phase: -3, -2, -1, 0 then start time ticking
      if (indexRef.current < 0) {
        setIndex((i) => i + 1);
        return;
      }

      // time ticking phase
      setTime((prev) => {
        const currentId = turnRef.current.id;
        const newTime = prev[currentId] - 1;

        if (newTime < 0) {
          window.clearInterval(timerId);
          finishBattle(prev);
          return prev;
        }

        return { ...prev, [currentId]: newTime };
      });
    }, 1000);

    return () => window.clearInterval(timerId);
  }, [ended, finishBattle]);

  // =============================
  // Next image
  // =============================
  const nextImage = () => {
    if (ended) return;

    if (index < 0) {
      // (optional) you can decide what "next" means during countdown
    } else if (index + 1 >= images.length) {
      finishBattle(time);
      return;
    }

    setIndex((i) => i + 1);
    setShowAnswer(false);
    setLocked(false);
  };

  // =============================
  // User actions
  // =============================
  const onYes = () => {
    if (locked || ended) return;
    setLocked(true);

    setTurn((t) => (t.id === p1.id ? p2 : p1));
    setShowAnswer(true);

    setTimeout(nextImage, 600);
  };

  const onNo = () => {
    if (locked || ended) return;
    setLocked(true);

    setTime((prev) => {
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
    const yesKeys = new Set(["y", "Y", "ArrowRight"]);
    const noKeys = new Set(["x", "X", "ArrowLeft"]);

    const handleKey = (e) => {
      if (yesKeys.has(e.key)) onYes();
      if (noKeys.has(e.key)) onNo();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [turn, locked, ended]);

  const current = images[index];
  const inCountdown = index < 0;
  const answer = inCountdown ? "" : current?.answer ?? "";

  return (
    <div>
      {inCountdown ? (
        <div>
          <p className={Math.abs(index) == 3 ? "animated" : "hidden"}>3</p>
          <p className={Math.abs(index) == 2 ? "animated" : "hidden"}>2</p>
          <p className={Math.abs(index) == 1 ? "animated" : "hidden"}>1</p>
        </div>
      ) : (
        current && (
          <img
            src={current.src}
            alt={answer}
            style={{ height: 300, objectFit: "cover" }}
          />
        )
      )}

      <div className="hud" role="img" aria-label="Scoreboard">
        <div
          className={"nameplate left " + (turn.id === p1.id ? "active" : "")}
        >
          {p1.name}
        </div>
        <div className="state left"></div>

        <div
          className={"nameplate right " + (turn.id === p2.id ? "active" : "")}
        >
          {p2.name}
        </div>
        <div className="state right"></div>

        <div
          className={
            "score left " +
            (turn.id === p1.id ? "active" : "") +
            (time[p1.id] <= 5 ? " red" : "")
          }
        >
          {time[p1.id]}{" "}
        </div>
        <div className="join left"></div>

        <div className="center">
          <div className="event"> {showAnswer && answer}</div>
        </div>

        <div className="join right"></div>
        <div
          className={
            "score right " +
            (turn.id === p2.id ? "active" : "") +
            (time[p2.id] <= 5 ? " red" : "")
          }
        >
          {time[p2.id]}
        </div>
      </div>

      <p className="footer">Y = Knew | X = Didn't know</p>
    </div>
  );
}
