import { useNavigate } from "react-router-dom";
import { QuestionCard } from "../components";

import { FaChevronLeft } from 'react-icons/fa'

import './QuestionnairePage.css'

export function QuestionnairePage () {
    const navigate = useNavigate()

    return (
        <>
            <div className="header-deco"></div>
            <img id='background-img' src="/BG line 2.svg" alt="background-img" />
            <section className="header-questionnaire">
                <FaChevronLeft onClick={() => navigate('/training-detail')}/>
                <h1 className="header-questionnaire-title">Cuestionario</h1>
            </section>
            <section className="answers-section">
                <QuestionCard />
            </section>
        </>
    )
}