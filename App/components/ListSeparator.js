import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";

function ListSeparator() {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 4,
    backgroundColor: "#E0E0E0",
  },
});

export default ListSeparator;
