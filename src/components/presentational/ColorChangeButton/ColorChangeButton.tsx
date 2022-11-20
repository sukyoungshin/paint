import { Icon_Size } from "common/style-utils";
import * as React from "react";
import styled from "styled-components";

interface Props {
  dataColor: string;
  backgroundColor: string;
}

const ColorChangeButton = ({ dataColor, backgroundColor }: Props) => {
  return (
    <Button
      type="button"
      data-color={dataColor}
      style={{ backgroundColor: backgroundColor }}
    />
  );
};

export default ColorChangeButton;

const Button = styled.button`
  width: ${Icon_Size.Small}px;
  height: ${Icon_Size.Small}px;
  border: none;
`;
