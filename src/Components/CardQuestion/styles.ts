import styled from "styled-components/native";
import { TouchableOpacityProps } from "react-native";

export const Container = styled.ScrollView`
  flex: 1;
  background-color: rgba(129, 129, 129, 0.5);
  margin-left: 24px;
  margin-right: 24px;
  margin-top: 15px;

  border-top-left-radius: 30px;
  border-top-right-radius: 30px;

  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
`;

export const TitleContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 35px;
  line-height: 40px;
  /* or 114% */

  display: flex;
  align-items: center;
  text-align: center;

  color: #ffffff;

  text-shadow: 1px 4px 4px rgba(0, 0, 0, 0.25);
`;

export type AnswerProps = TouchableOpacityProps & AnswerTextProps;

export const Answer = styled.TouchableOpacity<AnswerProps>`
  min-height: 75px;

  background: rgba(73, 73, 73, 0.59);
  border: 8px solid ${(props) => (props.active ? "#1F6955" : "#00ffb9")};
  border-radius: 15px;

  align-items: center;
  justify-content: center;

  margin-top: 25px;
  padding: 16px;
`;

export type AnswerTextProps = {
  active: boolean;
};

export const AnswerText = styled.Text<AnswerTextProps>`
  font-size: 27px;
  text-align: center;
  color: ${(props) => (props.active ? "#1F6955" : "#00ffb9")}; ;
`;

export const Footer = styled.View`
  flex: 1;
  margin-top: 66px;
  padding-bottom: 24px;
`;

export const Circle = styled.View`
  width: 103px;
  height: 103px;
  border-radius: 103px;

  background: rgba(0, 0, 0, 0.55);
  border: 15px solid #00ffb9;

  margin-top: 25px;

  align-self: center;
  align-items: center;
  justify-content: center;
`;

export const CircleValue = styled.Text`
  font-weight: 600;
  font-size: 24px;

  align-items: center;
  text-align: center;

  color: #00ffb9;
`;
