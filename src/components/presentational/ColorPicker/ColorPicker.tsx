import { Icon_Size } from "common/style-utils";
import React from "react";
import styled from "styled-components";
import { InputRangeEvent } from "common/type";

type Props = {
  color: string;
  changeColorPicker?: (e: InputRangeEvent) => void;
  isDisabled: boolean;
};

const ColorPickerOption = ({
  color,
  changeColorPicker,
  isDisabled = true
}: Props) => {
  return (
    <>
      <span>Color Selection</span>{" "}
      <Picker
        type="color"
        value={color}
        onChange={changeColorPicker}
        disabled={isDisabled}
      />
    </>
  );
};

export default ColorPickerOption;

const Picker = styled.input`
  width: ${Icon_Size.Small}px;
  height: ${Icon_Size.Small}px;
`;
