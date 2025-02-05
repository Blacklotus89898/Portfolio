import React, { useRef, useEffect, useState } from "react";

const FadingCanvas = () => {
  const canvasRef = useRef(null);
  const [drawing, setDrawing] = useState(false);
  const [lines, setLines] = useState([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // Make canvas transparent
    context.clearRect(0, 0, canvas.width, canvas.height);
  }, []);

  const startDrawing = (e) => {
    setDrawing(true);
  };

  const endDrawing = () => {
    setDrawing(false);
  };

  const draw = (e) => {
    if (!drawing) return;
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Update state and trigger redraw
    setLines((prevLines) => {
      const updatedLines = [
        ...prevLines,
        { x, y, opacity: 1, timestamp: Date.now() },
      ];
      return updatedLines;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setLines((prevLines) =>
        prevLines
          .map((line) => ({
            ...line,
            opacity: Math.max(0, line.opacity - 0.01), // Slower fade
          }))
          .filter((line) => line.opacity > 0) // Remove fully faded lines
      );
    }, 50); // Adjust for smoother fading

    return () => clearInterval(interval);
  }, []);

  // Trigger redraw when lines update
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    context.clearRect(0, 0, canvas.width, canvas.height);

    lines.forEach((line) => {
      context.beginPath();
      context.arc(line.x, line.y, 3, 0, Math.PI * 2);
      context.fillStyle = `rgba(255, 0, 0, ${line.opacity})`; // Red fading effect
      context.fill();
    });
  }, [lines]);

  return (
    <div style={containerStyle}>
      <canvas
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseUp={endDrawing}
        onMouseMove={draw}
        width={800}
        height={400}
        style={canvasStyle}
      />
    </div>
  );
};

// **Styling**
const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  position: "relative",
};

const canvasStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  background: "transparent",
  border: "1px solid lightgray",
};

export default FadingCanvas;
