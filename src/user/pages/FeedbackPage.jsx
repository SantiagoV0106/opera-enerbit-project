import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import { NavBar } from "../../ui/components"

import './feedbackpage.css'

export function FeedbackPage() {

    
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
                <p> ¿En que medidas sientes que la charla fue clara y comprensible?
                   <b> 1 siendo mal y 5 excelente </b> </p>
            </div>
          <div className="feedback-container">
            <div className="big-img-container">
                <img src="/excelente.png" alt="exceletne" />
            </div>
            <div className="feedback-rank-container">
                <img src="feedbackrank.png" alt="feedbackrank" />
            </div>
          </div>
          <div className='feedback-btns'>

                <div>
                    <button className="feedback-btn" onClick={() => navigate('/feedback2')}>Siguiente<FaChevronRight/></button>
                </div>
            </div>
            <NavBar />
        </>
    )
}