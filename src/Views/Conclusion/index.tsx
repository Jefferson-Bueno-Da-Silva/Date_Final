import React from "react";
import { Image } from "react-native";

import { useNavigation } from "@react-navigation/core";
type ScreenProp = NativeStackNavigationProp<RootStackParamList, "Home">;
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes";

import { Header, NextButton } from "../../Components";
import { Body, Container, Title } from "./styles";
const image = require("../../assets/bubble_back.png");

export const Conclusion: React.FC = () => {
  const { goBack } = useNavigation();
  return (
    <Container source={image} resizeMode="cover">
      <Header title="personality" onPress={goBack} />
      <Body>
        <Title>your personality is adventurous</Title>
        <Image
          source={require("../../assets/adventurer.png")}
          style={{ height: 200, width: 200 }}
          resizeMode="center"
        />
        <NextButton text="Start" />
      </Body>
    </Container>
  );
};
