import React, { useState, useEffect } from "react";
import { StyleSheet, ImageBackground, View, FlatList } from "react-native";
import Modal from "react-native-modal";

import AppointmentDetails from "../components/AppointmentDetails";
import AppButtons from "../config/AppButton";
import colors from "../config/colors";
import allDoctors from "../api/allDoctors";
import ListItem from "../components/ListItem";
import AppText from "../config/AppText";
import validatedAppointments from "../api/validatedAppointments";
import NurseSucessModal from "../components/NurseSucessModal";
import currentAppointment from "../api/currentAppointment";

function AppointmentDetailsScreen({ route, navigation }) {
  const items = route.params;
  const [doctors, setDoctors] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [sucessModal, setSucessModal] = useState(false);

  const getDoctors = async () => {
    const result = await allDoctors.getAllDoctors();
    if (result) {
      const response = [];
      result.docs.forEach((i) => {
        response.push(i.data());
      });
      setDoctors(response);
    }
  }; // Gets a list of all doctors and their duty time

  const deleteAppointment = async () => {
    await currentAppointment.deleteAppointment(items);
    navigation.navigate("Main");
  }; // Deletes appointments

  const validateAppointment = async (item) => {
    const response = await validatedAppointments.setCurrentAppointment(
      item,
      items
    );
    if (response) {
      setSucessModal(true);
    }
  }; // Validates appointments

  useEffect(() => {
    getDoctors();
  }, []);

  return (
    <>
      <ImageBackground
        style={styles.container}
        source={require("../assets/appointment.jpg")}
        blurRadius={2}
      >
        <AppointmentDetails
          patientName={items.patientName}
          matricNumber="18010301060"
          date={items.appointmentDate}
          time={items.appointmentTime}
          onCancel={deleteAppointment}
          onConfirm={() => setModalVisible(true)}
        />
      </ImageBackground>
      <Modal
        isVisible={modalVisible}
        animationIn="slideInUp"
        animationInTiming={1000}
        animationOutTiming={500}
      >
        <View style={styles.modal}>
          <AppText style={styles.modalText}>Select A Doctor</AppText>
          <FlatList
            data={doctors}
            keyExtractor={(id) => id.userId}
            renderItem={({ item }) => (
              <ListItem
                style={styles.ListItem}
                title={item.name}
                subTitle={`${item.dutyPeriod} shift`}
                iconName="doctor"
                color="tomato"
                onPress={() => validateAppointment(item)}
              />
            )}
          />
          <AppButtons
            title="Cancel"
            onPress={() => setModalVisible(false)}
            style={styles.button}
          />
        </View>
      </Modal>
      <Modal
        isVisible={sucessModal}
        animationIn="bounceIn"
        animationInTiming={900}
        onBackButtonPress={() => setSucessModal(false)}
      >
        <NurseSucessModal onPress={() => setSucessModal(false)} />
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 15,
    width: "58%",
    alignSelf: "center",
  },
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
  modal: {
    backgroundColor: colors.white,
    justifyContent: "center",
    paddingHorizontal: 15,
    paddingTop: 30,
    height: "90%",
  },
  ListItem: {
    backgroundColor: colors.lightgrey,
    borderRadius: 15,
    marginVertical: 10,
  },
  modalText: {
    fontSize: 23,
    fontWeight: "bold",
    alignSelf: "center",
    marginVertical: 20,
  },
});

export default AppointmentDetailsScreen;
