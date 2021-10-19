import React from "react";
import { View } from "react-native";

import { Container } from "./styles";

const InputLarge: React.FC<{ placeholder: string }> = ({ placeholder }) => {
  return <Container placeholder={placeholder} />;
};

export default InputLarge;
