import React, { useEffect, useState } from "react";
import { Image, ImageSourcePropType } from "react-native";

import { RouteProp, useNavigation } from "@react-navigation/core";
type ScreenProp = NativeStackNavigationProp<RootStackParamList, "Home">;
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes";

import { Header, NextButton } from "../../Components";
import { Body, Container, Title } from "./styles";
import { sixteenPersonalityTypes } from "../../util/personality-algorithms";
const image = require("../../assets/bubble_back.png");

export type personalityProps = {
  abbreviation: string;
  nickname: string;
  image: ImageSourcePropType;
};

export type ConclusionProps = {
  route: {
    key: string;
    name: string;
    params: { value: string };
    path?: undefined;
  };
};

export const Conclusion: React.FC<ConclusionProps> = ({ route }) => {
  const [personality, setPersonality] = useState<personalityProps>();
  const { goBack } = useNavigation();

  useEffect(() => {
    setPersonality(sixteenPersonalityTypes(route.params.value));
  }, []);

  return (
    <Container source={image} resizeMode="cover">
      <Header title="personality" onPress={goBack} />
      <Body>
        <Title>your personality is {personality?.nickname}</Title>
        <Image source={personality?.image} resizeMode="cover" />
        <NextButton text="Start" />
      </Body>
    </Container>
  );
};
