import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "../config/AppText";

function AppTextInput({
  placeholder,
  name,
  name_end,
  onPress,
  fieldTitle,
  ...otherProps
}) {
  return (
    <>
      {fieldTitle && (
        <AppText style={{ color: "white", fontSize: 19 }}>{fieldTitle}</AppText>
      )}
      <View style={styles.container}>
        {name && (
          <MaterialCommunityIcons
            name={name}
            size={23}
            color="black"
            style={styles.icon}
          />
        )}
        <TextInput
          placeholder={placeholder}
          {...otherProps}
          style={styles.inputArea}
        />
        {name_end && (
          <MaterialCommunityIcons
            name={name_end}
            size={23}
            style={styles.icon}
            color="#000"
            onPress={onPress}
          />
        )}
      </View>
    </>
  );
}

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
  icon: {
    alignSelf: "center",
  },
  inputArea: {
    flex: 1,
    borderLeftWidth: 1,
    marginLeft: 5,
    paddingLeft: 8,
    fontSize: 17,
    color: "black",
  },
});

export default AppTextInput;
