import * as React from "react";
import { useState } from "react";
import {
  InputRangeEvent,
  CanvasMouseEvent,
  CanvasRef
} from "../../../common/type";

export const useCanvas = (
  canvasRef: CanvasRef,
  lineWidth: number,
  color: string,
  isFillMode: boolean
) => {
  const [client, setClient] = useState({ clientX: 0, clientY: 0 });
  const [isPainting, setIsPainting] = useState(false);

  const getCoordinate = (e: CanvasMouseEvent) =>
    setClient({
      clientX: e.clientX,
      clientY: e.clientY
    });

  React.useEffect(() => {
    const context = canvasRef.current.getContext("2d");

    if (!isPainting) {
      context.beginPath();
      context.moveTo(client.clientX, client.clientY);
    }

    if (isFillMode) {
      context.fillStyle = color;
    } else {
      context.strokeStyle = color;
    }
    context.lineWidth = lineWidth;
    context.lineTo(client.clientX, client.clientY);

    if (isFillMode) {
      context.fillRect(0, 0, 800, 800);
    } else {
      context.stroke();
    }
  }, [canvasRef, isPainting, color, lineWidth, client, isFillMode]);

  return {
    getCoordinate,
    startPaint: () => setIsPainting(true),
    endPaint: () => setIsPainting(false)
  };
};

export const useDrawingMode = () => {
  const [isFillMode, setIsFillMode] = useState(false);

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
