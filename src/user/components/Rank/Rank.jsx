import { useNavigate } from 'react-router-dom'
import { ActionButton } from '../../../ui/components'
// icons
import { FaChevronRight } from 'react-icons/fa'
import './rank.css'

export function Rank() {
    const navigate = useNavigate()

    return (
        <div className="rank-container">
            <div className="rank-info-container">
                <div className="icon-rank-contianer">
                    <img src="/silver.png" alt="rank-icon" />
                </div>
                <div className="rank-title-container">
                    <h2>
                        División:
                    </h2>
                    <span>
                        Plata
                    </span>
                </div>
            </div>
            <ActionButton type='button' onClick={() => navigate('/profile')} title='Revisa tu progreso' icon={<FaChevronRight/>} />
        </div>
    )
}