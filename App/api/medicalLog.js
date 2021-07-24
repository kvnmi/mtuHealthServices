import { db } from "./firebase";
import firebase from "firebase";

const setMedicalLog = async (item, diagnostics) => {
  try {
    const medicalLog = await db
      .collection("medicalLog")
      .doc(item.patientId)
      .get();

    const data = [
      {
        bp: `${diagnostics.bp}mmHg`,
        diagnosis: diagnostics.diagnosis,
        patientName: item.patientName,
        prescription: diagnostics.prescription,
        temp: `${diagnostics.temperature}°C`,
      },
    ];

    medicalLog.exists
      ? db
          .collection("medicalLog")
          .doc(item.patientId)
          .update({
            data: firebase.firestore.FieldValue.arrayUnion({
              bp: diagnostics.bp,
              diagnosis: diagnostics.diagnosis,
              patientName: item.patientName,
              prescription: diagnostics.prescription,
              temp: diagnostics.temperature,
            }),
          })
      : db.collection("medicalLog").doc(item.patientId).set({ data });
    return true;
  } catch (error) {
    console.log("Could not report medical details", error);
  }
}; // Reports medical data

export default {
  setMedicalLog,
};
