import { auth, db } from "./firebase";

const getCurrentAppointment = async () => {
  try {
    const currentUser = auth.currentUser.uid;
    const appointmentRef = await db
      .collection("currentAppointments")
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

const setCurrentAppointment = async (date, time) => {
  const currentUser = auth.currentUser.uid;
  try {
    await db.collection("currentAppointments").doc(currentUser).set({
      appointmentId: new Date(),
      appointmentDate: date,
      appointmentTime: time,
      appointmentStatus: true,
      patientName: auth.currentUser.displayName,
    });
  } catch (error) {
    console.log("couldnt book appointmenets", error);
  }
};

export default { setCurrentAppointment, getCurrentAppointment };
