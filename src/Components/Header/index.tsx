import React from "react";
import { View } from "react-native";
import RightButton from "../RightButton";

import { Container, ContainerTitle, Title } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <RightButton />
      <ContainerTitle>
        <Title>Create Account</Title>
      </ContainerTitle>
    </Container>
  );
};

export default Header;
