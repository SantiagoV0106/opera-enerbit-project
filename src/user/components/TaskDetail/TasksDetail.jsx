import taskDetailInfo from "../../const/infoTasksDetail"
import { FaChevronRight } from "react-icons/fa"

import './taskdetail.css'
import { useNavigate } from "react-router-dom"

export function TaskDetail() {

    const navigate = useNavigate()

    return(
        <section className="tasks-detail-container">
        {
            taskDetailInfo.map(({ id, date, meridiem, icon, task, path }, i) => {
                return (
                    <div key={id} className="task-section-container">
                        <div className="date-container">
                            <div  className='date-info'  >
                                <p className={0 === i ? 'active-task-date' : 'task-date'}>
                                    {date}
                                </p>
                                <span className='meridiem-span'>
                                    {meridiem}
                                </span>
                            </div>
                            <div className="task-info-container" onClick={()=> {navigate(`${path}`)}}>
                                <div className="task-info">
                                    <img src={icon} alt="task-icon" />
                                    <p>{task}</p>
                                </div>
                                <FaChevronRight className='see-more-icon' />
                            </div>
                        </div>
                    </div>
                )
            })
        }

    </section>
    )
}