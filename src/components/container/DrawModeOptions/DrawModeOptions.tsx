import * as React from "react";
import styled, { css } from "styled-components";
import { RiPaintFill, RiBrushFill } from "react-icons/ri";
import { Icon_Size } from "common/style-utils";

interface Props {
  isFillMode: boolean;
  setFillMode: () => void;
  setDrawMode: () => void;
}

const DrawModeOptions = ({ isFillMode, setFillMode, setDrawMode }: Props) => {
  return (
    <Container>
      Painting Mode
      <Button type="button" isActivated={isFillMode} onClick={setFillMode}>
        <RiPaintFill />
      </Button>
      <Button type="button" isActivated={!isFillMode} onClick={setDrawMode}>
        <RiBrushFill />
      </Button>
    </Container>
  );
};

export default DrawModeOptions;

const Container = styled.div``;
const Button = styled.button<{
  isActivated: boolean;
}>`
  width: ${Icon_Size.Small}px;
  height: ${Icon_Size.Small}px;

  color: black;
  background-color: white;

  ${(props) =>
    props.isActivated &&
    css`
      color: white;
      background-color: black;
    `}
`;