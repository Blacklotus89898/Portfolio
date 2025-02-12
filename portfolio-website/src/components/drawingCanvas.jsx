import { useRef, useEffect, useState } from "react";
import FadingCanvas from "./fading";

const DrawingCanvas = () => {
  const canvasRef = useRef(null);
  const [drawing, setDrawing] = useState(false);
  const [hue, setHue] = useState(0);
  const [style, setStyle] = useState("black");

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  const startDrawing = (e) => {
    setDrawing(true);
    draw(e);
  };

  const endDrawing = () => {
    setDrawing(false);
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.beginPath();
  };

  const draw = (e) => {
    if (!drawing) return;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    context.lineWidth = 1;
    context.lineCap = "round";
    context.strokeStyle = `hsl(${hue}, 100%, 50%)`;

    // context.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    context.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    context.stroke();
    context.beginPath();
    context.moveTo(e.clientX - rect.left, e.clientY - rect.top);

    setHue((prevHue) => (prevHue + 1) % 360);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setHue((prevHue) => (prevHue > 0 ? prevHue - 1 : 0));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const handleReset = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);
  };

  const handleSwitch = () => {
    setStyle(style === "black" ? "white" : "black");
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div>
          <button
            onClick={handleReset}
            style={{
              // margin: "10px",
              border: "1px solid black",
              padding: "10px",
              // borderRadius: "5px",
              backgroundColor: "black",
              color: "white",
            }}
          >
            Reset
          </button>
          <button
            onClick={handleSwitch}
            style={{
              // margin: "10px",
              padding: "10px",
              border: "1px solid black",
              // borderRadius: "5px",
              backgroundColor: "white",
              color: "black",
            }}
          >
            Switch Canva Style
          </button>
        </div>
        {style === "black" ? (
          <canvas
            ref={canvasRef}
            onMouseDown={startDrawing}
            onMouseUp={endDrawing}
            onMouseMove={draw}
            width={450}
            height={300}
            style={{ border: "1px solid lightgray", background: "black" }}
          />
        ) : (
          <FadingCanvas></FadingCanvas>
        )}
      </div>
    </>
  );
};

export default DrawingCanvas;
