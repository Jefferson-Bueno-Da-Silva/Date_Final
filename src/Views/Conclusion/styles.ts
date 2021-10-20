import styled from "styled-components/native";

export const Container = styled.ImageBackground`
  flex: 1;
  background-color: #000;
`;

export const Body = styled.View`
  flex: 1;
  padding: 28px;
  justify-content: space-evenly;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 30px;
  line-height: 40px;

  align-items: center;
  text-align: center;

  color: #ffffff;
  text-shadow: 1px 4px 4px rgba(0, 0, 0, 0.25);
`;
