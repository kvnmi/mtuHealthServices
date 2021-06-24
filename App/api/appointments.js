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
};

const setAppointment = async (date, time) => {
  const currentUser = auth.currentUser.uid;
  const appointmentRef = await db
    .collection("appointments")
    .doc(currentUser)
    .get();

  const data = [
    { appointmentId: new Date(), appointmentDate: date, appointmentTime: time },
  ];
  try {
    appointmentRef.exists
      ? await db
          .collection("appointments")
          .doc(currentUser)
          .update({
            data: firebase.firestore.FieldValue.arrayUnion({
              appointmentId: new Date(),
              appointmentDate: date,
              appointmentTime: time,
            }),
          })
      : await db.collection("appointments").doc(currentUser).set({ data });
  } catch (error) {
    console.log("couldnt book appointmenets", error);
  }
};

export default { setAppointment, getAppointments };
