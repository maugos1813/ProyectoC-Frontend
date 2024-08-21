import { useMutation } from "@tanstack/react-query";
import { Children, createContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { loginUser } from "../services/service";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const rutasIgnoradas = ["/"];

  const [user, setUser] = useState(null);

  const loginMutation = useMutation({
    mutationKey: ["login"],
    mutationFn: loginUser,
    onError: (data) => alert(data.response.data.message),
    onSuccess: ({ data }) => {
      localStorage.setItem("tokenLogin", data.token);
      setUser(data.user);
      navigate("/dasboard");
    },
  });

  return (
    <AuthContext.Provider
      value={{
        loginMutation,
      }}
    >
        {children}
    </AuthContext.Provider>
  );
};
