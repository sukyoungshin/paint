import {
  BrushLineWidthOption,
  ColorSwatches,
  ColorPickerOption,
  DrawModeOptions
} from "components";
import React, { useRef } from "react";
import styled from "styled-components";
import {
  useBrushThickness,
  useCanvas,
  useDrawingMode,
  useColorSwatches
} from "./hooks";
import { Canvas_Size, Colors } from "utils/style-utils";
import { ButtonWithIcon } from "components/common";
import { sampleColors } from "utils/data";
import { downloadImage } from "./utils";
const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const context = canvasRef.current?.getContext("2d");
  if (!canvasRef) throw new Error("Canvas is not available.");

  const { lineWidth, changeBrushLineWidth } = useBrushThickness();
  const { isFillMode, setFillMode, setStrokeMode } = useDrawingMode();
  const { swatchColor, changeSwatchColor } = useColorSwatches();
  const { getInitialPosition, continueDrawing, endDrawing, EraseDrawing } =
    useCanvas(context, lineWidth, swatchColor, isFillMode);

  return (
    <Container>
      <Header>
        <h1>Painting</h1>
        <ButtonWithIcon
          buttonType="share"
          actionHandler={() => console.log("공유하기")}
        />
        <ButtonWithIcon buttonType="save" actionHandler={downloadImage} />
      </Header>
      <CanvasElement
        id="canvas"
        ref={canvasRef}
        onMouseDown={getInitialPosition}
        onMouseMove={continueDrawing}
        onMouseUp={endDrawing}
        width={`${Canvas_Size.Width}`}
        height={`${Canvas_Size.Height}`}
      />
      <MoreOptions>
        <li>
          <DrawModeOptions
            isFillMode={isFillMode}
            setFillMode={setFillMode}
            setStrokeMode={setStrokeMode}
          />
        </li>
        <li>
          <ColorPickerOption color={swatchColor} isDisabled={true} />
        </li>
        <li style={{ listStyle: "none" }}>
          {sampleColors.map((color) => (
            <ColorSwatches
              key={color}
              dataColor={color}
              onClick={changeSwatchColor}
            />
          ))}
        </li>
        <li>
          <BrushLineWidthOption
            lineWidth={lineWidth}
            changeBrushLineWidth={changeBrushLineWidth}
            isDisabled={isFillMode}
          />
        </li>
        <li>
          Reset{" "}
          <ButtonWithIcon buttonType="erase" actionHandler={EraseDrawing} />
        </li>
      </MoreOptions>
    </Container>
  );
};

export default Canvas;

const Container = styled.div`
  width: 800px;
`;
const CanvasElement = styled.canvas`
  width: 100%;
  height: 800px;
  border: 1px solid ${Colors.Black};
`;

const Header = styled.header`
  padding: 0 20px;
  width: 100%;
  height: 85px;
  display: flex;
  align-items: center;
  background-color: ${Colors.LightWhite};

  h1 {
    display: inline-block;
    margin-right: auto;
  }
`;

const MoreOptions = styled.ul`
  width: 100%;
  background-color: ${Colors.LightWhite};

  li {
    height: 40px;
    line-height: 40px;
  }
`;
