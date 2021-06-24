import { db } from "../api/firebase";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const onPickDate = (date) => {
  setDate(date);
  console.log(date);
  setDateVisible(false);
  setTimeVisible(true);
};
const onPickTime = (time) => {
  setTime(time);
  console.log(time);
  setTimeVisible(false);
  bookAppointments();
};
const bookAppointments = async () => {
  //const currentUser = auth.currentUser.uid;
  try {
    await db.collection("appointments").doc("appointmenat001").set({
      appointmentDate: date,
      appointmentTime: time,
    });
  } catch (error) {
    console.log("couldnt book appointmenets", error);
  }
};
