import { ButtonWithIconPropsType } from "components/common/ButtonWithIcon/ButtonWithIcon";
import {
  RiEraserFill,
  RiSave3Fill,
  RiShareFill,
  RiPaintFill,
  RiBrushFill,
} from "react-icons/ri";

export const Icon_Size = {
  Small: 32,
  Middle: 50
};

export const Canvas_Size = {
  Width: 800,
  Height: 800
};

export const Colors = {
  Black: "#212529",
  LightWhite: "#e9ecef",
  White: "#f8f9fa"
};

/**
 * buttonTypeAndIcon
 * @key buttonType
 * @value react/icon IconType
 */
const buttonTypeAndIcon = {
  erase: RiEraserFill,
  save: RiSave3Fill,
  share: RiShareFill,
  fill: RiPaintFill,
  stroke: RiBrushFill,
};

/** 버튼타입에 일치하는 아이콘으로 셋팅 */
export const getButtonIcon = (buttonType: ButtonWithIconPropsType["buttonType"]) => {
  for (let i = 0; i < Object.entries(buttonTypeAndIcon).length; i++) {
    const [buttonTypeName, iconTypeName] = Object.entries(buttonTypeAndIcon)[i];

    return buttonTypeName === buttonType ? iconTypeName : null;
  }
};