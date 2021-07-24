import { db } from "./firebase";
import firebase from "firebase";

const getCurrentAppointment = async (currentUser) => {
  try {
    const appointmentRef = await db
      .collection("validatedAppointments")
      .doc(currentUser)
      .get();

    if (appointmentRef.exists) {
      const data = appointmentRef.data();
      return data;
    }
  } catch (error) {
    console.log("Couldnt get validated appointments", error);
  }
}; // Gets an array of all the validated appointments.

const setCurrentAppointment = async (doctor, patient) => {
  const id = Math.random().toString(36).substring(7);

  const appointmentRef = await db
    .collection("validatedAppointments")
    .doc(doctor.userId)
    .get();

  const data = [
    {
      appointmentId: patient.appointmentId,
      appointmentDate: patient.appointmentDate,
      appointmentTime: patient.appointmentTime,
      patientName: patient.patientName,
      patientId: patient.patientId,
    },
  ];

  try {
    appointmentRef.exists
      ? await db
          .collection("validatedAppointments")
          .doc(doctor.userId)
          .update({
            data: firebase.firestore.FieldValue.arrayUnion({
              appointmentId: patient.appointmentId,
              appointmentDate: patient.appointmentDate,
              appointmentTime: patient.appointmentTime,
              patientName: patient.patientName,
              patientId: patient.patientId,
            }),
          })
      : await db
          .collection("validatedAppointments")
          .doc(doctor.userId)
          .set({ data });
  } catch (error) {
    console.log("couldnt store validated appointmenets", error);
  }
  return true;
}; // Stores all validated appointments.

export default {
  setCurrentAppointment,
  getCurrentAppointment,
};
