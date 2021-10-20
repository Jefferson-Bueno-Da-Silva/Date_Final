import React from "react";

import { useNavigation } from "@react-navigation/core";
type ScreenProp = NativeStackNavigationProp<RootStackParamList, "Home">;
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes";

import { Header } from "../../Components";

import { Container } from "./styles";
const image = require("../../assets/bubble_back.png");

export const Conclusion: React.FC = () => {
  const { goBack } = useNavigation();
  return (
    <Container source={image} resizeMode="cover">
      <Header title="personality" onPress={goBack} />
    </Container>
  );
};
