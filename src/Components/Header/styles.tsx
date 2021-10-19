import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
  margin-top: ${getStatusBarHeight()}px;
  margin-left: 22px;
  margin-right: 22px;
  flex-direction: row;
  align-self: flex-start;
`;

export const ContainerTitle = styled.View`
  flex: 1;
  align-items: flex-end;
  justify-content: center;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 30px;
  color: #fff;
`;
