import React, { useState } from "react";

const BoardComponent = () => {
  const [boardSize, setBoardSize] = useState(5);
  const [myColor, setMyColor] = useState("#0000FF"); // Default to blue
  const [playerName, setPlayerName] = useState("");
  const [showName, setShowName] = useState(false);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      {/* Input Form */}
      <form
        onSubmit={(e) => e.preventDefault()}
        style={{ marginBottom: "20px" }}
      >
        <input
          type="number"
          min="1"
          value={boardSize}
          onChange={(e) => setBoardSize(Number(e.target.value))}
          style={{ marginRight: "10px", padding: "5px" }}
        />
        <input
          type="color"
          value={myColor}
          onChange={(e) => setMyColor(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <button
          style={{
            backgroundColor: myColor,
            color: "white",
            border: "none",
            padding: "5px 10px",
            cursor: "pointer",
          }}
        >
          Chill
        </button>
      </form>

      {/* Board Grid */}
      <div style={{ display: "flex", flexDirection: "column", width: "600px" }}>
        {Array.from({ length: boardSize }).map((_, rowIdx) => (
          <div key={rowIdx} style={{ display: "flex" }}>
            {Array.from({ length: boardSize }).map((_, colIdx) => (
              <div
                key={colIdx}
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: myColor,
                  textAlign: "center",
                  lineHeight: "50px",
                  fontWeight: "bold",
                  color: "white",
                  flex: "1",
                  transition: `background-color ${boardSize / 8}s ease`,
                }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = "red")}
                onMouseLeave={(e) => (e.target.style.backgroundColor = myColor)}
              >
                {rowIdx + 1},{colIdx + 1}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Name Input */}
      <div
        style={{
          borderWidth: "10px",
          borderStyle: "solid",
          padding: "10px",
          marginTop: "20px",
          textAlign: "center",
          animation: "changeColor 10s infinite alternate",
        }}
      >
        {showName ? (
          <h3>Player: {playerName}</h3>
        ) : (
          <input
            type="text"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            style={{ padding: "5px", marginRight: "10px" }}
          />
        )}
        <button
          onClick={() => setShowName(!showName)}
          style={{
            padding: "5px 10px",
            border: "none",
            cursor: "pointer",
            backgroundColor: "#333",
            color: "white",
          }}
        >
          {showName ? "Edit" : "Submit"}
        </button>
      </div>

      {/* Rainbow Border Animation (CSS in JS) */}
      <style>
        {`
          @keyframes changeColor {
            0% { border-color: red; }
            33% { border-color: yellow; }
            66% { border-color: blue; }
            100% { border-color: green; }
          }
        `}
      </style>
    </div>
  );
};

export default BoardComponent;
