import React from "react";
import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { CreateAccount } from "../Views/CreateAccount";
import { Questions } from "../Views/Questions";
import { Conclusion } from "../Views/Conclusion";

export type RootStackParamList = {
  CreateAccount: undefined;
  Questions: undefined;
  Conclusion: { value: string };
  Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="CreateAccount"
      screenOptions={{ animation: "slide_from_right" }}
    >
      <Stack.Screen
        name="CreateAccount"
        component={CreateAccount}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Questions"
        component={Questions}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Conclusion"
        component={Conclusion}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default Routes;
