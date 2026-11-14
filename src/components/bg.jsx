import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const minGap = 30;
    const lineLength = 120;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);
    
    const createLines = () => {
      const lines = [];
      const rows = Math.floor(canvas.height / minGap);

      for (let i = 0; i < rows; i++) {
        lines.push({
          x: Math.random() * canvas.width,
          y: i * minGap + minGap / 2,
          speed: (Math.random() - 0.5) * 1.5
        });
      }

      return lines;
    };

    let lines = createLines();

    const draw = () => {
      ctx.fillStyle = "#050b2e";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.shadowBlur = 20;
      ctx.shadowColor = "#2aa8ff";
      ctx.lineWidth = 2;

      lines.forEach(l => {
        ctx.strokeStyle = "rgba(50,150,255,0.8)";

        ctx.beginPath();
        ctx.moveTo(l.x, l.y);
        ctx.lineTo(l.x + lineLength, l.y);
        ctx.stroke();

        l.x += l.speed;

        if (l.x > canvas.width + lineLength) l.x = -lineLength;
        if (l.x < -lineLength) l.x = canvas.width + lineLength;
      });

      animationRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        pointerEvents: "none"
      }}
    />
  );
}
