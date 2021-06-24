import React from "react";
import { StyleSheet } from "react-native";
import { Formik } from "formik";

function AppForm({ initialValues, validationSchema, onSubmit, children }) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => <>{children}</>}
    </Formik>
  );
}

export default AppForm;
