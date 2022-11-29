import {
  BrushLineWidthOption,
  CanvasClear,
  ColorPickerOption,
  DrawModeOptions
} from "components";
import * as React from "react";
import { useRef } from "react";
import styled from "styled-components";
import {
  useColorPicker,
  useBrushThickness,
  useCanvas,
  useDrawingMode
} from "./hooks";
import { RiSave3Fill, RiShareFill } from "react-icons/ri";
import { Canvas_Size, Icon_Size } from "common/style-utils";
const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  if (!canvasRef) throw new Error("Canvas is not available.");

  const { lineWidth, changeBrushLineWidth } = useBrushThickness();
  const { isFillMode, setFillMode, setDrawMode } = useDrawingMode();
  const { color, changeColorByColorPicker } = useColorPicker();
  const {
    getPosition,
    startDrawing,
    continueDrawing,
    endDrawing,
    EraseDrawing
  } = useCanvas(canvasRef, lineWidth, color, isFillMode);

  return (
    <>
      <CanvasElement
        ref={canvasRef}
        onMouseMove={getPosition}
        onClick={startDrawing}
        onMouseDown={continueDrawing}
        onMouseUp={endDrawing}
        width={`${Canvas_Size.Width}`}
        height={`${Canvas_Size.Height}`}
      />
      <OptionsWrapper>
        <DrawModeOptions
          isFillMode={isFillMode}
          setFillMode={setFillMode}
          setDrawMode={setDrawMode}
        />
        <ColorPickerOption
          brushColor={color}
          changeColorByColorPicker={changeColorByColorPicker}
        />
        <BrushLineWidthOption
          lineWidth={lineWidth}
          changeBrushLineWidth={changeBrushLineWidth}
          isDisabled={isFillMode}
        />
        <CanvasClear EraseDrawing={EraseDrawing} />
      </OptionsWrapper>
    </>
  );
};

export default Canvas;

const CanvasElement = styled.canvas`
  width: 800px;
  height: 800px;
  border: 1px solid black;
`;
const OptionsWrapper = styled.div`
  width: 800px;
  height: 88px;

  display: flex;
  align-items: center;
  gap: 16px;
`;
