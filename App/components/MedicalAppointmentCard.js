import React from "react";
import { View, StyleSheet } from "react-native";
import AppButtons from "../config/AppButton";
import AppText from "../config/AppText";

function MedicalAppointmentCard({ date, time, onPress, nurse, name }) {
  return (
    <View style={styles.card}>
      <AppText style={{ fontSize: 19, marginBottom: 20, fontStyle: "italic" }}>
        SUCCESSFULLY BOOKED APPOINTMENT!!!
      </AppText>
      <AppText style={{ fontSize: 18, marginBottom: 20 }}>
        {name} has been scheduled to visit the clinic on {date}, at {time}.
      </AppText>
      {nurse && (
        <AppButtons
          title="View Appointment Details"
          style={styles.button}
          onPress={onPress}
        />
      )}
      {!nurse && (
        <AppButtons
          title="Validate appointments"
          style={styles.button}
          onPress={onPress}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: "white",
    paddingVertical: 18,
    paddingHorizontal: 18,
    justifyContent: "center",
    marginVertical: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  headerText: {
    alignSelf: "center",
    color: "blue",
    fontSize: 19,
    textAlign: "center",
    letterSpacing: 1,
    fontStyle: "italic",
  },
  button: {
    borderRadius: 10,
    height: 39,
    width: "75%",
    alignSelf: "center",
  },
});

export default MedicalAppointmentCard;
