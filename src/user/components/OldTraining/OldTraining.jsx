import { FaChevronRight } from 'react-icons/fa'
import infoOldTraining from '../../const/infoOldTraining'

import './OldTraining.css'

export const OldTraining = () => {
    return (
        <>
            {
                infoOldTraining.map(({id,icon,date,title,description,percentage,state,stateIcon})=> {
                    return (
                        <div key={id} className="old-training-container">
                            <div className='header-old-training-card'>
                                <img className='old-training-icon' src={icon} alt="old-training-icon"/>
                                <h3>{date}</h3>
                                <FaChevronRight />
                            </div>
                            <h1>{title}</h1>
                            <p>{description}</p>
                            <div className='footer-old-training'>
                                <div className='percentage-div'>
                                    <h1>{percentage}</h1>
                                    <div className='percentage-bar'></div>
                                </div>
                                <div className='certificado-div'>
                                    <h3>{state}</h3>
                                    <img className='certificado-icon' src={stateIcon} alt="certificado-icon"/>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}