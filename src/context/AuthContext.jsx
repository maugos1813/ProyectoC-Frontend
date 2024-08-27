import { useMutation, useQuery } from "@tanstack/react-query";
import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { infoUser, loginUser } from "../services/service";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const rutasIgnoradas = ["/"];

  const [user, setUser] = useState(null);

  const loginMutation = useMutation({
    mutationKey: ["login"],
    mutationFn: loginUser,
    onError: (data) => alert(data.message),
    onSuccess: ({ data }) => {
     
      localStorage.setItem("tokenLogin", data.token);
      localStorage.setItem("userId", data.user);
      navigate("/dashboard");
    },
  });

  const { data, isLoading, isError } = useQuery({
    queryKey: ['user'],
    queryFn: infoUser ,
    enabled: pathname === ('/dashboard')
    
});

useEffect(()=>{
  setUser(data)    
  console.log("User data:", data)   
},[data])


  return (
    <AuthContext.Provider
      value={{
        loginMutation,
        user
      }}
    >
        {children}
    </AuthContext.Provider>
  );
};
