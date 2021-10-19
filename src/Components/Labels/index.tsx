import React from "react";
import { View } from "react-native";

import { Container } from "./styles";

const Labels: React.FC<{ text: string }> = ({ text }) => {
  return <Container>{text}</Container>;
};

export default Labels;
