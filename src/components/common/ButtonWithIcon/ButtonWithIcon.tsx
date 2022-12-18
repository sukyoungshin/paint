import { Icon_Size } from "common/style-utils";
import React from "react";
import {
  RiEraserFill,
  RiSave3Fill,
  RiShareFill,
  RiPaintFill,
  RiBrushFill
} from "react-icons/ri";
import styled, { css } from "styled-components";

type Props = {
  buttonType: string;
  actionHandler: () => void;
  isActivated?: boolean;
};

const ButtonWithIcon = ({ buttonType, actionHandler, isActivated }: Props) => {
  const Icon = () => {
    switch (buttonType) {
      case "erase":
        return <RiEraserFill />;
      case "save":
        return <RiSave3Fill />;
      case "share":
        return <RiShareFill />;
      case "fill":
        return <RiPaintFill />;
      case "stroke":
        return <RiBrushFill />;
    }
  };

  return (
    <Button type="button" onClick={actionHandler} isActivated={isActivated}>
      <Icon />
    </Button>
  );
};

export default ButtonWithIcon;

const Button = styled.button<{
  isActivated: boolean;
}>`
  width: ${Icon_Size.Small}px;
  height: ${Icon_Size.Small}px;

  color: black;
  background-color: white;

  &:is(:focus, :active, :hover) {
    color: white;
    background-color: black;
  }

  ${(props) =>
    props.isActivated &&
    css`
      color: white;
      background-color: black;
    `}
`;
