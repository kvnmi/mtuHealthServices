import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import AppText from "../config/AppText";

function DiagnosisTextInput({
  placeholder,
  onPress,
  fieldTitle,
  ...otherProps
}) {
  return (
    <>
      {fieldTitle && (
        <AppText style={{ color: "black", fontSize: 19, marginTop: 10 }}>
          {fieldTitle}
        </AppText>
      )}
      <View style={styles.container}>
        <TextInput
          placeholder={placeholder}
          {...otherProps}
          style={styles.inputArea}
        />
      </View>
    </>
  );
} // Input field for medical diagnosis.

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 58,
    borderRadius: 10,
    paddingHorizontal: 10,
    borderColor: "black",
    borderWidth: 2,
    marginVertical: 5,
    backgroundColor: "white",
    opacity: 0.7,
  },
  inputArea: {
    flex: 1,
    marginLeft: 5,
    paddingLeft: 8,
    fontSize: 17,
    color: "black",
  },
});

export default DiagnosisTextInput;
