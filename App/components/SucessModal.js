import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppButtons from "../config/AppButton";
import colors from "../config/colors";
import AppText from "../config/AppText";

function SucessModal({ onPress }) {
  return (
    <View style={styles.modalView}>
      <MaterialCommunityIcons
        name="check-circle"
        color={colors.primary}
        size={70}
      />
      <AppText style={styles.modalText}>
        Your doctor appointment with doctor the has been successfully booked
        💀💩
      </AppText>
      <AppButtons style={styles.button2} title="Okay" onPress={onPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  modalText: {
    fontSize: 23,
    textAlign: "center",
    marginVertical: 20,
  },
  modalView: {
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    paddingVertical: 30,
    borderRadius: 20,
    width: "70%",
    alignItems: "center",
    alignSelf: "center",
    height: "60%",
  },
  button2: {
    width: "50%",
    borderRadius: 15,
    paddingVertical: 23,
    backgroundColor: "darkgrey",
  },
});

export default SucessModal;
