import { auth, db } from "./firebase";

const regUsers = async (userCred) => {
  try {
    const user = await auth.createUserWithEmailAndPassword(
      userCred.email,
      userCred.password
    );
    if (user) {
      const currentUser = auth.currentUser.uid;
      try {
        await db.collection("users").doc(currentUser).set({
          name: userCred.name,
          email: userCred.email,
          matricNumber: userCred.matricNumber,
          dateCreated: new Date(),
        });
      } catch (error) {
        console.log(
          "Something went wrong while saving user credentials",
          error
        );
      }
      return user.user.uid;
    }
  } catch (error) {
    console.log("Something went wrong while registering user", error);
  }
};

const loginUser = async (userCred) => {
  try {
    const result = await auth.signInWithEmailAndPassword(
      userCred.email,
      userCred.password
    );
    if (result) {
      return result.user.uid;
    }
  } catch (error) {
    console.log("Something went wrong while login user", error);
  }
};

export default {
  regUsers,
  loginUser,
};
