import React from "react";
import { GestureResponderEvent, View } from "react-native";
import { NextButton } from "..";

import {
  Answer,
  AnswerText,
  Body,
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
};

const CardQuestion: React.FC<CardQuestionProps> = ({
  title,
  AnswerA,
  AnswerB,
  percent,
  onPress,
}) => {
  return (
    <Container>
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
      <Body>
        <Answer activeOpacity={0.7}>
          <AnswerText>{AnswerA}</AnswerText>
        </Answer>
        <Answer activeOpacity={0.7}>
          <AnswerText>{AnswerB}</AnswerText>
        </Answer>
      </Body>
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
