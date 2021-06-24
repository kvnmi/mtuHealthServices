import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./App/Navigation/AuthNavigator";
import MainNavigator from "./App/Navigation/MainNavigator";
import AuthContext from "./App/auth/context";
import AppLoading from "expo-app-loading";
import storage from "./App/auth/storage";
import NavigationTheme from "./App/Navigation/NavigationTheme";

export default function App() {
  const [user, setUser] = useState(); // Current User
  const [isReady, setIsready] = useState(false);

  const readUser = async () => {
    const result = await storage.getToken();
    if (!result) return;
    setUser(result);
  }; // Check for existing user

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
        {user ? <MainNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
