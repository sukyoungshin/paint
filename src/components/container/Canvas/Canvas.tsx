import { ColorChangeButton, ColorPicker, DrawModeOptions } from "components";
import * as React from "react";
import { useRef } from "react";
import styled from "styled-components";
import { brushColors } from "common/data";
import {
  useColorPicker,
  useBrushThickness,
  useCanvas,
  useDrawingMode
} from "./hooks";

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  if (!canvasRef) throw new Error("Canvas is not available.");
  const { lineWidth, changeBrushLineWidth } = useBrushThickness();
  const { isFillMode, setFillMode, setDrawMode } = useDrawingMode();

  const { color, changeColorByColorPicker } = useColorPicker();
  const { getCoordinate, startPaint, endPaint } = useCanvas(
    canvasRef,
    lineWidth,
    color,
    isFillMode
  );

  return (
    <>
      <CanvasElement
        width="800"
        height="800"
        ref={canvasRef}
        onMouseMove={getCoordinate}
        onMouseDown={startPaint}
        onMouseUp={endPaint}
        onMouseLeave={endPaint}
      >
        Your browser does not support HTML5 Canvas.
      </CanvasElement>
      <DrawModeOptions
        isFillMode={isFillMode}
        setFillMode={setFillMode}
        setDrawMode={setDrawMode}
      />
      <hr />
      Color Change
      <ColorPicker
        brushColor={color}
        changeColorByColorPicker={changeColorByColorPicker}
      />
      <ColorButtons>
        {brushColors.map((brushColor) => {
          return (
            <ColorChangeButton
              key={brushColor}
              dataColor={brushColor}
              backgroundColor={brushColor}
            />
          );
        })}
      </ColorButtons>
      {!isFillMode && (
        <>
          Brush Thickness
          <BrushLineWidthRange
            type="range"
            min="1"
            max="10"
            step="0.1"
            value={lineWidth}
            onChange={changeBrushLineWidth}
          />
        </>
      )}
    </>
  );
};

export default Canvas;

const CanvasElement = styled.canvas`
  width: 800px;
  height: 800px;
  border: 1px solid black;
`;
const BrushLineWidthRange = styled.input`
  display: block;
`;
const ColorButtons = styled.div``;
