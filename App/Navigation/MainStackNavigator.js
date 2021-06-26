import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainNavigator from "./patientNavigator/MainNavigator";
import MainNurseNavigator from "./nurseNavigator/MainNurseNavigator";
import userCredentials from "../api/userCredentials";

const Stack = createStackNavigator();

const MainStackNavigator = ({ userRole }) => (
  <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
    <Stack.Screen
      name="Main"
      component={userRole === "patient" ? MainNavigator : MainNurseNavigator}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);
export default MainStackNavigator;
