
import { ButtonWithIconPropsType } from "components/ButtonWithIcon/ButtonWithIcon";
import { IconType } from "react-icons/lib";
import {
  RiEraserFill,
  RiSave3Fill,
  RiShareFill,
  RiPaintFill,
  RiBrushFill,
} from "react-icons/ri";

// 공통 너비 & 높이
export const DefaultSize = "800px";

export const swatchColors = [
  "#ef476f",
  "#ffd166",
  "#06d6a0",
  "#118ab2",
  "#758bfd",
  "#f08080",
  "#33658a",
  "#86bbd8",
  "#f6ae2d",
  "#f26419",
  "#073b4c",
  "#f8f9fa",
  "#212529"
];


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

const buttonTypeAndIcon: { [key: string]: IconType } = {
  erase: RiEraserFill,
  save: RiSave3Fill,
  share: RiShareFill,
  fill: RiPaintFill,
  stroke: RiBrushFill,
};

/** 버튼타입에 일치하는 아이콘으로 셋팅 */
export const getButtonIcon = (buttonType: ButtonWithIconPropsType["buttonType"]) => {
  return buttonTypeAndIcon[buttonType];
};