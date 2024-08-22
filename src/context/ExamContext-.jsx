import { useQuery } from "@tanstack/react-query";
import { UserById, examenes } from "../services/service";
import { createContext, useContext, useEffect, useState } from "react"
import { useLocation } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export const ExamContext = createContext()

export const ExamProvider = ({children}) => {
    const { pathname } = useLocation()
    const [examens, setExamens] = useState([])
    const { user } = useContext(AuthContext)

 
    const { data, isLoading, isError } = useQuery({
        queryKey: ['exams'],
        queryFn: examenes,
        enabled: pathname === '/examenes'
    });
    

    useEffect(() => {
        if (data && user) {
            const filte = data.filter((ex) => ex.level_id === user?.level_id )
            setExamens(filte)

        }
    }, [data, user])

   
    
    return (
        <ExamContext.Provider value={{examens}}>
            {children}
        </ExamContext.Provider>
    )
}