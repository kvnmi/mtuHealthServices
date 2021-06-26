import { db } from "./firebase";
import storage from "../auth/storage";

const getCred = async () => {
  const currentUser = await storage.getToken();
  try {
    const userCred = await db.collection("users").doc(currentUser).get();
    if (userCred) {
      return userCred.data().userRole;
    }
  } catch (error) {
    console.log("could not retrieve users", error);
  }
};

export default { getCred };
