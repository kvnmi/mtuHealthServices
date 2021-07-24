import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import * as Yup from "yup";
import regUser from "../api/authentication";
import Modal from "react-native-modal";

import AppForm from "../components/AppForm";
import FormFields from "../components/FormFields";
import SubmitButton from "../components/SubmitButton";
import AppText from "../config/AppText";
import colors from "../config/colors";
import useAuth from "../auth/useAuth";
import NurseSucessModal from "../components/NurseSucessModal";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().max(20).label("Name"),
  email: Yup.string().required().email().label("Email"),
  matricNumber: Yup.number().required().min(11).label("Matric Number"),
  password: Yup.string().required().min(6).label("Password"),
}); // Registration schema

function RegisterScreen() {
  const [visible, setVisible] = useState(true); // Password text entry
  const { logOut } = useAuth(); // store authentication state
  const [modalVisible, setModalVisible] = useState(false);

  const handleVisibility = () => {
    return visible === true ? setVisible(false) : setVisible(true);
  }; // Password entry visibility

  const handleSubmit = async (result) => {
    const response = await regUser.regUsers(result);
    if (response) setModalVisible(true);
  }; // Register new patient.

  return (
    <>
      <ImageBackground
        source={require("../assets/doctor1.jpg")}
        style={{ flex: 1 }}
      >
        <View style={styles.container}>
          <View style={styles.appContainer}>
            <AppText style={styles.textHeader}>Register A New Patient</AppText>
            <AppText style={styles.headerSubtitle}>
              Please fill the input below
            </AppText>
            <KeyboardAvoidingView
              style={styles.fields}
              behavior={Platform.OS === "android" ? "height" : "height"}
            >
              <AppForm
                initialValues={{
                  name: "",
                  email: "",
                  password: "",
                  matricNumber: "",
                }}
                validationSchema={validationSchema}
                onSubmit={(value) => handleSubmit(value)}
              >
                <FormFields
                  iconName="account"
                  fieldName="name"
                  fieldTitle="Fullname"
                  autoCapitalize="words"
                  autoComplete
                  autoCompleteType="name"
                />
                <FormFields
                  iconName="alien-outline"
                  fieldName="matricNumber"
                  fieldTitle="Matric Number"
                  keyboardType="numeric"
                />
                <FormFields
                  iconName="email"
                  fieldName="email"
                  fieldTitle="Email"
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
                <FormFields
                  iconName="lock"
                  fieldName="password"
                  name_end="eye"
                  autoCapitalize="none"
                  fieldTitle="Password"
                  secureTextEntry={visible}
                  onPress={handleVisibility}
                />
                <SubmitButton title="Register" />
              </AppForm>
              <View>
                <AppText style={styles.logOut} onPress={() => logOut()}>
                  Log Out
                </AppText>
              </View>
            </KeyboardAvoidingView>
          </View>
        </View>
      </ImageBackground>
      <Modal
        isVisible={modalVisible}
        animationIn="bounceIn"
        animationInTiming={900}
        onBackButtonPress={() => setSucessModal(false)}
      >
        <NurseSucessModal onPress={() => setModalVisible(false)} />
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    paddingVertical: 25,
    paddingHorizontal: 20,
    backgroundColor: colors.primary,
    opacity: 0.8,
    paddingBottom: 1,
  },
  appContainer: {
    backgroundColor: colors.primary,
    paddingHorizontal: 17,
    justifyContent: "center",
    opacity: 0.8,
    flex: 1,
    borderRadius: 23,
  },
  fields: {
    paddingTop: 30,
  },
  textHeader: {
    alignSelf: "center",
    fontSize: 30,
    color: colors.white,
    marginBottom: 4,
    paddingTop: 10,
  },
  headerSubtitle: {
    alignSelf: "center",
    fontSize: 15,
    color: colors.white,
  },
  logOut: {
    alignSelf: "center",
    fontSize: 20,
    color: colors.white,
    fontWeight: "bold",
  },
});

export default RegisterScreen;
