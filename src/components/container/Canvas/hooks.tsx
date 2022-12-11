import { Canvas_Size } from "common/style-utils";
import * as React from "react";
import { useState } from "react";
import { InputRangeEvent, CanvasMouseEvent } from "common/type";

export const useCanvas = (
  context: CanvasRenderingContext2D,
  lineWidth: number,
  color: string,
  isFillMode: boolean
) => {
  const [isMouseDown, setIsMouseDown] = useState(false);

  const getInitialPosition = (e: CanvasMouseEvent) => {
    if (isFillMode) {
      context.fillStyle = color;
      context.fillRect(
        0,
        0,
        Number(`${Canvas_Size.Width}`),
        Number(`${Canvas_Size.Height}`)
      );
      return;
    }

    setIsMouseDown(true);
    context.beginPath();
    context.moveTo(e.clientX, e.clientY);
  };

  const continueDrawing = (e: CanvasMouseEvent) => {
    if (!isMouseDown) return;

    context.strokeStyle = color;
    context.lineWidth = lineWidth;
    context.lineTo(e.clientX, e.clientY);
    context.stroke();
  };

  const endDrawing = (e: CanvasMouseEvent) => {
    if (!context) return;
    context.closePath();
    setIsMouseDown(false);
  };

  const EraseDrawing = () => {
    context.clearRect(
      0,
      0,
      Number(`${Canvas_Size.Width}`),
      Number(`${Canvas_Size.Height}`)
    );
  };

  return {
    getInitialPosition,
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
    setStrokeMode: () => setIsFillMode(false)
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
