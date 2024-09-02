import { useContext, useState } from 'react'
import { CreateEContext } from '../context/CreateEContextM'
import { PreguntaO } from '../components/PreguntaO'

export const CreationE = () => {
    const context = useContext(CreateEContext)
    
    const [examData, setExamData] = useState({
        name: '',
        level_id: '',
        questions: []
    })
    
    if (!context) {
        return <div>Loading...</div>
    }

    const { user, createExam } = context

    

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
                    <select
                        id="level_id"
                        name="level_id"
                        value={examData.level_id}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded"
                        required
                    >
                        <option value="">Select a level</option>
                        <option value="66c4f0f25094893ae4081db4">A1 - Elementary</option>
                        {/* Add more options based on your available levels */}
                    </select>
                </div>
                
                <div className="space-y-4">
                    <h2 className="text-xl font-semibold">Add Questions</h2>
                    <PreguntaO onAddQuestion={handleAddQuestion} />
                </div>
                
                <div>
                    <h3 className="text-lg font-semibold mb-2">Added Questions:</h3>
                    <ul className="list-disc pl-5">
                        {examData.questions.map((q, index) => (
                            <li key={index}>
                                {q.type === 'open' ? 'Open Question: ' : 'Multiple Choice: '}
                                {q.statement}
                            </li>
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