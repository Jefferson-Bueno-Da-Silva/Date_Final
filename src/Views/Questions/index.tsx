import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import { View } from "react-native";
import { Header } from "../../Components";
import { useNavigation } from "@react-navigation/core";
import CardQuestion from "../../Components/CardQuestion";
import { questions } from "../../util/personality-algorithms";

import { Container } from "./styles";

const image = require("../../assets/QuestionsBack.png");
export const Questions: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(questions[index].answer);

  const { goBack } = useNavigation();

  const handleGoBack = useCallback(() => {
    if (index === 0) {
      goBack();
    } else {
      setIndex((old) => old - 1);
      setActive(questions[index - 1].answer);
    }
  }, [index]);

  const handleGoNext = useCallback(() => {
    if (index !== 3) {
      setIndex((old) => old + 1);
      setActive(questions[index + 1].answer);
    }
  }, [index]);

  useEffect(() => {
    questions[index].answer = active;
  }, [active]);

  useEffect(() => {
    setProgress((100 * index + 100) / questions.length);
  }, [index]);

  return (
    <Container source={image} resizeMode="cover">
      <Header
        title={`Question ${questions[index].id}`}
        onPress={handleGoBack}
      />
      <CardQuestion
        title={questions[index].question}
        AnswerA={questions[index].a1}
        AnswerB={questions[index].a2}
        percent={progress}
        onPress={handleGoNext}
        active={active}
        setActive={setActive}
      />
    </Container>
  );
};
