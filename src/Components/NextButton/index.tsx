import React from "react";
import { View } from "react-native";

import { ButtonText, Container } from "./styles";

const NextButton: React.FC = () => {
  return (
    <Container activeOpacity={0.7}>
      <ButtonText>Next</ButtonText>
    </Container>
  );
};

export default NextButton;
