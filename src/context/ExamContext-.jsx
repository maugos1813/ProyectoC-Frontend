import { useQuery } from "@tanstack/react-query";
import { examenes, videosAll } from "../services/service";
import { createContext, useContext, useEffect, useState } from "react"
import { useLocation } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export const ExamContext = createContext()

export const ExamProvider = ({children}) => {
    const { pathname } = useLocation()
    const [examens, setExamens] = useState([])
    const [videos, setVideos] = useState([])
    const { user } = useContext(AuthContext)

 
    const { data, isLoading, isError } = useQuery({
        queryKey: ['exams'],
        queryFn: examenes,
        enabled: pathname === '/examenes'
    });
    

    useEffect(() => {
        if (data && user) {
            const filte = data.filter((ex) => ex.level_id._id === user?.level_id._id )
            setExamens(filte)

        }
    }, [data, user])


    const { data: video, isLoading: videoLoading, isError: videoErr } = useQuery({
        queryKey: ['video'],
        queryFn: videosAll,
        enabled: pathname === '/videos'
    });

    useEffect(()=>{
        setVideos(video)
        console.log(video);
    },[video])
    
    return (
        <ExamContext.Provider value={{examens, videos}}>
            {children}
        </ExamContext.Provider>
    )
}