import { useMutation, useQuery } from "@tanstack/react-query";
import { examenes, resultsAll, sendExamn, upExamn } from "../services/service";
import { createContext, useContext, useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export const ExamContext = createContext()

export const ExamProvider = ({ children }) => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const [examens, setExamens] = useState([])
    const [result, setResult] = useState([])
    const [score, setScore] = useState([])
    const { user } = useContext(AuthContext)
    const [newVideo, setNewVideo] = useState([])

    const userId = localStorage.getItem('userId')

    const { data, isLoading, isError } = useQuery({
        queryKey: ['exams'],
        queryFn: examenes,
        enabled: Boolean(localStorage.getItem("userId") && pathname === '/courses' )
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
        enabled: Boolean(localStorage.getItem("userId") && pathname === '/videos') ,
    });

    useEffect(() => {
        setScore(results)
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
        },
        onError: (res) => {
            alert('no se pudo entregar')
        }
    })
    const updExam = useMutation({
        mutationKey: ['update'],
        mutationFn: upExamn,
        onSuccess: (res) => {
            alert('examen actualizado')
            navigate('/courses')
        },
        onError: (res) => {
            alert('no se pudo actualizar')
        }
    })


    return (
        <ExamContext.Provider value={{ examens, result,updExam, newVideo, setNewVideo, sendExam,data, score }}>
            {children}
        </ExamContext.Provider>
    )
}