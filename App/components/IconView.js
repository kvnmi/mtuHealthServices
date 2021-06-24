import React from "react";
import { View, StyleSheet, TouchableHighlight } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "../config/AppText";

function IconView({ title, name, color, onPress }) {
  return (
    <TouchableHighlight
      style={{ paddingHorizontal: 3 }}
      onPress={onPress}
      underlayColor="#E8E8E8"
    >
      <View style={styles.container}>
        <View style={[styles.iconBackground, { backgroundColor: color }]}>
          <MaterialCommunityIcons name={name} size={23} color="white" />
        </View>
        <View style={styles.textContainer}>
          <AppText style={{ fontSize: 20 }}>{title}</AppText>
        </View>
        <MaterialCommunityIcons
          name="chevron-right"
          size={23}
          color="black"
          style={{ alignSelf: "center" }}
        />
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    paddingVertical: 10,
    backgroundColor: "white",
    borderRadius: 10,
  },
  iconBackground: {
    height: 42,
    width: 42,
    borderRadius: 21,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    paddingLeft: 15,
    justifyContent: "center",
    flex: 1,
  },
});

export default IconView;
