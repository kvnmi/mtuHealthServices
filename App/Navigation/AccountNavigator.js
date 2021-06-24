import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../Screens/AccountScreen";
import AppointmentsScreen from "../Screens/AppointmentsScreen";

const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
    <Stack.Screen
      name="Account"
      component={AccountScreen}
      options={{ headerShown: true }}
    />
    <Stack.Screen
      name="My Appointments"
      component={AppointmentsScreen}
      options={{ headerShown: true }}
    />
  </Stack.Navigator>
);

export default AccountNavigator;
