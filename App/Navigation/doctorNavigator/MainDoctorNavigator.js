import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../config/colors";
import MedicalDetails from "../../Screens/MedicalDetails";
import DoctorAppointmentScreen from "../../Screens/DoctorAppointmentScreen";

const Tab = createBottomTabNavigator();

const MainDoctorNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeBackgroundColor: colors.primary,
        activeTintColor: colors.white,
        inactiveTintColor: colors.black,
        inactiveBackgroundColor: colors.primary,
        showLabel: false,
        keyboardHidesTabBar: true,
      }}
    >
      <Tab.Screen
        name="New Appointments"
        component={DoctorAppointmentScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Register Patient"
        component={MedicalDetails}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="plus-circle"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainDoctorNavigator;
