import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "./colors";

function AppButtons({ title, onPress, color = "primary", textStyle, style }) {
  return (
    <TouchableOpacity
      style={[styles.button, { borderColor: colors[color] }, style]}
      onPress={onPress ? onPress : () => console.log("Tapped")}
    >
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 45,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    borderWidth: 1,
  },
  text: {
    color: "black",
    fontSize: 20,
  },
});

export default AppButtons;
