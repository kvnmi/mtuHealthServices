import React from "react";
import { View, StyleSheet, TouchableHighlight, Image } from "react-native";
import AppText from "../config/AppText";
import colors from "../config/colors";

function DoctorListItem({ title, subTitle, source }) {
  return (
    <TouchableHighlight>
      <View style={styles.container}>
        <View style={styles.iconBackground}>
          <Image source={source} />
        </View>
        <View style={styles.textContainer}>
          <AppText style={{ fontSize: 20 }}>{title}</AppText>
          {subtitle && <AppText>{subTitle}</AppText>}
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

export default DoctorListItem;
