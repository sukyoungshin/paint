import { ButtonWithIcon } from "components/ButtonWithIcon";
import React from "react";
import styled from "styled-components";
import { Colors } from "utils/style-utils";
import { downloadImage, shareCurrentPage } from "utils/utils";

const HeaderComponent = () => {
  return (
    <>
      <Header>
        <Title>Painting</Title>
        <ButtonWithIcon buttonType="share" actionHandler={shareCurrentPage} />
        <ButtonWithIcon buttonType="save" actionHandler={downloadImage} />
      </Header>
    </>
  );
};

export default HeaderComponent;

const Header = styled.header`
  padding: 0 20px;
  width: 100%;
  height: 85px;
  display: flex;
  align-items: center;
  background-color: ${Colors.LightWhite};
`;

const Title = styled.h1`
  display: inline-block;
  margin-right: auto;
`;
