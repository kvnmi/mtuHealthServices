import { useContext } from "react";
import AuthContext from "./context";
import storage from "./storage";
import userRoleStorage from "./roleCredentials";

const useAuth = () => {
  const { setUser, setUserRole } = useContext(AuthContext);

  const logIn = (userCred, userRole) => {
    setUser(userCred);
    setUserRole(userRole);
    storage.storeToken(userCred);
    userRoleStorage.storeUserRole(userRole);
  };
  const logOut = () => {
    setUser(null);
    storage.removeToken();
    userRoleStorage.removeUserRole();
  };
  return { logIn, logOut };
};

export default useAuth;
