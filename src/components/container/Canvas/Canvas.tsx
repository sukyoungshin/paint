import {
  BrushLineWidthOption,
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
import { Canvas_Size } from "common/style-utils";
import { ButtonWithIcon } from "components/common";
const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const context = canvasRef.current?.getContext("2d");
  if (!canvasRef) throw new Error("Canvas is not available.");

  const { lineWidth, changeBrushLineWidth } = useBrushThickness();
  const { isFillMode, setFillMode, setStrokeMode } = useDrawingMode();
  const { color, changeColorByColorPicker } = useColorPicker();
  const { getInitialPosition, continueDrawing, endDrawing, EraseDrawing } =
    useCanvas(context, lineWidth, color, isFillMode);

  return (
    <>
      <nav>
        <ButtonWithIcon buttonType="erase" actionHandler={EraseDrawing} />
        <ButtonWithIcon
          buttonType="save"
          actionHandler={() => console.log("저장하기")}
        />
      </nav>
      <CanvasElement
        ref={canvasRef}
        onMouseDown={getInitialPosition}
        onMouseMove={continueDrawing}
        onMouseUp={endDrawing}
        width={`${Canvas_Size.Width}`}
        height={`${Canvas_Size.Height}`}
      />
      <OptionsWrapper>
        <DrawModeOptions
          isFillMode={isFillMode}
          setFillMode={setFillMode}
          setStrokeMode={setStrokeMode}
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
