import styled from "styled-components/native";
import { View, ImageBackground, ImageBackgroundProps } from "react-native";

export const Container = styled(ImageBackground)<ImageBackgroundProps>`
  flex: 1;
`;

export const Body = styled.View`
  flex-grow: 1;
  margin-top: 54px;
  padding-left: 26px;
  padding-right: 26px;
  justify-content: space-around;
`;
