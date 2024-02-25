import React, { useRef } from "react";
import styled from "styled-components";
import {
  useBrushThickness,
  useCanvas,
  useDrawingMode,
  useColorSwatches,
} from "components/hooks/useCanvas";
import {
  Canvas_Size,
  Colors,
  Icon_Size,
  swatchColors,
} from "utils/style-utils";
import { ButtonWithIcon } from "components/common";
import { downloadImage, shareCurrentPage } from "./utils";
import { BackgroundColorType } from "utils/type";

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
      <HeaderComponent />
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
          <span>Painting Mode</span>{" "}
          <ButtonWithIcon
            buttonType="fill"
            isActivated={isFillMode}
            actionHandler={setFillMode}
          />
          <ButtonWithIcon
            buttonType="stroke"
            isActivated={!isFillMode}
            actionHandler={setStrokeMode}
          />
        </OptionList>
        <OptionList>
          <span>Color Selection</span>{" "}
          <Picker type="color" value={swatchColor} disabled={true} />
        </OptionList>
        <OptionList style={{ listStyle: "none" }}>
          {swatchColors.map((color) => (
            <ColorSwatchButton
              type="button"
              data-color={color}
              backgroundColor={color}
              onClick={changeSwatchColor}
            />
          ))}
        </OptionList>
        <OptionList>
          <span>Brush Thickness</span>{" "}
          <input
            type="range"
            min="1"
            max="10"
            step="0.1"
            value={lineWidth}
            onChange={changeBrushLineWidth}
            disabled={isFillMode}
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

const HeaderComponent = () => {
  return (
    <>
      <Header>
        <Title>Painting</Title>
        <ButtonWithIcon buttonType="share" actionHandler={shareCurrentPage} />
        <ButtonWithIcon buttonType="save" actionHandler={downloadImage} />
      </Header>
    </>
  );
};

const DefaultSize = "800px";
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
`;

const MoreOptions = styled.ul`
  width: 100%;
  background-color: ${Colors.LightWhite};
`;
const OptionList = styled.li`
  height: 40px;
  line-height: 40px;
`;
const Picker = styled.input`
  width: ${Icon_Size.Small}px;
  height: ${Icon_Size.Small}px;
`;

const ColorSwatchButton = styled.button<BackgroundColorType>`
  margin-top: 4px;
  width: ${Icon_Size.Small}px;
  height: ${Icon_Size.Small}px;
  ${({ backgroundColor }) =>
    backgroundColor &&
    `
      background-color: ${backgroundColor};
  `}
`;
