import { db } from "./firebase";

const getCred = async () => {
  const userCred = await db.collection(users).get();
  return userCred.data();
};

export default { getCred };
