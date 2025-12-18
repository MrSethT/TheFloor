import "./ArenaBoard.css";

export function ArenaBoard({ board, selected, onTileClick }) {
  return (
    <div class="Arena" style={{ display: "grid", gridTemplateColumns: "repeat(5, 20%)", gap: 0 }}>
      {board.map((category) => (
        <div
          key={category.id}
          onClick={() => onTileClick(category)}
          className="neon-box"
          style={{
            backgroundColor: category.owner ? category.owner.color : "",
          }}
        >
        
          {category.topic}

        </div>
      ))}
    </div>
  );
}
