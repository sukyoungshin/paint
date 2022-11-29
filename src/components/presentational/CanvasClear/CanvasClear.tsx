import { Icon_Size } from "common/style-utils";
import * as React from "react";
import { RiEraserFill } from "react-icons/ri";
import styled from "styled-components";

interface IProps {
  EraseDrawing: () => void;
}

const ClearCanvasButton = ({ EraseDrawing }: IProps) => {
  return (
    <ClearButton type="button" onClick={EraseDrawing}>
      <RiEraserFill />
    </ClearButton>
  );
};

export default ClearCanvasButton;

const ClearButton = styled.button`
  width: ${Icon_Size.Small}px;
  height: ${Icon_Size.Small}px;

  color: black;
  background-color: white;

  &:is(:focus, :active, :hover) {
    color: white;
    background-color: black;
  }
`;
