import { db } from "./firebase";

const getAllDoctors = async () => {
  try {
    const doctors = await db
      .collection("users")
      .where("userRole", "==", "doctor")
      .get();
    if (doctors) return doctors;
  } catch (error) {
    console.log("Error retrieving doctors", error);
  }
}; // Gets an array of all the doctors in the system.

export default {
  getAllDoctors,
};
