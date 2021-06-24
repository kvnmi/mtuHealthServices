import { useFormikContext } from "formik";
import React from "react";
import AppTextInput from "./AppTextInput";
import ErrorMessage from "./ErrorMessage";

function FormFields({ fieldName, iconName, name_end, onPress, ...otherProps }) {
  const { values, setFieldValue, setFieldTouched, errors, touched } =
    useFormikContext();
  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(fieldName)}
        onChangeText={(text) => setFieldValue(fieldName, text)}
        value={values[fieldName]}
        name={iconName}
        name_end={name_end}
        onPress={onPress}
        {...otherProps}
      />
      <ErrorMessage error={errors[fieldName]} visible={touched[fieldName]} />
    </>
  );
}

export default FormFields;
