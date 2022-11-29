import { InputRangeEvent } from "common/type";
import * as React from "react";
import styled from "styled-components";

interface IProps {
  lineWidth: number;
  changeBrushLineWidth: (e: InputRangeEvent) => void;
  isDisabled: boolean;
}

const BrushLineWidthOption = ({
  lineWidth,
  changeBrushLineWidth,
  isDisabled
}: IProps) => {
  return (
    <Container>
      <p>Brush Thickness</p>
      <BrushLineWidth
        type="range"
        min="1"
        max="10"
        step="0.1"
        value={lineWidth}
        onChange={changeBrushLineWidth}
        disabled={isDisabled}
      />
    </Container>
  );
};

export default BrushLineWidthOption;

const Container = styled.div`
  width: fit-content;
  height: 100%;
  border: 1px solid black;
`;
const BrushLineWidth = styled.input`
  display: block;
`;
