import React from "react";
import { auth } from "../api/firebase";
import useAuth from "../auth/useAuth";
import { View, StyleSheet, Text } from "react-native";
import AppButtons from "../config/AppButton";

function MedicalDetails(props) {
  const { logOut } = useAuth();

  const handleLogout = async () => {
    try {
      await auth.signOut(); // Signs user out of firebase
      logOut(); // Deletes authentication state variable
    } catch (error) {
      console.log("Couldnt log out", error);
    }
  }; // Logs Doctor out

  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <AppButtons
        title="Logout"
        style={{ width: "100%" }}
        onPress={handleLogout}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MedicalDetails;
