import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import NurseAppointmentScreen from "../../Screens/NurseAppointmentScreen";
import AppointmentDetailsScreen from "../../Screens/AppointmentDetailsScreen";

const Stack = createStackNavigator();

const AppointmentNavigator = () => (
  <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }} mode="modal">
    <Stack.Screen
      name="Main"
      component={NurseAppointmentScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Appointment Details"
      component={AppointmentDetailsScreen}
      options={{ headerShown: true }}
    />
  </Stack.Navigator>
);
export default AppointmentNavigator;
