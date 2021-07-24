import React from "react";
import { StyleSheet, View } from "react-native";
import AppButtons from "../config/AppButton";
import AppText from "../config/AppText";
import colors from "../config/colors";

function AppointmentDetails({
  patientName,
  matricNumber,
  date,
  time,
  onConfirm,
  onCancel,
}) {
  return (
    <View style={styles.container}>
      <AppText style={styles.text}>Patient Name: {patientName}.</AppText>
      <AppText style={styles.text}>Matric-Number: {matricNumber}.</AppText>
      <AppText style={styles.text}>Appointment Date: {date}.</AppText>
      <AppText style={styles.text}>Appointment Time: {time}.</AppText>
      <AppButtons
        title="Confirm Appointment"
        style={[styles.button, { marginTop: 28 }]}
        textStyle={{ color: colors.white }}
        onPress={onConfirm}
      />
      <AppButtons
        title="Cancel and Reschedule"
        style={styles.button}
        textStyle={{ color: colors.white }}
        onPress={onCancel}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    width: "100%",
    paddingVertical: 55,
    paddingHorizontal: 15,
    marginVertical: 5,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  text: {
    borderBottomColor: colors.black,
    borderBottomWidth: 1,
    lineHeight: 35,
    paddingHorizontal: 5,
    fontSize: 19,
    fontWeight: "bold",
    marginVertical: 12,
  },
  button: {
    width: "70%",
    alignSelf: "center",
    borderRadius: 10,
    backgroundColor: colors.primary,
  },
});

export default AppointmentDetails;
