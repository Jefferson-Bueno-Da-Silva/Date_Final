import React from "react";
import { TouchableOpacityProps } from "react-native";

import { ButtonText, Container } from "./styles";

export type NextButtonProps = TouchableOpacityProps & {
  text: string;
};

const NextButton: React.FC<NextButtonProps> = ({ text, ...rest }) => {
  return (
    <Container activeOpacity={0.7} {...rest}>
      <ButtonText>{text}</ButtonText>
    </Container>
  );
};

export default NextButton;
