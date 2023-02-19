import { Icon_Size } from "utils/style-utils";
import React from "react";
import styled from "styled-components";

type Props = {
  dataColor: string;
  onClick?: (e: any) => void;
};

const ColorSwatches = ({ dataColor, onClick }: Props) => {
  return (
    <Button
      type="button"
      data-color={dataColor}
      backgroundColor={dataColor}
      onClick={onClick}
    />
  );
};

export default ColorSwatches;

const Button = styled.button<{
  backgroundColor: string;
}>`
  margin-top: 4px;
  width: ${Icon_Size.Small}px;
  height: ${Icon_Size.Small}px;
  ${({ backgroundColor }) =>
    backgroundColor &&
    `
      background-color: ${backgroundColor};
  `}
  border: none;
`;
