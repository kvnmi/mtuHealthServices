import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import RegisterScreen from "../../Screens/RegisterScreen";
import colors from "../../config/colors";
import AppointmentNavigator from "./AppointmentNavigator";

const Tab = createBottomTabNavigator();

const MainNurseNavigator = () => {
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
        component={AppointmentNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Register Patient"
        component={RegisterScreen}
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

export default MainNurseNavigator;
