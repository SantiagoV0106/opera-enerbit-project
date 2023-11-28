import { useNavigate } from "react-router-dom";
import { UsersList, ScoresPointsCard } from "../components";
import { FaChevronLeft } from 'react-icons/fa'

import './QuestionnaireScores.css'
import { NavBar } from "../../ui/components";

export function QuestionnaireScores() {
    const navigate = useNavigate()

    return (
        <>
            <div className="header-deco"></div>
            <img id='background-img' src="/BG line 2.svg" alt="background-img" />
            <section className="header-questionnaire">
                <FaChevronLeft onClick={() => navigate('/training-detail')}/>
                <h1 className="header-score-title">Calificación</h1>
            </section>
            <img className='medal-star-img' src="/medalStar.png" alt="medal-star-img" />
            <section className="score-section">
                <h1 className="score-text-title">¡Eres GOLD!
                    <span>
                        Cuestionario capacitación: <b>Conoce a Ópera</b>
                    </span>
                </h1>
                <ScoresPointsCard />
                <section className="users-list-section">
                    <UsersList />
                </section>
            </section>
            <button className="end-btn" onClick={() => navigate('/feedback')}>Finalizar</button>
            <NavBar/>
        </>
    )   
}