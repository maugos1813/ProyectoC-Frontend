import { useMutation, useQuery } from "@tanstack/react-query";
import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { infoUser, loginUser } from "../services/service";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [user, setUser] = useState(null);

  const loginMutation = useMutation({
    mutationKey: ["login"],
    mutationFn: loginUser,
    onError: (data) => alert(data.message),
    onSuccess: ({ data }) => {
      localStorage.setItem("tokenLogin", data.token);
      localStorage.setItem("userId", data.user);
    },
  });

/*   useEffect(()=>{
    const { data:user , isLoading, isError } = useQuery({
      queryKey: ['user'],
      queryFn: infoUser })

      console.log(user);
  },[data])
   */

  const { data, isLoading, isError } = useQuery({
    queryKey: ['user'],
    queryFn: infoUser ,
    enabled: Boolean(localStorage.getItem("userId"))
});

useEffect(()=>{
setUser(data) 

if(data?.type === "student") {navigate('/dashboard')}
else if(data?.type === "teacher") {navigate('/dashboard2')}
  else { navigate('/')}
},[data])

function logoout() {
  localStorage.removeItem("tokenLogin");
  localStorage.removeItem("userId");
  navigate('/')
}

  return (
    <AuthContext.Provider
      value={{
        logoout,
        loginMutation,
        user
      }}
    >
        {children}
    </AuthContext.Provider>
  );
};
