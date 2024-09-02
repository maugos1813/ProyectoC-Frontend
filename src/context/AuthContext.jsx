import { useMutation, useQuery } from "@tanstack/react-query";
import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { infoUser, loginUser } from "../services/service";

export const AuthContext = createContext()

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
      navigate('/redict')
    },
  });


  const { data, isLoading, isError } = useQuery({
    queryKey: ['user'],
    queryFn: infoUser,
    enabled: Boolean(localStorage.getItem("userId"))
  });

  useEffect(() => {
    setUser(data)
    const hasNavigated = localStorage.getItem('hasNavigated');
    if (!hasNavigated && data) {
      if (data.type === "student") {  window.location.href = '/dashboard'}
      else if (data.type === "teacher") {  window.location.href = '/dashboard2' }
      else { window.location.href = '/'}
      localStorage.setItem('hasNavigated', 'true')
    }

  }, [data])

  function logoout() {
    localStorage.removeItem("tokenLogin");
    localStorage.removeItem("userId");
    localStorage.removeItem('hasNavigated')
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
}