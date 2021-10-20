import React, { useState } from "react";
import { GestureResponderEvent, View } from "react-native";
import { NextButton } from "..";

import {
  Answer,
  AnswerText,
  Container,
  Footer,
  Title,
  TitleContainer,
  Circle,
  CircleValue,
} from "./styles";

export type CardQuestionProps = {
  title: string;
  AnswerA: string;
  AnswerB: string;
  valueA: string;
  valueB: string;
  percent: number;
  onPress?: (event: GestureResponderEvent) => void;
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
};

const CardQuestion: React.FC<CardQuestionProps> = ({
  title,
  AnswerA,
  valueA,
  AnswerB,
  valueB,
  percent,
  onPress,
  active,
  setActive,
}) => {
  return (
    <Container>
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>

      <Answer
        active={active === valueA}
        activeOpacity={0.7}
        onPress={() => setActive(valueA)}
      >
        <AnswerText active={active === valueA}>{AnswerA}</AnswerText>
      </Answer>

      <Answer
        active={active === valueB}
        activeOpacity={0.7}
        onPress={() => setActive(valueB)}
      >
        <AnswerText active={active === valueB}>{AnswerB}</AnswerText>
      </Answer>

      <Footer>
        <NextButton text="Next Question" onPress={onPress} />
        <Circle>
          <CircleValue>{percent}%</CircleValue>
        </Circle>
      </Footer>
    </Container>
  );
};

export default CardQuestion;
