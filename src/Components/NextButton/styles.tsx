import { TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity<TouchableOpacityProps>`
  height: 69px;
  width: 100%;
  background-color: #2020207f;
  border-radius: 25px;
  border-color: #01bb88;
  border-width: 8px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: #00ffb9;
`;
