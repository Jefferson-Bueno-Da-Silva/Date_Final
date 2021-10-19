import React from "react";
import { GestureResponderEvent, View } from "react-native";
import RightButton from "../RightButton";

import { Container, ContainerTitle, Title } from "./styles";

export type HeaderProps = {
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
};

const Header: React.FC<HeaderProps> = ({ title, onPress }) => {
  return (
    <Container>
      <RightButton activeOpacity={0.7} onPress={onPress} />
      <ContainerTitle>
        <Title>{title}</Title>
      </ContainerTitle>
    </Container>
  );
};

export default Header;
