import { Icon_Size } from "common/style-utils";
import * as React from "react";
import styled from "styled-components";
import { InputRangeEvent } from "common/type";

interface Props {
  brushColor: string;
  changeColorByColorPicker: (e: InputRangeEvent) => void;
}

const ColorPicker = ({ brushColor, changeColorByColorPicker }: Props) => {
  return (
    <Picker
      type="color"
      value={brushColor}
      onChange={changeColorByColorPicker}
    />
  );
};

export default ColorPicker;

const Picker = styled.input`
  width: ${Icon_Size.Small}px;
  height: ${Icon_Size.Small}px;
`;
