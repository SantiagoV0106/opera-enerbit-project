import { useNavigate } from "react-router-dom";
import { DailyTraining, OldTraining } from "../components";

import { FaChevronLeft } from 'react-icons/fa'

import './TrainingSessionsPage.css'
import { NavBar } from "../../ui/components";

export function TrainingSessionsPage () {
    const navigate = useNavigate()

    return (
        <>
            <div className="header-deco"></div>
            <img id='background-img' src="/BG line 2.svg" alt="background-img" />
            <section className="header-training">
                <FaChevronLeft onClick={() => navigate('/')}/>
                <h1 className="header-training-title"><b>Capacitación</b> de hoy</h1>
            </section>
            <DailyTraining onClick={() => navigate('/training-detail')}/>
            <section className="old-trainings-section">
                <div className='header-old-training'>
                    <h1 className="old-training-title">Capacitaciones anteriores</h1>
                    <img className='filter-training' src="/filterIcon.png" alt="filter-img" />
                </div>
                <OldTraining />
            </section>
            <NavBar/>
        </>
    )
}