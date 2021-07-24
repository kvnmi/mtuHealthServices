import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MedicalDetails from "../../Screens/MedicalDetails";
import DoctorAppointmentScreen from "../../Screens/DoctorAppointmentScreen";

const Stack = createStackNavigator();

const MainDoctorNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
      <Stack.Screen
        name="New Appointments"
        component={DoctorAppointmentScreen}
        options={{
          animationEnabled: true,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Patient Diagnosis"
        component={MedicalDetails}
        options={{
          animationEnabled: true,
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default MainDoctorNavigator;
