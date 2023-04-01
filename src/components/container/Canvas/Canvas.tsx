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
} from "components/hooks/useCanvas";
import { Canvas_Size, Colors } from "utils/style-utils";
import { ButtonWithIcon } from "components/common";
import { sampleColors } from "utils/data";
import { downloadImage, shareCurrentPage } from "./utils";

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
        <Title>Painting</Title>
        <ButtonWithIcon buttonType="share" actionHandler={shareCurrentPage} />
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
        <OptionList>
          <DrawModeOptions
            isFillMode={isFillMode}
            setFillMode={setFillMode}
            setStrokeMode={setStrokeMode}
          />
        </OptionList>
        <OptionList>
          <ColorPickerOption color={swatchColor} isDisabled={true} />
        </OptionList>
        <OptionList style={{ listStyle: "none" }}>
          {sampleColors.map((color) => (
            <ColorSwatches
              key={color}
              dataColor={color}
              onClick={changeSwatchColor}
            />
          ))}
        </OptionList>
        <OptionList>
          <BrushLineWidthOption
            lineWidth={lineWidth}
            changeBrushLineWidth={changeBrushLineWidth}
            isDisabled={isFillMode}
          />
        </OptionList>
        <OptionList>
          Reset{" "}
          <ButtonWithIcon buttonType="erase" actionHandler={EraseDrawing} />
        </OptionList>
      </MoreOptions>
    </Container>
  );
};

export default Canvas;

const DefaultSize = '800px';
const Container = styled.div`
  width: ${DefaultSize};
`;
const CanvasElement = styled.canvas`
  width: 100%;
  height: ${DefaultSize};
  border: 1px solid ${Colors.Black};
`;

const Header = styled.header`
  padding: 0 20px;
  width: 100%;
  height: 85px;
  display: flex;
  align-items: center;
  background-color: ${Colors.LightWhite};
`;

const Title = styled.h1`
  display: inline-block;
  margin-right: auto;
`

const MoreOptions = styled.ul`
  width: 100%;
  background-color: ${Colors.LightWhite};
`;
const OptionList = styled.li`
  height: 40px;
  line-height: 40px;
`;
