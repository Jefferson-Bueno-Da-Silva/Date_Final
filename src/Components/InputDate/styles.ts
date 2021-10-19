import styled from "styled-components/native";
import { TextInputMask, TextInputMaskProps } from "react-native-masked-text";

export const Container = styled(TextInputMask)<TextInputMaskProps>`
  height: 61px;
  width: 200px;
  align-self: center;
  padding-left: 30px;
  padding-right: 15px;
  border-radius: 10px;
  background-color: #ffffffe5;

  color: #505050;
  font-weight: bold;
  font-size: 25px;
`;
