import { auth, db } from "./firebase";
import userCredentials from "./userCredentials";

const regUsers = async (userCred) => {
  try {
    const user = await auth.createUserWithEmailAndPassword(
      userCred.email,
      userCred.password
    );
    if (user) {
      const currentUser = auth.currentUser.uid;
      user.user.updateProfile({
        displayName: userCred.name,
      });
      try {
        await db.collection("users").doc(currentUser).set({
          name: userCred.name,
          email: userCred.email,
          matricNumber: userCred.matricNumber,
          dateCreated: new Date(),
          userRole: "patient",
          userId: auth.currentUser.uid,
        });
        return user.user.uid;
      } catch (error) {
        console.log(
          "Something went wrong while saving user credentials",
          error
        );
      }
    }
  } catch (error) {
    console.log("Something went wrong while registering user", error);
  }
}; // Registers a new patient

const loginUser = async (userCred) => {
  try {
    const result = await auth.signInWithEmailAndPassword(
      userCred.email,
      userCred.password
    );
    if (result) {
      const userRole = await userCredentials.getCred();
      return { uid: result.user.uid, userRole: userRole };
    }
  } catch (error) {
    console.log("Something went wrong while login user", error);
  }
}; // Logs a new patient into the system

export default {
  regUsers,
  loginUser,
};
