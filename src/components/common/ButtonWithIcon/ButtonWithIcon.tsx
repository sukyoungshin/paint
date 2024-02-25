import { Icon_Size, Colors } from "utils/style-utils";
import React from "react";
import {
  RiEraserFill,
  RiSave3Fill,
  RiShareFill,
  RiPaintFill,
  RiBrushFill
} from "react-icons/ri";
import styled from "styled-components";

type BasePropsType = {
  buttonType: string;
  actionHandler: () => void;
};
type ButtonPropsType = {
  isActivated?: boolean;
}
export type ButtonWithIconPropsType = BasePropsType & ButtonPropsType;

const getIcon = (buttonType: ButtonWithIconPropsType['buttonType']) => {
  switch (buttonType) {
    case "erase":
      return RiEraserFill;
    case "save":
      return RiSave3Fill;
    case "share":
      return RiShareFill;
    case "fill":
      return RiPaintFill;
    case "stroke":
      return RiBrushFill;
    default:
      return false;
  }
};


const ButtonWithIcon = ({ buttonType, actionHandler, isActivated }: ButtonWithIconPropsType) => {
  const Icon = getIcon(buttonType);

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
