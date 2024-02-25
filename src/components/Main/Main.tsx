import React, { useRef } from "react";
import styled from "styled-components";
import {
  useBrushThickness,
  useCanvas,
  useDrawingMode,
  useColorSwatches,
} from "components/hooks/useCanvas";
import {
  Colors,
  DefaultSize,
  Icon_Size,
  swatchColors,
} from "utils/style-utils";
import { BackgroundColorType } from "utils/type";
import { ButtonWithIcon, HeaderComponent } from "components";
import CanvasComponent from "components/Canvas/Canvas";

const Main = () => {
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
      <CanvasComponent
        canvasRef={canvasRef}
        getInitialPosition={getInitialPosition}
        continueDrawing={continueDrawing}
        endDrawing={endDrawing}
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
              key={color}
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

export default Main;

const Container = styled.div`
  width: ${DefaultSize};
  height: ${DefaultSize};
`;

const MoreOptions = styled.ul`
  margin: 0;
  width: 100%;
  background-color: ${Colors.LightWhite};
`;
const OptionList = styled.li`
  margin-bottom: 4px;
  height: 40px;
  line-height: 40px;
`;
const Picker = styled.input`
  width: ${Icon_Size.Small}px;
  height: ${Icon_Size.Small}px;
`;

const ColorSwatchButton = styled.button<BackgroundColorType>`
  width: ${Icon_Size.Small}px;
  height: ${Icon_Size.Small}px;
  ${({ backgroundColor }) =>
    backgroundColor &&
    `
      background-color: ${backgroundColor};
  `}
`;
