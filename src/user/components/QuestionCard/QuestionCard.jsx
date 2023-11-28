import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import questions from '../../const/questions'
import answersQuestions from '../../const/answersQuestions'

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

import './QuestionCard.css'

export const QuestionCard = () => {
    const rightIconStyle = {
        color: '#ED7004',
        marginRight: '19px'
    }

    const leftIconStyle = {
        color: '#ED7004',
        marginLeft: '19px'
    }

    const navigate = useNavigate()

    const [questionId, setQuestionId] = useState(0)
    const actualQuestion = questions[questionId]

    const [answersId, setAnswersId] = useState(0)
    const actualAnswers = answersQuestions[answersId]

    const handleNextQuestion = () => {
        setQuestionId(questionId + 1)
        setAnswersId(answersId + 1)
    }

    const handlePreviousQuestion = () => {
        setQuestionId(questionId - 1)
        setAnswersId(answersId - 1)
    }

    return (
        <>
            <div className="question-container">
                <h1>{actualQuestion.title}</h1>
                <p>{actualQuestion.question}</p>
            </div>

            <h1 className='answers-title'>¿Cuál es la acción más segura?</h1>
            <div className="answers-container">
                <div className="answer-card">
                    <p>{actualAnswers.answersA}</p>
                </div>
                <div className="answer-card">
                    <p>{actualAnswers.answersB}</p>
                </div>
                <div className="answer-card">
                    <p>{actualAnswers.answersC}</p>
                </div>
                <div className="answer-card">
                    <p>{actualAnswers.answersD}</p>
                </div>
            </div>
            <div className='questionnaire-btns'>
                <div>
                    <button className={`previous-question-btn ${actualQuestion.id >= 2 ? 'show' : 'hide'}`} onClick={handlePreviousQuestion}><FaChevronLeft style={rightIconStyle}/>Anterior</button>
                </div>
                <div>
                    <button className={`next-question-btn ${actualQuestion.id === 5 ? 'hide' : 'show'}`} onClick={handleNextQuestion}>Siguiente<FaChevronRight style={leftIconStyle}/></button>
                    <button className={`finish-question-btn ${actualQuestion.id === 5 ? 'show' : 'hide'}`} onClick={() => navigate('/questionnaire-scores')}>Finalizar<FaChevronRight style={leftIconStyle}/></button>
                </div>
            </div>
        </>
    )
}