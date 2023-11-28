import { FaChevronRight } from 'react-icons/fa'
import infoDailyTrainig from '../../const/infoDailyTraining'

import './DailyTraining.css'

export const DailyTraining = ({ onClick }) => {
    return (
        <>
            {
                infoDailyTrainig.map(({id,title,description,icon})=> {
                    return (
                        <div key={id} className="daily-training-container" onClick={onClick}>
                            <div>
                                <h1>{title} <FaChevronRight /></h1>
                                <p>{description}</p>
                            </div>
                            <div>
                                <img className='daily-training-icon' src={icon} alt="daily-training-icon"/>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}