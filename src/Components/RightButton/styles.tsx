import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TouchableOpacity)<TouchableOpacityProps>`
  height: 70px;
  width: 70px;
  border-radius: 70px;

  align-items: center;
  justify-content: center;
  background-color: #5b5b5b;
`;
