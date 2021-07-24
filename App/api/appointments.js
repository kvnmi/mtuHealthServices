import { auth, db } from "./firebase";
import firebase from "firebase";

const getAppointments = async () => {
  try {
    const currentUser = auth.currentUser.uid;
    const appointmentRef = await db
      .collection("appointments")
      .doc(currentUser)
      .get();

    if (appointmentRef.exists) {
      const data = appointmentRef.data();
      return data;
    }
  } catch (error) {
    console.log("Couldnt print results", error);
  }
}; // Retrieves all booked appointments

const setAppointment = async (date, time, rawDate) => {
  const currentUser = auth.currentUser.uid;
  const id = Math.random().toString(36).substring(7);
  const appointmentRef = await db
    .collection("appointments")
    .doc(currentUser)
    .get();

  const data = [
    {
      appointmentId: { id, date: rawDate },
      appointmentDate: date,
      appointmentTime: time,
    },
  ];
  try {
    appointmentRef.exists
      ? await db
          .collection("appointments")
          .doc(currentUser)
          .update({
            data: firebase.firestore.FieldValue.arrayUnion({
              appointmentId: { id, date: rawDate },
              appointmentDate: date,
              appointmentTime: time,
            }),
          })
      : await db.collection("appointments").doc(currentUser).set({ data });
  } catch (error) {
    console.log("couldnt book appointmenets", error);
  }
}; // Books a doctor Appointment

const deleteAppointment = async (id) => {
  const currentUser = auth.currentUser.uid;
  try {
    await db
      .collection("appointments")
      .doc(currentUser)
      .update({
        data: firebase.firestore.FieldValue.arrayRemove(id),
      });
  } catch (error) {
    console.log("Couldnt delete appointments", error);
  }
}; // Deletes a booked appoinment

export default { setAppointment, getAppointments, deleteAppointment };
