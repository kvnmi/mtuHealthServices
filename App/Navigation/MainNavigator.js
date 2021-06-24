import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/HomeScreen";
import BookingScreen from "../Screens/BookingScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AccountNavigator from "./AccountNavigator";
import colors from "../config/colors";
import NewListingButton from "./NewListingButton";

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Book Now"
        component={BookingScreen}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <NewListingButton onPress={() => navigation.navigate("Book Now")} />
          ),
        })}
      />
      <Tab.Screen
        name="Account"
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
