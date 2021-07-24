import React from "react";
import { StyleSheet, Text } from "react-native";
import Screen from "../components/Screen";
import AppButton from "../config/AppButton";

function HomeScreen(props) {
  return (
    <Screen style={styles.container}>
      <Text style={styles.text}>Welcome to the Home screen!</Text>
      <AppButton title="press me" />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  text: {
    fontSize: 25,
    alignSelf: "center",
  },
});

export default HomeScreen;
