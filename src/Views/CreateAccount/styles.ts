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
`;

export const Footer = styled.View`
  width: 100%;
  margin-bottom: 24px;
  align-items: center;
  justify-content: center;
  padding-left: 40px;
  padding-right: 40px;
`;
