import React from "react";
import { ScrollView, Text, View } from "react-native";
import { Header, InputLarge } from "../../Components";
import { Body, Container } from "./styles";
const image = require("../../assets/BackgroundCreateAccount.png");

export const CreateAccount: React.FC = () => {
  return (
    <Container source={image} resizeMode="cover">
      <ScrollView>
        <Header />
        <Body>
          <InputLarge placeholder="Complete Name" />
        </Body>
      </ScrollView>
    </Container>
  );
};
