import "./ArenaBoard.css";

export function ArenaBoard({ board, selected, onTileClick }) {
  return (
    <div className="Arena" style={{ display: "grid", gridTemplateColumns: "repeat(5, 20%)", gap: 0 }}>
      {board.map((category) => (
        <div
          key={category.topic}
          onClick={(event) => onTileClick(category,event)}
          className={"neon-box " + (category.owner ? category.owner.name:"")}
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
