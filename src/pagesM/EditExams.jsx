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
      
      <div className="w-full flex items-center justify-center">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4 w-40"
        onClick={handleAddQuestion}
      >
        {editingIndex !== null ? 'Update Question' : 'Add Question'}
      </button>
      </div>
      

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
                <td className="py-2 px-4 border-b flex ">
                  <button
                    className="bg-yellow-500 text-white px-3 py-1 rounded-md mr-2"
                    onClick={() => handleEditQuestion(index)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>

                  </button>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded-md"
                    onClick={() => handleDeleteQuestion(index)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>

                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
            <div className="w-full flex justify-center">
            <button
        className="bg-green-500 text-white w-32 px-4 py-2 rounded-md mt-6 "
        onClick={handleSubmit}
      >
        Save Exam
      </button>
            </div>
      
    </div>
  )
}
