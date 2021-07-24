import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppButtons from "../config/AppButton";
import colors from "../config/colors";
import AppText from "../config/AppText";

function NurseSucessModal({ onPress }) {
  return (
    <View style={styles.modalView}>
      <MaterialCommunityIcons
        name="check-circle"
        color={colors.primary}
        size={50}
      />
      <AppText style={styles.modalText}>Done 👍👍</AppText>
      <AppButtons style={styles.button2} title="Okay" onPress={onPress} />
    </View>
  );
} // Modal for successfull api calls.

const styles = StyleSheet.create({
  modalText: {
    fontSize: 23,
    textAlign: "center",
    marginVertical: 20,
    color: "black",
  },
  modalView: {
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: colors.white,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 20,
    width: "50%",
  },
  button2: {
    width: "50%",
    borderRadius: 15,
    paddingVertical: 23,
    backgroundColor: "darkgrey",
  },
});

export default NurseSucessModal;
