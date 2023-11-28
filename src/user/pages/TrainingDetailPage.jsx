import { useNavigate } from "react-router-dom";
import { TrainingTime, TrainingStartCard } from "../components";
import { FaChevronLeft } from 'react-icons/fa'

import './TrainingDetailPage.css'
import { NavBar } from "../../ui/components";

export function TrainingDetailPage () {
    const navigate = useNavigate()

    return(
        <>
            {/* <div className="header"></div> */}
            <div className="header-color-detail"></div>
            <img className='background-training-img' src="/backgroundTraining.jpg" alt="background-training-img" />
            <img className='background-img' src="/BG line 2.svg" alt="background-img" />
            <section className="header-training-detail">
                <FaChevronLeft onClick={() => navigate('/training-sessions')}/>
                <h1 className="header-training-detail-title">Capacitación</h1>
            </section>
            <section className="start-card-section">
                <TrainingStartCard />
                <TrainingTime />
            </section>
            <section className="training-detail-section">
                <h1>Descripción</h1>
                <p>En la capacitación sobre el uso de la aplicación llamada "Ópera", los participantes recibirán una orientación exhaustiva sobre cómo aprovechar al máximo esta herramienta esencial para optimizar sus tareas laborales. A lo largo de la capacitación, se cubrirán temas que van desde la navegación básica en la aplicación hasta funciones más avanzadas, para gestionar eficazmente datos, comunicaciones y tareas específicas de su trabajo utilizando "Ópera".</p>
                <div className="questionnaire-btns-section">
                    <h2>¿Ya acabaste la capacitación?</h2>
                    <button className="btn-do-questionnaire" onClick={() => navigate('/questionnaire')} >Realizar el cuestionario</button>
                </div>
            </section>
            <NavBar/>
        </>
    )
}