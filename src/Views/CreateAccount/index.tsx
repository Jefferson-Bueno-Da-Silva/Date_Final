import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { Header, InputDate, InputLarge } from "../../Components";
import { Body, Container } from "./styles";
const image = require("../../assets/BackgroundCreateAccount.png");

export const CreateAccount: React.FC = () => {
  const [value, setValue] = useState("");
  return (
    <Container source={image} resizeMode="cover">
      <ScrollView>
        <Header />
        <Body>
          <InputLarge placeholder="Complete Name" />
          <InputDate value={value} setState={setValue} />
        </Body>
      </ScrollView>
    </Container>
  );
};
