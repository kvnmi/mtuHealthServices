import React, { useState } from "react";
import { StyleSheet } from "react-native";
import Modal from "react-native-modal";

import { auth } from "../api/firebase";
import useAuth from "../auth/useAuth";
import AppButtons from "../config/AppButton";
import Screen from "../components/Screen";
import DiagnosisTextInput from "../components/DiagnosisTextInput";
import AppText from "../config/AppText";
import colors from "../config/colors";
import medicalLog from "../api/medicalLog";
import NurseSucessModal from "../components/NurseSucessModal";

function MedicalDetails({ route }) {
  const { logOut } = useAuth();
  const item = route.params;

  const [bp, setBp] = useState();
  const [temperature, setTemperature] = useState();
  const [diagnosis, setDiagnosis] = useState("");
  const [prescription, setPresciption] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [errorVisible, setErrorVisible] = useState(false);

  const handleLogout = async () => {
    try {
      await auth.signOut(); // Signs user out of firebase
      logOut(); // Deletes authentication state variable
    } catch (error) {
      console.log("Couldnt log out", error);
    }
  }; // Logs Doctor out

  const reportMedicalData = async () => {
    if (
      bp == null ||
      undefined ||
      prescription == null ||
      undefined ||
      temperature == null ||
      undefined ||
      diagnosis == null ||
      undefined
    ) {
      console.log("Error");
      setErrorVisible(true);
    } else {
      const response = await medicalLog.setMedicalLog(item, medicalData);
      if (response) {
        setErrorVisible(false);
        setModalVisible(true);
      }
      setBp(null);
      setDiagnosis(null);
      setPresciption(null);
      setTemperature(null);
    }
  }; // Reports medical data.

  const medicalData = { bp, temperature, diagnosis, prescription };

  return (
    <>
      <Screen style={styles.container}>
        <DiagnosisTextInput
          fieldTitle="Patient Blood Pressure"
          keyboardType="numeric"
          value={bp}
          onChangeText={(bp) => setBp(bp)}
        />
        <DiagnosisTextInput
          fieldTitle="Patient Temperature"
          keyboardType="numeric"
          value={temperature}
          onChangeText={(temperature) => setTemperature(temperature)}
        />
        <DiagnosisTextInput
          fieldTitle="Diagnosis"
          value={diagnosis}
          onChangeText={(diagnosis) => setDiagnosis(diagnosis)}
        />
        <DiagnosisTextInput
          fieldTitle="Drug Prescription"
          value={prescription}
          onChangeText={(prescription) => setPresciption(prescription)}
        />
        <AppButtons
          title="Post"
          style={styles.button}
          onPress={() => reportMedicalData()}
        />
        {errorVisible && (
          <AppText style={styles.error}>
            Please fill out all the fields.
          </AppText>
        )}
        <AppText style={styles.logOut} onPress={handleLogout}>
          Logout
        </AppText>
      </Screen>
      <Modal
        isVisible={modalVisible}
        animationIn="bounceIn"
        animationInTiming={1100}
        animationOut="bounceOut"
        animationOutTiming={500}
      >
        <NurseSucessModal onPress={() => setModalVisible(false)} />
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightgrey,
    flex: 1,
    padding: 15,
    paddingTop: 50,
  },
  logOut: {
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "center",
    top: 10,
  },
  button: {
    alignSelf: "center",
    borderRadius: 10,
    width: "50%",
  },
  error: {
    color: "red",
    alignSelf: "center",
    fontSize: 18,
  },
});

export default MedicalDetails;
