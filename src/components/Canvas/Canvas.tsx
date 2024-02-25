import React from "react";
import styled from "styled-components";
import { Canvas_Size, Colors } from "utils/style-utils";
import { CanvasMouseEvent } from "utils/type";

type CanvasComponentPropsType = {
  canvasRef: React.MutableRefObject<HTMLCanvasElement>;
  getInitialPosition: (e: CanvasMouseEvent) => void;
  continueDrawing: (e: CanvasMouseEvent) => void;
  endDrawing: () => void;
};

const CanvasComponent = ({
  canvasRef,
  getInitialPosition,
  continueDrawing,
  endDrawing,
}: CanvasComponentPropsType) => {
  return (
    <Container>
      <canvas
        id="canvas"
        ref={canvasRef}
        onMouseDown={getInitialPosition}
        onMouseMove={continueDrawing}
        onMouseUp={endDrawing}
        width={`${Canvas_Size.Width}`}
        height={`${Canvas_Size.Height}`}
      />
    </Container>
  );
};

export default CanvasComponent;

const Container = styled.div`
  margin-bottom: 8px;
  border: 1px solid ${Colors.Black};
  box-sizing: border-box;
`;
