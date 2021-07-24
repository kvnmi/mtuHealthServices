import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, ScrollView, LogBox, Alert } from "react-native";
import AppointmentCard from "../components/AppointmentCard";
import Screen from "../components/Screen";
import AppText from "../config/AppText";
import colors from "../config/colors";
import appointments from "../api/appointments";

function AppointmentsScreen(props) {
  const [appointmentDate, setAppointmentDate] = useState([]);

  const getAppointments = async () => {
    const result = await appointments.getAppointments();
    if (result) {
      try {
        setAppointmentDate(result.data);
        for (let x in appointmentDate) console.log(x);
      } catch (error) {
        console.log("couldnt store appointmentDate", error);
      }
    } else console.log("No appointments");
  }; // Gets all the current patient's current appointments.

  const deleteAppointment = async (id, index) => {
    Alert.alert(
      "Delete appointment",
      "Are you sure you want to delete this appointment? This action cannot be undone",
      [
        {
          text: "Yes",
          onPress: async () => {
            await appointments.deleteAppointment(index);
            const data = appointmentDate.filter(
              (x) => x.appointmentId.id != id
            );
            setAppointmentDate(data);
          },
        },
        { text: "No", onPress: null },
      ]
    );
  }; // Deletes an unwanted appointment.

  LogBox.ignoreAllLogs();

  useEffect(() => {
    getAppointments();
  }, []);

  return (
    <ScrollView bounces style={{ backgroundColor: colors.lightgrey }}>
      <Screen style={styles.container}>
        {!appointmentDate && (
          <AppText style={styles.headerText}>
            YOU HAVE NO ACTIVE APPOINTMENTS!!!
          </AppText>
        )}
        {appointmentDate && (
          <>
            <AppText style={styles.headerText}>
              YOUR UPCOMING APPOINTMENTS. BE PUNCTUAL!!!
            </AppText>
            <FlatList
              data={appointmentDate.filter(
                (x) => x.appointmentId.date.toDate() >= new Date()
              )}
              keyExtractor={(m) => m.appointmentId.id}
              renderItem={({ item }) => (
                <AppointmentCard
                  date={item.appointmentDate}
                  time={item.appointmentTime}
                  onPress={() => deleteAppointment(item.appointmentId.id, item)}
                />
              )}
            />
          </>
        )}
      </Screen>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: colors.lightgrey,
  },
  headerText: {
    alignSelf: "center",
    color: colors.primary,
    fontSize: 19,
    textAlign: "center",
    letterSpacing: 1,
    fontStyle: "italic",
    fontWeight: "bold",
  },
});
export default AppointmentsScreen;
