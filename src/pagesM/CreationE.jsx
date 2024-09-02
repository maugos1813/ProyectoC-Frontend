import { useContext, useState } from 'react'
import { CreateEContext } from '../context/CreateEContextM'
import { PreguntaS } from '../components/PreguntaS'
import { PreguntaO } from '../components/PreguntaO'

export const CreationE = () => {
    console.log("Rendering CreationE")
    const context = useContext(CreateEContext)
    console.log("Context:", context)
    // Check if context is undefined
    if (!context) {
        console.log("Context is undefined")
        return <div>Loading...</div>
    }

    const { user, createExam } = context

    const [examData, setExamData] = useState({
        name: '',
        level_id: '',
        questions: []
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setExamData(prev => ({ ...prev, [name]: value }))
    }

    const handleAddQuestion = (question) => {
        setExamData(prev => ({
            ...prev,
            questions: [...prev.questions, question]
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        createExam(examData)
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Create Exam</h1>
            {user && <p className="mb-4">Welcome, {user.name}</p>}
            
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block mb-2">Exam Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={examData.name}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="level_id" className="block mb-2">Level ID</label>
                    <input
                        type="text"
                        id="level_id"
                        name="level_id"
                        value={examData.level_id}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                
                <div className="space-y-4">
                    <h2 className="text-xl font-semibold">Add Questions</h2>
                    <PreguntaS onAddQuestion={handleAddQuestion} />
                    <PreguntaO onAddQuestion={handleAddQuestion} />
                </div>
                
                <div>
                    <h3 className="text-lg font-semibold mb-2">Added Questions:</h3>
                    <ul className="list-disc pl-5">
                        {examData.questions.map((q, index) => (
                            <li key={index}>{q.text || `Question ${index + 1}`}</li>
                        ))}
                    </ul>
                </div>
                
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Create Exam
                </button>
            </form>
        </div>
    )
}