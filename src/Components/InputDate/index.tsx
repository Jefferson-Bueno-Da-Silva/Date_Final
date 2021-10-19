import React from "react";
import { View } from "react-native";
import Labels from "../Labels";

import { Container } from "./styles";

export type InputDateProps = {
  value: string;
  setState?: (text: string, rawText?: string) => void;
};

const InputDate: React.FC<InputDateProps> = ({ value, setState }) => {
  return (
    <View style={{ marginTop: 35 }}>
      <Labels text="Birthday" />
      <Container
        type={"datetime"}
        options={{
          format: "DD/MM/YYYY",
        }}
        value={value}
        onChangeText={(text) => {
          setState(text);
        }}
      />
    </View>
  );
};

export default InputDate;
