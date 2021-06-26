import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../../Screens/WelcomeScreen";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
    <Stack.Screen
      name="Login"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default AuthNavigator;
