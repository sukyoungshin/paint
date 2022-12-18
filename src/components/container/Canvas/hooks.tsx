import { Canvas_Size, Colors } from "common/style-utils";
import React from "react";
import { useState } from "react";
import {
  InputRangeEvent,
  CanvasMouseEvent,
  TypeColorPicker
} from "common/type";

export const useCanvas = (
  context: CanvasRenderingContext2D,
  lineWidth: number,
  swatchColor: string,
  isFillMode: boolean
) => {
  const [isMouseDown, setIsMouseDown] = useState(false);

  const getInitialPosition = (e: CanvasMouseEvent) => {
    if (isFillMode) {
      context.fillStyle = swatchColor;
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

    context.strokeStyle = swatchColor;
    context.lineWidth = lineWidth;
    context.lineTo(e.clientX, e.clientY);
    context.stroke();
  };

  const endDrawing = () => {
    if (!context) return;
    context.closePath();
    setIsMouseDown(false);
  };

  const EraseDrawing = () => {
    if (!context) return;
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
  const [isFillMode, setIsFillMode] = useState(false);

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

export const useColorSwatches = () => {
  const [swatchColor, setSwatchColor] = useState(Colors.Black);
  const changeSwatchColor = (e: React.SyntheticEvent) => {
    if (!(e.target instanceof HTMLButtonElement)) return;
    setSwatchColor(e.target.dataset.color);
  };

  return {
    swatchColor,
    changeSwatchColor
  };
};
