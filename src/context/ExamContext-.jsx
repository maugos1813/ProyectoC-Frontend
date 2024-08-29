import { useMutation, useQuery } from "@tanstack/react-query";
import { examenes,  resultsAll,  sendExamn } from "../services/service";
import { createContext, useContext, useEffect, useState } from "react"
import { useLocation } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export const ExamContext = createContext()

export const ExamProvider = ({ children }) => {
    const { pathname } = useLocation()
    const [examens, setExamens] = useState([])
    const [result, setResult] = useState([])
    const { user } = useContext(AuthContext)
    const [newVideo, setNewVideo] = useState('')



    const { data, isLoading, isError } = useQuery({
        queryKey: ['exams'],
        queryFn: examenes,
        enabled: pathname === '/examenes'
    });


    useEffect(() => {
        if (data && user) {
            const filte = data.filter((ex) => ex.level_id._id === user?.level_id._id)
            setExamens(filte)

        }
    }, [data, user])


    const { data: results, isLoading: videoLoading, isError: videoErr } = useQuery({
        queryKey: ['results'],
        queryFn: resultsAll,
        enabled: pathname === '/videos'
    });

    useEffect(() => {
        if (results) {
         //   console.log(results);
            const resultsFilter = results.filter((vd) => vd?.student_id === user?._id)
            console.log(resultsFilter);
            setResult(resultsFilter)
        }
    }, [results])


    const sendExam = useMutation({
        mutationKey: ['send'],
        mutationFn: sendExamn,
        onSuccess: (res) => {
            alert('examen enviado')
            console.log(res);
        },
        onError: (res) => {
            alert('no se pudo entregar')
            console.log(res);
        }
    })


    return (
        <ExamContext.Provider value={{ examens, result, newVideo, setNewVideo,sendExam }}>
            {children}
        </ExamContext.Provider>
    )
}