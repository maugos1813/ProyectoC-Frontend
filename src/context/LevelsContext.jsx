import { useMutation, useQuery } from "@tanstack/react-query";
import { createContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getLevels, getAll } from "../services/service";

export const LevelsContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const [user, setUser] = useState(null);

    const levels = useMutation({
        mutationKey: ["levels"],
        mutationFn: getLevels,
        onError: (error) => {
            console.error("Error al obtener los niveles:", error);
            alert(error?.response?.data?.message || 'Error al obtener los niveles');
        },
        onSuccess: (data) => {
            localStorage.setItem("tokenLogin", data.token);
            localStorage.setItem("userId", data.user);
            navigate("/dashM");
        }
    });

    const { data: userData, isLoading, isError } = useQuery({
        queryKey: ['user'],
        queryFn: getAll,
        enabled: pathname === '/dashM'
    });

    useEffect(() => {
        if (userData) {
            setUser(userData);        
        }
    }, [userData]);

    return (
        <LevelsContext.Provider
            value={{
                user,
                isLoading,
                isError,
                levels
            }}
        >
            {children}
        </LevelsContext.Provider>
    );
};