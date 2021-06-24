import React from "react";
import { View, StyleSheet, TouchableHighlight } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "../config/AppText";
import colors from "../config/colors";

function ListItem({ title, subTitle }) {
  return (
    <TouchableHighlight>
      <View style={styles.container}>
        <View style={styles.iconBackground}>
          <MaterialCommunityIcons
            name="account-arrow-left"
            size={30}
            color="white"
          />
        </View>
        <View style={styles.textContainer}>
          <AppText style={{ fontSize: 20 }}>{title}</AppText>
          <AppText>{subTitle}</AppText>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    paddingVertical: 13,
    backgroundColor: "white",
  },
  iconBackground: {
    backgroundColor: colors.primary,
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    paddingLeft: 15,
    justifyContent: "center",
  },
});

export default ListItem;
