import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { examenes } from "../services/service";
import { useMutation, useQuery } from "@tanstack/react-query";

export const CreateEContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const [user, setUser] = useState(null);

    const loginMutation = useMutation({
        mutationKey: ["create"],
        mutationFn: examenes,
        onError: (error) => alert(error.response.data.message),
        onSuccess: ({ data }) => {
            localStorage.setItem("tokenLogin", data.token);
            localStorage.setItem("userId", data.user);
            navigate("/dashM");
        }
    });

    const { data, isLoading, isError } = useQuery({
        queryKey: ['creates'],
        queryFn: examenes,
        enabled: pathname === '/dashM'
    });

    useEffect(() => {
        if (data) {
            setUser(data); 
            console.log("User data:", data)       
        }
    }, [data]);

    return (
        <CreateEContext.Provider
            value={{
                loginMutation,
                user,
                isLoading,
                isError
            }}
        >
            {children}
        </CreateEContext.Provider>
    );
};