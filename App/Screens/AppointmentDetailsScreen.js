import React from "react";
import { StyleSheet, ImageBackground } from "react-native";
import AppointmentDetails from "../components/AppointmentDetails";
import colors from "../config/colors";

function AppointmentDetailsScreen({ route }) {
  const item = route.params;

  return (
    <ImageBackground
      style={styles.container}
      source={require("../assets/appointment.jpg")}
      blurRadius={2}
    >
      <AppointmentDetails
        patientName={item.patientName}
        matricNumber="18010301060"
        date={item.appointmentDate}
        time={item.appointmentTime}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    backgroundColor: colors.primary,
    paddingTop: 90,
    paddingHorizontal: 13,
  },
  headerText: {
    fontSize: 25,
    color: colors.white,
    marginBottom: 50,
    fontWeight: "bold",
  },
});

export default AppointmentDetailsScreen;
