import React from "react";
import { Platform, StyleSheet, Text } from "react-native";

function AppText({ children, style, ...otherProps }) {
  return (
    <Text style={[styles.container, style]} {...otherProps}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  container: {
    fontFamily: Platform.OS === "android" ? "notoserif" : "Avenir",
    fontSize: 16,
  },
});

export default AppText;
