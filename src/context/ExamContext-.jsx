import { useMutation, useQuery } from "@tanstack/react-query";
import { examenes, resultsAll, sendExamn } from "../services/service";
import { createContext, useContext, useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export const ExamContext = createContext()

export const ExamProvider = ({ children }) => {
    const navigate = useNavigate();
    const [examens, setExamens] = useState([])
    const [result, setResult] = useState([])
    const { user } = useContext(AuthContext)
    const [newVideo, setNewVideo] = useState('')

    const userId = localStorage.getItem('userId')

    const { data, isLoading, isError } = useQuery({
        queryKey: ['exams'],
        queryFn: examenes,
        enabled: Boolean(localStorage.getItem("userId"))
    });


    useEffect(() => {
        if (data && user) {
            const filte = data.filter((ex) => ex.level_id._id === user?.level_id._id)
            setExamens(filte)

        }
    }, [data, user])


    const { data: results, isLoading: videoLoading, isError: videoErr } = useQuery({
        queryKey: ['results'],
        queryFn: () => resultsAll(userId),
        enabled: Boolean(localStorage.getItem("userId"))
    });

    useEffect(() => {

        const answer = results?.flatMap((rs) => {
            return rs.answers?.filter((as) => as.question_type === 'video')
        })
        setResult(answer)

    }, [results])


    const sendExam = useMutation({
        mutationKey: ['send'],
        mutationFn: sendExamn,
        onSuccess: (res) => {
            alert('examen enviado')
            navigate('/examenes')
            console.log(res);
        },
        onError: (res) => {
            alert('no se pudo entregar')
            console.log(res);
        }
    })


    return (
        <ExamContext.Provider value={{ examens, result, newVideo, setNewVideo, sendExam }}>
            {children}
        </ExamContext.Provider>
    )
}