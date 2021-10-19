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
  percent: number;
  onPress?: (event: GestureResponderEvent) => void;
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
};

const CardQuestion: React.FC<CardQuestionProps> = ({
  title,
  AnswerA,
  AnswerB,
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
        active={active === 1}
        activeOpacity={0.7}
        onPress={() => setActive(1)}
      >
        <AnswerText active={active === 1}>{AnswerA}</AnswerText>
      </Answer>

      <Answer
        active={active === 2}
        activeOpacity={0.7}
        onPress={() => setActive(2)}
      >
        <AnswerText active={active === 2}>{AnswerB}</AnswerText>
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
