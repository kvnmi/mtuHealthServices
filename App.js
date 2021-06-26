import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./App/Navigation/patientNavigator/AuthNavigator";
import AuthContext from "./App/auth/context";
import AppLoading from "expo-app-loading";
import storage from "./App/auth/storage";
import NavigationTheme from "./App/Navigation/NavigationTheme";
import MainStackNavigator from "./App/Navigation/MainStackNavigator";
import userCredentials from "./App/api/userCredentials";

export default function App() {
  const [user, setUser] = useState(); // Current User
  const [userRole, setUserRole] = useState(); // Current UserRole
  const [isReady, setIsready] = useState(false);

  const readUser = async () => {
    const result = await storage.getToken();
    if (!result) return;
    setUser(result);
    checkUserRole();
  }; // Check for existing user

  const checkUserRole = async () => {
    const userRole = await userCredentials.getCred();
    if (userRole) setUserRole(userRole);
    console.log(userRole);
  }; // Check for current user role

  useEffect(() => {
    checkUserRole();
  }, [userRole]);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={readUser}
        onFinish={() => setIsready(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer theme={NavigationTheme}>
        {user ? <MainStackNavigator userRole={userRole} /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
