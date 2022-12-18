import * as React from "react";
import styled from "styled-components";
import { ButtonWithIcon } from "components/common";

interface Props {
  isFillMode: boolean;
  setFillMode: () => void;
  setStrokeMode: () => void;
}

const DrawModeOptions = ({ isFillMode, setFillMode, setStrokeMode }: Props) => {
  return (
    <Container>
      <p>Painting Mode</p>
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
    </Container>
  );
};

export default DrawModeOptions;

const Container = styled.div`
  width: fit-content;
  height: 100%;
  border: 1px solid black;
`;
