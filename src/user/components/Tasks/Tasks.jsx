import taskInfo from '../../const/infoTasks'
import { useNavigate } from 'react-router-dom'
// icons
import { FaChevronRight } from 'react-icons/fa'

import './tasks.css'

export function Tasks() {

    const navigate = useNavigate()

    return (
        <section className="tasks-container">

            <div className="section-header">
                <h2 className='header-title'>Trabajos del día
                    <span>
                        Revisa tu orden del día
                    </span>
                </h2>
                <p className='view-more' onClick={()=> navigate('/tasks')}>Ver más <FaChevronRight /> </p>
            </div>

            {
                taskInfo.map(({ id, date, meridiem, icon, task }, i) => {
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
                                <div className="task-info-container">
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