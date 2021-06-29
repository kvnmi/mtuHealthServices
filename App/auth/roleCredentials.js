import * as store from "expo-secure-store";

const storeUserRole = async (token) => {
  try {
    await store.setItemAsync("userRole", token);
  } catch (error) {
    console.log("Could not store userRole", error);
  }
};

const getUserRole = async () => {
  try {
    return await store.getItemAsync("userRole");
  } catch (error) {
    console.log("Could not get userRole", error);
  }
};

const removeUserRole = async () => {
  try {
    await store.deleteItemAsync("userRole");
  } catch (error) {
    console.log("Could not remove userRole", error);
  }
};

export default { storeUserRole, getUserRole, removeUserRole };
