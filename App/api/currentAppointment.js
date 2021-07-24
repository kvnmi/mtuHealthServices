import { auth, db } from "./firebase";
import firebase from "firebase";

const getCurrentAppointment = async () => {
  try {
    const appointmentRef = await db
      .collection("currentAppointments")
      .doc("allAppointments")
      .get();

    if (appointmentRef.exists) {
      const data = appointmentRef.data();
      return data;
    }
  } catch (error) {
    console.log("Couldnt get current appointments", error);
  }
}; // Gets an array of all the booked appointments.

const setCurrentAppointment = async (date, time, rawDate) => {
  const id = Math.random().toString(36).substring(7);

  const appointmentRef = await db
    .collection("currentAppointments")
    .doc("allAppointments")
    .get();

  const data = [
    {
      appointmentId: { id, date: rawDate },
      appointmentDate: date,
      appointmentTime: time,
      patientName: auth.currentUser.displayName,
      patientId: auth.currentUser.uid,
    },
  ];

  try {
    appointmentRef.exists
      ? await db
          .collection("currentAppointments")
          .doc("allAppointments")
          .update({
            data: firebase.firestore.FieldValue.arrayUnion({
              appointmentId: { id, date: rawDate },
              appointmentDate: date,
              appointmentTime: time,
              patientName: auth.currentUser.displayName,
              patientId: auth.currentUser.uid,
            }),
          })
      : await db
          .collection("currentAppointments")
          .doc("allAppointments")
          .set({ data });
  } catch (error) {
    console.log("couldnt book appointmenets", error);
  }
  return true;
}; // Stores all the appointments that have been booked.

const deleteAppointment = async (id) => {
  try {
    await db
      .collection("currentAppointments")
      .doc("allAppointments")
      .update({
        data: firebase.firestore.FieldValue.arrayRemove(id),
      });
  } catch (error) {
    console.log("Couldnt delete appointments", error);
  }
}; // Deletes a booked appoinment

export default {
  setCurrentAppointment,
  getCurrentAppointment,
  deleteAppointment,
};
