import { createContext, useEffect, useState } from "react";

import { api } from "../api/api";

const AuthContext = createContext();
export { AuthContext };

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => {
    const savedToken = localStorage.getItem("user-token");
    try {
      return savedToken ? JSON.parse(savedToken) : null;
    } catch (error) {
      console.error("No Token saved in localStorage:", error);
      return [];
    }
  });
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("current-user");
    try {
      return savedUser ? JSON.parse(savedUser) : null;
    } catch (error) {
      console.error("No user saved in localStorage:", error);
      return [];
    }
  });

  const login = async (formData) => {
    try {
      // const res = await fetch('https://dummyjson.com/auth/login', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      //   credentials: 'include'
      // })
      // const data = await res.json()

      const res = await api.post("auth/login", formData);

      setUser(res.data);
      setToken(res.data.accessToken);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
  };

  useEffect(() => {
    localStorage.setItem("current-user", JSON.stringify(user));
    localStorage.setItem("user-token", JSON.stringify(token));
  }, [user, token]);

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
