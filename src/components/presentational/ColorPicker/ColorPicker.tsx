import { Icon_Size } from "common/style-utils";
import * as React from "react";
import styled from "styled-components";
import { InputRangeEvent } from "common/type";

interface Props {
  brushColor: string;
  changeColorByColorPicker: (e: InputRangeEvent) => void;
}

const ColorPickerOption = ({ brushColor, changeColorByColorPicker }: Props) => {
  return (
    <Container>
      <p>Color Picker</p>
      <Picker
        type="color"
        value={brushColor}
        onChange={changeColorByColorPicker}
      />
    </Container>
  );
};

export default ColorPickerOption;

const Container = styled.div`
  height: 100%;
`;
const Picker = styled.input`
  width: ${Icon_Size.Small}px;
  height: ${Icon_Size.Small}px;
`;
