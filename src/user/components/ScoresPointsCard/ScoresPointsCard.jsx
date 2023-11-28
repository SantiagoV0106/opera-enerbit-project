import './ScoresPointsCard.css'

export function ScoresPointsCard() {
    return (
        <>
            <div className="scores-points-card">
                <div className='energy-points-div'>
                    <img className='energy-orange-icon' src="/energyOrangeIcon.png" alt="energy-orange-icon" />
                    <h1 className='energy-points-text'>3091<span>Puntos de exp.</span></h1>
                </div>
                <div className='scores-line-deco'></div>
                <div className='posi-div'>
                    <img className='posi-orange-icon' src="/apradinadosOrangeIcon.png" alt="position-orange-icon" />
                    <h1 className='posi-text'>#4<span>Posición</span></h1>
                </div>
            </div>
        </>
    )
}