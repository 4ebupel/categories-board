import { FC, useEffect, useRef } from "react";
import './Canvas.scss';

export const Canvas: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const context = canvas.getContext('2d');

    if(!context) {
      return;
    }
  }, [])

  return <canvas className="canvas" ref={canvasRef}></canvas>;
}