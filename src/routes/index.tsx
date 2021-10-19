import React from "react";
import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CreateAccount } from "../Views/CreateAccount";

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="CreateAccount"
      screenOptions={{ animation: "slide_from_left" }}
    >
      <Stack.Screen
        name="CreateAccount"
        component={CreateAccount}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default Routes;
