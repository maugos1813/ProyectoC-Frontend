/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useMutation, useQuery } from "@tanstack/react-query";
import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { infoUser, loginUser } from "../services/service";

export const AuthContextM = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const rutasIgnoradas = ["/"];

  const [teacher, setTeacher] = useState(null);

  const loginMutation = useMutation({
    mutationKey: ["login"],
    mutationFn: loginUser,
    onError: (data) => alert(data.response.data.message),
    onSuccess: ({ data }) => {
      localStorage.setItem("tokenLogin", data.token);
      localStorage.setItem("userId", data.user);
      navigate("/dashM");
    },
  });

  const { data, isLoading, isError } = useQuery({
    queryKey: ['user'],
    queryFn: infoUser ,
    enabled: pathname === ('/dashM')
    
});

useEffect(()=>{
  setTeacher(data)    
  console.log("User data:", data)   
},[data])


  return (
    // eslint-disable-next-line react/jsx-no-undef
    <AuthContext.Provider
      value={{
        loginMutation,
        teacher,
        data
      }}
    >
        {children}
    </AuthContext.Provider>
  );
};
