import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, ScrollView, LogBox } from "react-native";

import { auth } from "../api/firebase";
import MedicalAppointmentCard from "../components/MedicalAppointmentCard";
import Screen from "../components/Screen";
import AppText from "../config/AppText";
import colors from "../config/colors";
import validatedAppointments from "../api/validatedAppointments";
import useAuth from "../auth/useAuth";

function DoctorAppointmentScreen({ navigation }) {
  const [appointmentDate, setAppointmentDate] = useState([]);
  const { logOut } = useAuth();

  const getAppointments = async () => {
    const result = await validatedAppointments.getCurrentAppointment(
      auth.currentUser.uid
    );
    if (result) {
      try {
        setAppointmentDate(result.data);
        console.log(result.data);
      } catch (error) {
        console.log("couldnt store appointmentDate", error);
      }
    } else console.log("No appointments");
  }; // Gets a list of validated doctor appointments

  const handleLogout = async () => {
    try {
      await auth.signOut(); // Signs user out of firebase
      logOut(); // Deletes authentication state variable
    } catch (error) {
      console.log("Couldnt log out", error);
    }
  }; // Logs user out

  LogBox.ignoreAllLogs();

  useEffect(() => {
    getAppointments();
  }, []);

  return (
    <Screen style={styles.container}>
      {appointmentDate.length === 0 && (
        <>
          <AppText style={styles.headerText}>No appointmenets.</AppText>
          <AppText onPress={handleLogout} style={styles.headerText}>
            Logout
          </AppText>
        </>
      )}
      {appointmentDate.length > 0 && (
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
                  nurse={false}
                  name={item.patientName}
                  date={item.appointmentDate}
                  time={item.appointmentTime}
                  onPress={() => navigation.navigate("Patient Diagnosis", item)}
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

export default DoctorAppointmentScreen;
