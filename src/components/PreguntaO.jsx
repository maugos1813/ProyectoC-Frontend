/* eslint-disable react/prop-types */
import { useState } from 'react'

export const PreguntaO = ({ onAddQuestion }) => {
    const [question, setQuestion] = useState({
        type: 'multiple-choice',
        statement: '',
        score: '',
        options: ['', '', '', '']
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setQuestion(prev => ({ ...prev, [name]: value }))
    }

    const handleOptionChange = (index, value) => {
        setQuestion(prev => ({
            ...prev,
            options: prev.options.map((opt, i) => i === index ? value : opt)
        }))
    }

    const handleSubmit = () => {
        onAddQuestion(question)
        setQuestion({ type: 'multiple-choice', statement: '', score: '', options: ['', '', '', ''] })
    }

    return (
        <div className="space-y-2">
            <input
                type="text"
                name="statement"
                value={question.statement}
                onChange={handleChange}
                placeholder="Enter multiple choice question"
                className="w-full p-2 border rounded"
            />
            <input
                type="number"
                name="score"
                value={question.score}
                onChange={handleChange}
                placeholder="Score"
                className="w-full p-2 border rounded"
            />
            {question.options.map((option, index) => (
                <input
                    key={index}
                    type="text"
                    value={option}
                    onChange={(e) => handleOptionChange(index, e.target.value)}
                    placeholder={`Option ${index + 1}`}
                    className="w-full p-2 border rounded"
                />
            ))}
            <button 
                type="button" 
                onClick={handleSubmit} 
                className="bg-green   -500 text-white px-4 py-2 rounded"
            >
                Add Multiple Choice Question
            </button>
        </div>
    )
}