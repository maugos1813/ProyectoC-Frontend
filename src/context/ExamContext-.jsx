import { useQuery } from "@tanstack/react-query";
import { UserById } from "../services/service";
import { createContext, useEffect } from "react"
import { useLocation } from "react-router-dom";

export const ExamContext = createContext()

export const ExamProvider = ({children}) => {
    const { pathname } = useLocation()

    useEffect(()=>{
               
    },[])
   
    const { data, isLoading, isError } = useQuery({
        queryKey: ['user'],
        queryFn: UserById,
        enabled: pathname === '/'
    });
    console.log(data);
    return (
        <ExamContext.Provider value={{data}}>
            {children}
        </ExamContext.Provider>
    )
}