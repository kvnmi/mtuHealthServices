import { db, auth } from "./firebase";

const getCred = async () => {
  try {
    currentUser = auth.currentUser.uid;
    const userCred = await db.collection("users").doc(currentUser).get();
    if (userCred) {
      return userCred.data().userRole;
    }
  } catch (error) {
    console.log("could not retrieve users", error);
  }
};

export default { getCred };
