import React from "react";
import { StyleSheet } from "react-native";
import AppText from "../config/AppText";

function ErrorMessage({ error, visible }) {
  if (!error || !visible) return null;
  return <AppText style={styles.container}>{error}</AppText>;
}

const styles = StyleSheet.create({
  container: {
    color: "red",
  },
});

export default ErrorMessage;
