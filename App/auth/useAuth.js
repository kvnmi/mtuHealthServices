import { useContext } from "react";
import AuthContext from "./context";
import storage from "./storage";

const useAuth = () => {
  const { setUser } = useContext(AuthContext);

  const logIn = (userCred) => {
    setUser(userCred);
    storage.storeToken(userCred);
  };
  const logOut = () => {
    setUser(null);
    storage.removeToken();
  };
  return { logIn, logOut };
};

export default useAuth;
