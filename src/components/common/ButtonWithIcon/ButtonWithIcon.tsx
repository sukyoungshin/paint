import { Icon_Size, Colors } from "utils/style-utils";
import React from "react";
import {
  RiEraserFill,
  RiSave3Fill,
  RiShareFill,
  RiPaintFill,
  RiBrushFill,
} from "react-icons/ri";
import styled from "styled-components";

type BasePropsType = {
  buttonType: string;
  actionHandler: () => void;
};
type ButtonPropsType = {
  isActivated?: boolean;
};
export type ButtonWithIconPropsType = BasePropsType & ButtonPropsType;

const buttonTypeAndIcon = {
  erase: RiEraserFill,
  save: RiSave3Fill,
  share: RiShareFill,
  fill: RiPaintFill,
  stroke: RiBrushFill,
};

const getButtonIcon = (buttonType: ButtonWithIconPropsType["buttonType"]) => {
  for (let i = 0; i < Object.entries(buttonTypeAndIcon).length; i++) {
    const [key, value] = Object.entries(buttonTypeAndIcon)[i];

    return key === buttonType ? value : null;
  }
};

const ButtonWithIcon = ({
  buttonType,
  actionHandler,
  isActivated,
}: ButtonWithIconPropsType) => {
  const Icon = getButtonIcon(buttonType);

  return (
    <Button type="button" onClick={actionHandler} isActivated={isActivated}>
      {Icon && <Icon />}
    </Button>
  );
};

export default ButtonWithIcon;

const Button = styled.button<ButtonPropsType>`
  width: ${Icon_Size.Small}px;
  height: ${Icon_Size.Small}px;
  color: ${Colors.Black};
  background-color: ${Colors.White};

  &:is(:focus, :active, :hover) {
    color: ${Colors.White};
    background-color: ${Colors.Black};
  }

  ${({ isActivated }) =>
    isActivated &&
    `
      color: ${Colors.White};
      background-color: ${Colors.Black};
    `}
`;
