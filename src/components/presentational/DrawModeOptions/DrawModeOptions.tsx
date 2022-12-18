import React from "react";
import { ButtonWithIcon } from "components/common";

type Props = {
  isFillMode: boolean;
  setFillMode: () => void;
  setStrokeMode: () => void;
};

const DrawModeOptions = ({ isFillMode, setFillMode, setStrokeMode }: Props) => {
  return (
    <>
      <span>Painting Mode</span>{" "}
      <ButtonWithIcon
        buttonType="fill"
        isActivated={isFillMode}
        actionHandler={setFillMode}
      />
      <ButtonWithIcon
        buttonType="stroke"
        isActivated={!isFillMode}
        actionHandler={setStrokeMode}
      />
    </>
  );
};

export default DrawModeOptions;
