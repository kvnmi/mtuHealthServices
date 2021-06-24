import React from "react";
import { useFormikContext } from "formik";

import AppButtons from "../config/AppButton";

function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();
  return (
    <AppButtons
      style={{
        backgroundColor: "#360047",
        width: "65%",
        alignSelf: "center",
        paddingVertical: 25,
      }}
      title={title}
      onPress={handleSubmit}
      textStyle={{ color: "white" }}
    />
  );
}

export default SubmitButton;
