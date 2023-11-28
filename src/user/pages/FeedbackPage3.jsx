import { FaChevronLeft } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import { NavBar } from "../../ui/components"

import './feedbackpage.css'

export function FeedbackPage3() {


    const navigate = useNavigate()

    return (
        <>
            <div className="header-deco"></div>
            <img id='background-img' src="/BG line 2.svg" alt="background-img" />
            <section className="header-task-detail">
                <FaChevronLeft onClick={() => navigate('/questionnaire-scores')} />
                <h2 className="header-training-detail-title">Tu opinión</h2>
            </section>
            <div className="task-desc">
                <div className="desc-title">
                    <h2 id="feedbacktitle">Nos interesa tu opinión</h2>
                </div>
                <p>¿Qué crees que podemos mejorar para la siguiente capacitación?</p>
            </div>
           

                <textarea name="Feedback" id="feedback-text-area" cols="30" rows="10" placeholder="Comparte tus comentarios">

                </textarea>
    
            <div className='feedbacks-btns'>

                <div>
                    <button className="feedback-btn" onClick={() => navigate('/feedback2')}><FaChevronLeft />Anterior</button>
                </div>
            </div>
            <button className="btn-task-service" onClick={() => { navigate('/') }} >Finalizar</button>
            <NavBar />
        </>
    )
}