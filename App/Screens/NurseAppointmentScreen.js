import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, ScrollView, LogBox } from "react-native";
import MedicalAppointmentCard from "../components/MedicalAppointmentCard";
import Screen from "../components/Screen";
import AppText from "../config/AppText";
import colors from "../config/colors";
import allAppointments from "../api/currentAppointment";

function NurseAppointmentScreen({ navigation }) {
  const [appointmentDate, setAppointmentDate] = useState([]);

  const getAppointments = async () => {
    const result = await allAppointments.getCurrentAppointment();
    if (result) {
      try {
        setAppointmentDate(result.data);
      } catch (error) {
        console.log("couldnt store appointmentDate", error);
      }
    } else console.log("No appointments");
  }; // Fetches a list of all the appointments booked with the system.

  LogBox.ignoreAllLogs();

  useEffect(() => {
    getAppointments();
  }, []);

  return (
    <Screen style={styles.container}>
      {!appointmentDate && (
        <AppText style={styles.headerText}>No appointmenets.</AppText>
      )}
      {appointmentDate && (
        <>
          <AppText style={styles.headerText}>UPCOMING APPOINTMENTS.</AppText>
          <ScrollView style={{ backgroundColor: colors.lightgrey }}>
            <FlatList
              data={appointmentDate.filter(
                (x) => x.appointmentId.date.toDate() >= new Date()
              )}
              keyExtractor={(m) => m.appointmentId.id}
              renderItem={({ item }) => (
                <MedicalAppointmentCard
                  nurse={true}
                  name={item.patientName}
                  date={item.appointmentDate}
                  time={item.appointmentTime}
                  onPress={() =>
                    navigation.navigate("Appointment Details", item)
                  }
                />
              )}
            />
          </ScrollView>
        </>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 50,
    flex: 1,
    backgroundColor: colors.lightgrey,
  },
  headerText: {
    alignSelf: "center",
    color: "black",
    fontSize: 20,
    textAlign: "center",
    letterSpacing: 1,
    paddingBottom: 10,
    fontWeight: "bold",
  },
});

export default NurseAppointmentScreen;
