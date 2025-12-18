export function ArenaBoard({ board, selected, onTileClick }) {
  return (
    <div class="Arena" style={{ display: "grid", gridTemplateColumns: "repeat(5, 20%)", gap: 0 }}>
      {board.map((category) => (
        <div
          key={category.id}
          onClick={() => onTileClick(category)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: category.owner ? category.owner.color : category.color,
            border:"none",
            cursor: "pointer",
            transition: "background-color 0.3s",
            textTransform: "uppercase",
            color: "black",
          }}
        >
        
          {category.topic}

        </div>
      ))}
    </div>
  );
}
