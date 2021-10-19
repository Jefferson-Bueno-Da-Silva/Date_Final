import React, { useCallback, useState } from "react";
import { useNavigation } from "@react-navigation/core";
type ScreenProp = NativeStackNavigationProp<RootStackParamList, "Questions">;

import { Header, InputDate, InputLarge, NextButton } from "../../Components";
import { Body, Container, Footer } from "./styles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes";
const image = require("../../assets/BackgroundCreateAccount.png");

export const CreateAccount: React.FC = () => {
  const [value, setValue] = useState("01011990");
  const { navigate } = useNavigation<ScreenProp>();

  const handleNavigation = useCallback(() => {
    navigate("Questions");
  }, [navigate]);

  return (
    <Container source={image} resizeMode="cover">
      <Header title="Create Account" />
      <Body>
        <InputLarge placeholder="Complete Name" />
        <InputDate value={value} setState={setValue} />
      </Body>
      <Footer>
        <NextButton onPress={handleNavigation} text="Next" />
      </Footer>
    </Container>
  );
};
