/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { examenes, createExam } from "../services/service";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const CreateEContext = createContext();

export const CreateEProvider = ({ children }) => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const queryClient = useQueryClient();

    const [user, setUser] = useState(null);

    const { data: examsData, isLoading, isError } = useQuery({
        queryKey: ['exams'],
        queryFn: examenes,
        enabled: pathname === '/dashM'
    });

    const createExamMutation = useMutation({
        mutationFn: createExam,
        onSuccess: () => {
            queryClient.invalidateQueries('exams');
            alert("Exam created successfully!");
        },
        onError: (error) => alert(error.response?.data?.message || "Error creating exam")
    });

    useEffect(() => {
        if (examsData) {
            setUser(examsData.user)
            console.log("Exams data:", examsData);
        }
    }, [examsData]);

    const handleCreateExam = (examData) => {
        createExamMutation.mutate(examData);
    };

    return (
        <CreateEContext.Provider
            value={{
                user,
                exams: examsData?.exams || [],
                isLoading,
                isError,
                createExam: handleCreateExam
            }}
        >
            {children}
        </CreateEContext.Provider>
    );
};