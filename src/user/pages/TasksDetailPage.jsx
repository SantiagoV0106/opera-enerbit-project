import { useNavigate } from "react-router-dom"
import { FaChevronLeft } from "react-icons/fa"
import { Calendar, NavBar } from "../../ui/components"
import { TaskDetail } from "../components"

import './TasksDetailPage.css'


export function TasksDetailPage() {

    const navigate = useNavigate()


    return (
        <>
            <div className="header-deco"></div>
            <img id='background-img' src="/BG line 2.svg" alt="background-img" />
            <section className="header-tasks-detail">
                <FaChevronLeft onClick={() => navigate('/')}/>
                <h2 className="header-training-detail-title">Tareas del dia</h2>
            </section>
            <Calendar />
            <TaskDetail/>
            <NavBar/>
        </>
    )
}