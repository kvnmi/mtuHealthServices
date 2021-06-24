import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../Screens/WelcomeScreen";
import RegisterScreen from "../Screens/RegisterScreen";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
    <Stack.Screen
      name="Login"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Register"
      component={RegisterScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default AuthNavigator;
