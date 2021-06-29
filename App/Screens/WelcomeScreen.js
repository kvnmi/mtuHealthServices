import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  ImageBackground,
  Platform,
  View,
  Image,
} from "react-native";
import * as Yup from "yup";
import login from "../api/authentication";
import useAuth from "../auth/useAuth";

import AppForm from "../components/AppForm";
import FormFields from "../components/FormFields";
import SubmitButton from "../components/SubmitButton";
import AppText from "../config/AppText";
import colors from "../config/colors";

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
}); // Validation schema for login form

function WelcomeScreen({ navigation }) {
  const [visible, setVisible] = useState(true);
  const { logIn } = useAuth(); // store authentication state

  const handleVisibility = () => {
    return visible === true ? setVisible(false) : setVisible(true);
  }; // Password text entry

  const handleSubmit = async (userCred) => {
    const response = await login.loginUser(userCred);
    response
      ? logIn(response.uid, response.userRole)
      : console.log("Error saving credentials on login screen");
  }; // Logs user in

  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={require("../assets/doctor1.jpg")}
    >
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Image source={require("../assets/logo.png")} style={styles.logo} />
          <AppText style={styles.tagLine}>
            Book an appointment with your doctor
          </AppText>
        </View>
        <KeyboardAvoidingView
          style={styles.fields}
          behavior={Platform.OS === "android" ? "height" : "height"}
        >
          <AppForm
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={(value) => handleSubmit(value)}
          >
            <FormFields
              iconName="email"
              fieldName="email"
              keyboardType="email-address"
              autoCorrect={false}
              fieldTitle="Email"
            />
            <FormFields
              iconName="lock"
              name_end="eye"
              fieldName="password"
              autoCorrect={false}
              secureTextEntry={visible}
              onPress={handleVisibility}
              fieldTitle="Password"
            />
            <SubmitButton title="Login" />
          </AppForm>
          <View style={{ alignItems: "center" }}>
            <AppText style={{ color: "white", fontSize: 18 }}>
              Forgot Password?
            </AppText>
            <AppText
              style={styles.signUp}
              onPress={() => {
                console.log("Tapped");
                navigation.navigate("Register");
              }}
            >
              Do you have an account? Sign up!
            </AppText>
          </View>
        </KeyboardAvoidingView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    paddingHorizontal: 8,
    backgroundColor: colors.primary,
    opacity: 0.65,
  },
  textContainer: {
    position: "absolute",
    top: 70,
    justifyContent: "center",
    alignSelf: "center",
  },
  fields: {
    top: 135,
    paddingHorizontal: 17,
  },
  signUp: {
    color: colors.white,
    top: 15,
    fontWeight: "bold",
  },
  logo: {
    height: 180,
    width: 180,
    alignSelf: "center",
  },
  tagLine: {
    color: colors.white,
    fontSize: 20,
    fontStyle: "italic",
  },
});

export default WelcomeScreen;
