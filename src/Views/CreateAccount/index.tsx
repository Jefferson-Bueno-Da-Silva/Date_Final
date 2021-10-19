import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { Header, InputDate, InputLarge, NextButton } from "../../Components";
import { Body, Container, Footer } from "./styles";
const image = require("../../assets/BackgroundCreateAccount.png");

export const CreateAccount: React.FC = () => {
  const [value, setValue] = useState("01011990");
  return (
    <Container source={image} resizeMode="cover">
      <Header />
      <Body>
        <InputLarge placeholder="Complete Name" />
        <InputDate value={value} setState={setValue} />
      </Body>
      <Footer>
        <NextButton />
      </Footer>
    </Container>
  );
};
