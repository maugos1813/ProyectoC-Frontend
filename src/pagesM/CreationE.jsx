import { useContext, useState, useEffect } from 'react'
import { CreateEContext } from '../context/CreateEContextM'
import { PreguntaO } from '../components/PreguntaO'
import axios from 'axios'

export const CreationE = () => {
    const context = useContext(CreateEContext)
    
    const [examData, setExamData] = useState({
        name: '',
        level_id: '',
        questions: []
    })

    const [levels, setLevels] = useState([])
    
    const { user, createExam } = context

    useEffect(() => {
        const fetchLevels = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/levels/all')
                setLevels(response.data)
            } catch (error) {
                console.error('Error fetching levels:', error)
            }
        }

        fetchLevels()
    }, [])

    if (!context) {
        return <div>Loading...</div>
    }

    

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

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await createExam(examData)
            alert('Exam created successfully!')
        } catch (error) {
            console.error('Error creating exam:', error)
            alert('Failed to create exam. Please try again.')
        }
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
                    <label htmlFor="level_id" className="block mb-2">Level</label>
                    <select
                        id="level_id"
                        name="level_id"
                        value={examData.level_id}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded"
                        required
                    >
                        <option value="">Select a level</option>
                        {levels.map(level => (
                            <option key={level._id} value={level._id}>
                                {level.name} - {level.sub_name}
                            </option>
                        ))}
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