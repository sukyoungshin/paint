import { InputRangeEvent } from "common/type";
import React from "react";

type Props = {
  lineWidth: number;
  changeBrushLineWidth: (e: InputRangeEvent) => void;
  isDisabled: boolean;
};

const BrushLineWidthOption = ({
  lineWidth,
  changeBrushLineWidth,
  isDisabled
}: Props) => {
  return (
    <>
      <span>Brush Thickness</span>{" "}
      <input
        type="range"
        min="1"
        max="10"
        step="0.1"
        value={lineWidth}
        onChange={changeBrushLineWidth}
        disabled={isDisabled}
      />
    </>
  );
};

export default BrushLineWidthOption;
