import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, ScrollView } from "react-native";
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
      } catch (error) {
        console.log("couldnt store appointmentDate", error);
      }
    }
  };

  useEffect(() => {
    getAppointments();
  }, []);
  return (
    <ScrollView>
      <Screen style={styles.container}>
        <AppText style={styles.headerText}>
          YOUR UPCOMING APPOINTMENTS. BE PUNCTUAL!!!
        </AppText>
        <FlatList
          data={appointmentDate}
          keyExtractor={(m) => m.appointmentId.toString()}
          maxToRenderPerBatch={1}
          renderItem={({ item }) => (
            <AppointmentCard
              date={item.appointmentDate}
              time={item.appointmentTime}
            />
          )}
        />
      </Screen>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    flex: 1,
    backgroundColor: colors.lightgrey,
  },
  headerText: {
    alignSelf: "center",
    color: "blue",
    fontSize: 19,
    textAlign: "center",
    letterSpacing: 1,
    fontStyle: "italic",
  },
});
export default AppointmentsScreen;
