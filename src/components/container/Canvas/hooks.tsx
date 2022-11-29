import { Canvas_Size } from "common/style-utils";
import * as React from "react";
import { useState } from "react";
import { InputRangeEvent, CanvasMouseEvent } from "../../../common/type";

export const useCanvas = (
  canvasRef: any,
  lineWidth: number,
  color: string,
  isFillMode: boolean
) => {
  const [client, setClient] = useState({ clientX: 0, clientY: 0 });
  let isPainting = false;

  const getPosition = (e: CanvasMouseEvent) => {
    setClient({
      clientX: e.clientX,
      clientY: e.clientY
    });
  };

  const startDrawing = (e: CanvasMouseEvent) => {
    const context = e.currentTarget.getContext("2d");
    context.beginPath();

    if (isFillMode) {
      context.fillStyle = color;
      context.fillRect(
        0,
        0,
        Number(`${Canvas_Size.Width}`),
        Number(`${Canvas_Size.Height}`)
      );
    } else {
      context.moveTo(client.clientX, client.clientY);
      context.strokeStyle = color;
    }
    context.lineWidth = lineWidth;

    isPainting = true;
  };

  const continueDrawing = (e: CanvasMouseEvent) => {
    const context = e.currentTarget.getContext("2d");

    context.lineTo(client.clientX, client.clientY);
    context.stroke();
  };

  const endDrawing = (e: CanvasMouseEvent) => {
    const context = e.currentTarget.getContext("2d");
    if (isPainting) return;

    context.closePath();
    isPainting = false;
  };

  const EraseDrawing = () => {
    const context = canvasRef.current.getContext("2d");
    context.clearRect(0, 0, `${Canvas_Size.Width}`, `${Canvas_Size.Height}`);
  };

  return {
    getPosition,
    startDrawing,
    continueDrawing,
    endDrawing,
    EraseDrawing
  };
};

export const useDrawingMode = () => {
  const [isFillMode, setIsFillMode] = useState(true);

  return {
    isFillMode,
    setFillMode: () => setIsFillMode(true),
    setDrawMode: () => setIsFillMode(false)
  };
};

export const useBrushThickness = () => {
  const [lineWidth, setLineWidth] = useState(1);
  const changeBrushLineWidth = (e: InputRangeEvent) =>
    setLineWidth(e.target.valueAsNumber);

  return {
    lineWidth,
    changeBrushLineWidth
  };
};

export const useColorPicker = () => {
  const [color, setColor] = useState("#000000");
  const changeColorByColorPicker = (e: InputRangeEvent | string) => {
    if (typeof e === "string") {
      setColor(e);
    } else {
      setColor(e.target.value);
    }
  };

  return {
    color,
    changeColorByColorPicker
  };
};

export const useColorButton = () => {
  const [color, setColor] = useState("#000000");
  const changeColorByButton = (e: React.SyntheticEvent) => {
    if (!(e.target instanceof HTMLButtonElement)) return;
    setColor(e.target.dataset.color);
  };

  return {
    color,
    changeColorByButton
  };
};
