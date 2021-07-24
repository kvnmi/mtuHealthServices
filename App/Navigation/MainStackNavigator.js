import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainNavigator from "./patientNavigator/MainNavigator";
import MainNurseNavigator from "./nurseNavigator/MainNurseNavigator";
import MainDoctorNavigator from "./doctorNavigator/MainDoctorNavigator";

const Stack = createStackNavigator();

const MainStackNavigator = ({ userRole }) => (
  <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
    <Stack.Screen
      name="Main"
      component={
        userRole !== "patient"
          ? userRole === "nurse"
            ? MainNurseNavigator
            : MainDoctorNavigator
          : MainNavigator
      }
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);
export default MainStackNavigator;
