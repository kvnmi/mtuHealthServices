import React, { useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Modal from "react-native-modal";
import Screen from "../components/Screen";
import AppButtons from "../config/AppButton";
import colors from "../config/colors";
import AppText from "../config/AppText";
import appointments from "../api/appointments";
import allAppointments from "../api/currentAppointment";
import SucessModal from "../components/SucessModal";

function BookingScreen(props) {
  const [date, setDate] = useState(""); // Date state variable
  const [rawDate, setRawDate] = useState(new Date()); // Date state variable
  const [time, setTime] = useState(""); // Time state variable
  const [dateVisible, setDateVisible] = useState(false); // Date Modal
  const [timeVisible, setTimeVisible] = useState(false); // Time Modal
  const [modalVisible, setModalVisible] = useState(false); // Sucess Modal

  const onPickDate = (date, rawDate) => {
    setDate(date);
    setRawDate(rawDate);
    console.log(date);
    console.log(rawDate);
    setDateVisible(false);
    setTimeVisible(true);
  }; // Pick appointment date

  const onPickTime = (time) => {
    setTime(time);
    console.log(time);
    setTimeVisible(false);
    bookAppointments();
  }; // Pick appointment time

  const bookAppointments = async () => {
    try {
      await appointments.setAppointment(date, time, rawDate);
      const result = await allAppointments.setCurrentAppointment(
        date,
        time,
        rawDate
      );
      if (result) setModalVisible(true);
    } catch (error) {
      console.log("Couldnt book appointments", error);
    }
  }; // Books appointment

  return (
    <>
      <Screen style={{ flex: 1, backgroundColor: "white" }}>
        <View style={styles.container}>
          <Image source={require("../assets/1.jpg")} style={styles.image} />
          <AppText style={styles.text1}>Book a Doctor Today</AppText>
          <AppText style={styles.text2}>
            A very easy way to make an appointment with a doctor.
          </AppText>
          <AppButtons
            title="Let's get started"
            textStyle={styles.text}
            onPress={() => setDateVisible(true)}
            style={styles.button}
          />
          <DateTimePickerModal
            isVisible={dateVisible}
            mode="date"
            onCancel={() => setDateVisible(false)}
            onConfirm={(date) => onPickDate(date.toDateString(), date)}
          />
          <DateTimePickerModal
            isVisible={timeVisible}
            mode="time"
            onCancel={() => setTimeVisible(false)}
            onConfirm={(time) => onPickTime(time.toLocaleTimeString())}
          />
        </View>
      </Screen>
      <Modal
        isVisible={modalVisible}
        animationIn="bounceIn"
        animationInTiming={3000}
        animationOut="bounceOut"
        animationOutTiming={1500}
      >
        <SucessModal onPress={() => setModalVisible(false)} />
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.primary,
    paddingHorizontal: 15,
    paddingTop: 70,
  },
  button: {
    width: "50%",
    borderRadius: 15,
    paddingVertical: 30,
    backgroundColor: "darkgrey",
    marginTop: 25,
  },
  image: {
    height: 230,
    width: 230,
    backgroundColor: "white",
    opacity: 0.7,
    borderRadius: 40,
    marginBottom: 20,
  },
  text1: {
    color: "white",
    marginVertical: 15,
    fontSize: 25,
  },
  text2: {
    color: "white",
    marginVertical: 15,
    fontSize: 19,
    textAlign: "center",
    fontStyle: "italic",
    paddingHorizontal: 15,
  },
  text: {
    fontSize: 17,
  },
});

export default BookingScreen;
