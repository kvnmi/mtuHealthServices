import * as store from "expo-secure-store";

const storeToken = async (token) => {
  try {
    await store.setItemAsync("user", token);
  } catch (error) {
    console.log("Could not store user", error);
  }
};

const getToken = async () => {
  try {
    return await store.getItemAsync("user");
  } catch (error) {
    console.log("Could not get user", error);
  }
};

const removeToken = async () => {
  try {
    await store.deleteItemAsync("user");
  } catch (error) {
    console.log("Could not remove user", error);
  }
};

export default { storeToken, getToken, removeToken };
