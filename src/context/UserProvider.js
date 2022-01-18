import { createContext, useEffect, useState } from "react";
import { getUserById } from "../firebase";

const initialState = {
  name: "",
  email: "",
  password: "",
  phone: "",
  username: "",
};

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(initialState);
  const [isUser, setIsUser] = useState(() => !!localStorage.getItem("uid"));

  useEffect(() => {
    (async () => {
      const uid = localStorage.getItem("uid");
      if (!uid) return;
      const user = await getUserById(uid);
      user && setUser((prev) => ({ ...prev, ...user }));
    })();
  }, []);

  const setCurrentUser = (user) => {
    setUser((prev) => ({ ...prev, ...user }));
    setIsUser(true);
  };

  const logout = () => {
    setIsUser(false);
    setUser(initialState);
    localStorage.clear();
  };

  return (
    <UserContext.Provider
      value={{ user, setCurrentUser, isUser, logout, updateUser: setUser }}
    >
      {children}
    </UserContext.Provider>
  );
};
