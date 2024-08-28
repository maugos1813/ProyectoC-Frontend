import { createContext, useContext, useState, useEffect } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate, useLocation } from "react-router-dom";
import { getAll } from "../services/service";

export const AlumnsContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const [user, setUser] = useState(null);

    // const alumns = useMutation({
    //     mutationKey: ["alumnos"],
    //     mutationFn: getAll,
    //     onError: (data) => alert(data.response.data.message),
    //     onSuccess: ({ data }) => {
    //         localStorage.setItem("tokenLogin", data.token);
    //         localStorage.setItem("userId", data.user);
    //         navigate("/tablas");
    //     }
    // });

    const { data, isLoading, isError } = useQuery({
        queryKey: ['users'],
        queryFn: getAll,
 enabled: Boolean(localStorage.getItem("userId"))    });

    useEffect(() => {
        setUser(data);        
    }, [data]);

    return (
        <AlumnsContext.Provider
            value={{


                

                user,
                isLoading,
                isError,
                alumnos: data
            }}
        >
            {children}
        </AlumnsContext.Provider>
    );
};