import React, { useRef, useEffect, useState } from 'react';

const DrawingCanvas = () => {
  const canvasRef = useRef(null);
  const [drawing, setDrawing] = useState(false);
  const [hue, setHue] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.fillStyle = 'black';
    context.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  const startDrawing = (e) => {
    setDrawing(true);
    draw(e);
  };

  const endDrawing = () => {
    setDrawing(false);
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.beginPath();
  };

  const draw = (e) => {
    if (!drawing) return;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.lineWidth = 2;
    context.lineCap = 'round';
    context.strokeStyle = `hsl(${hue}, 100%, 50%)`;

    context.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    context.stroke();
    context.beginPath();
    context.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);

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
    const context = canvas.getContext('2d');
    context.fillStyle = 'black';
    context.fillRect(0, 0, canvas.width, canvas.height);
  }

  return (
    <>
    <button onClick={handleReset}>Reset</button>
    <canvas
      ref={canvasRef}
      onMouseDown={startDrawing}
      onMouseUp={endDrawing}
      onMouseMove={draw}
      width={500}
      height={300}
      style={{ border: '1px solid lightgray', background: 'black' }}
      />
      </>
  );
};

export default DrawingCanvas;