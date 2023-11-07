import infoTrainig from '../../const/infoTraining'

//icons
import { FaChevronRight } from 'react-icons/fa'

import './training.css'

export function Training() {
    return(
        <section className="training-section">

        <div className="training-section-header">
            <h2 className='header-title'>
                Capacitaciones
                <span>
                    Revisa tus capacitaciones anteriores
                </span>
            </h2>
            <p className='view-more'>Ver más <FaChevronRight /> </p>
        </div>

        <div className="training-section-container">
        {
            infoTrainig.map(({id,icon,title})=> {
                return (
                    <div key={id} className="training-container">
                        <img src={icon} alt="training-icon"/>
                        <p > {title} </p>
                        <p>Conoce más</p>
                    </div>
                )
            })
        }
        </div>

    </section>
    )
}