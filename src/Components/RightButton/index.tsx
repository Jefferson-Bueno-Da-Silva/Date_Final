import React from "react";
import { View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { Container } from "./styles";

const RightButton: React.FC = () => {
  return (
    <Container>
      <AntDesign name="arrowleft" size={30} color="#00FFB9" />
    </Container>
  );
};

export default RightButton;
