import React from "react";
import { Text, View } from "react-native";
import { Container } from "./styles";
const image = require("../../assets/BackgroundCreateAccount.png");

export const CreateAccount: React.FC = () => {
  return (
    <Container source={image} resizeMode="cover">
      <Text>Create Account</Text>
    </Container>
  );
};
