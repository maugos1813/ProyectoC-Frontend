import React, { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ExamContext } from "../context/ExamContext-"
import { AuthContext } from "../context/AuthContext"


export const EditExams = () => {
  const { id } = useParams()
  const { data } = useContext(ExamContext)
  const { updExam } = useContext(ExamContext)
  const { user } = useContext(AuthContext);
  //const { userId } = localStorage.getItem('userId')

  const [title, setTitle] = useState('')
  const [level, setLevel] = useState('')
  const [userId, setuserId] = useState('')

  const [questions, setQuestions] = useState([])
  const [currentQuestion, setCurrentQuestion] = useState({
    type: 'open',
    statement: '',
    correctAnswer: '',
    options: [],
    score: ''
  })
  const [questionType, setQuestionType] = useState('open')
  const [editingIndex, setEditingIndex] = useState(null)


  useEffect(() => {
    localStorage.setItem('ParEx',id)
    const exam = data.find(exam => exam._id === id)
    // const lvl = data.find(ex => exam._id === id)
   // console.log(exam)
    if (exam) {
      setTitle(exam.name)
      setLevel(exam.level_id._id)
      setQuestions(exam.questions)
      setuserId(user?._id)
    }
  }, [data, id])

  const handleQuestionChange = (e) => {
    const { name, value } = e.target
    setCurrentQuestion({
      ...currentQuestion,
      [name]: value
    })
  }

  const handleQuestionTypeChange = (e) => {
    const newType = e.target.value
    setQuestionType(newType)
    setCurrentQuestion({
      type: newType,
      statement: '',
      correctAnswer: '',
      options: [],
      score: ''
    })
  }

  const handleAddOption = () => {
    setCurrentQuestion({
      ...currentQuestion,
      options: [...currentQuestion.options, '']
    })
  }

  const handleOptionChange = (index, value) => {
    const newOptions = currentQuestion.options.map((option, i) =>
      i === index ? value : option
    )
    setCurrentQuestion({
      ...currentQuestion,
      options: newOptions
    })
  }

  const handleAddQuestion = () => {
    if (editingIndex !== null) {
      const updatedQuestions = questions.map((question, index) =>
        index === editingIndex ? currentQuestion : question
      )
      setQuestions(updatedQuestions)
      setEditingIndex(null)
    } else {
      setQuestions([...questions, currentQuestion])
    }
    setCurrentQuestion({
      type: questionType,
      statement: '',
      correctAnswer: '',
      options: [],
      score: ''
    })
  }

  const handleEditQuestion = (index) => {
    const questionToEdit = questions[index]
    setCurrentQuestion(questionToEdit)
    setQuestionType(questionToEdit.type)
    setEditingIndex(index)
  }

  const handleDeleteQuestion = (index) => {
    const updatedQuestions = questions.filter((_, i) => i !== index)
    setQuestions(updatedQuestions)
  }


  //////////////////////////////////////////////////////////////////////
  const handleSubmit = async () => {
    const updatedExamData = {
      title,
      user_id: userId,
      level_id: level,
      questions
    }
    await updExam.mutateAsync(updatedExamData);

    console.log(updatedExamData)
  }
  
  ////////////////////////////////////////////////////////////////
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg flex flex-col ">
      <h2 className="text-2xl font-bold mb-4">Edit Exam</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Title:</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>


      <label className="block text-sm font-medium text-gray-700">Question Type:</label>
      <select
        value={questionType}
        onChange={handleQuestionTypeChange}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md mb-4"
      >
        <option value="open">Open</option>
        <option value="multiple-choice">Multiple Choice</option>
        <option value="video">Video</option>
      </select>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Statement:</label>
        <input
          type="text"
          name="statement"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          value={currentQuestion.statement}
          onChange={handleQuestionChange}
        />
      </div>

      {questionType === 'open' && (
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Correct Answer:</label>
          <input
            type="text"
            name="correctAnswer"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            value={currentQuestion.correctAnswer}
            onChange={handleQuestionChange}
          />
        </div>
      )}

      {questionType === 'multiple-choice' && (
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Options:</label>
          {currentQuestion.options.map((option, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                type="text"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                value={option}
                onChange={(e) => handleOptionChange(index, e.target.value)}
              />
            </div>
          ))}
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-md mt-2"
            onClick={handleAddOption}
          >
            Add Option
          </button>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Correct Answer:</label>
            <input
              type="text"
              name="correctAnswer"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              value={currentQuestion.correctAnswer}
              onChange={handleQuestionChange}
            />
          </div>
        </div>
      )}

      {questionType === 'video' && (
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Video URL or Instructions:</label>
          <input
            type="text"
            name="correctAnswer"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            value={currentQuestion.correctAnswer}
            onChange={handleQuestionChange}
          />
        </div>
      )}

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Score:</label>
        <input
          type="number"
          name="score"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          value={currentQuestion.score}
          onChange={handleQuestionChange}
        />
      </div>

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4 w-40"
        onClick={handleAddQuestion}
      >
        {editingIndex !== null ? 'Update Question' : 'Add Question'}
      </button>

      <div className="mt-6">
        <h3 className="text-xl font-bold mb-2">Questions List:</h3>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Question</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {questions.map((question, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b">{question.statement}</td>
                <td className="py-2 px-4 border-b">
                  <button
                    className="bg-yellow-500 text-white px-3 py-1 rounded-md mr-2"
                    onClick={() => handleEditQuestion(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded-md"
                    onClick={() => handleDeleteQuestion(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button
        className="bg-green-500 text-white w-32 px-4 py-2 rounded-md mt-6 "
        onClick={handleSubmit}
      >
        Save Exam
      </button>
    </div>
  )
}
