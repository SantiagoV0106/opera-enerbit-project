import './ScoresLevelsCard.css'

export function ScoresLevelsCard({ onClick }) {
    return (
        <>
            <div className="scores-levels-card" onClick={onClick}>
                <div className='division-div'>
                    <img className='division-orange-icon' src="/divisionOrangeIcon.png" alt="division-orange-icon" />
                    <h1 className='division-text'>Plata<span>División actual</span></h1>
                </div>
                <div className='scores-line-deco'></div>
                <div className='energy-points-div'>
                    <img className='energy-orange-icon' src="/energyOrangeIcon.png" alt="energy-orange-icon" />
                    <h1 className='energy-points-text'>3091<span>Puntos de exp.</span></h1>
                </div>
                <div className='scores-line-deco'></div>
                <div className='apradinados-div'>
                    <img className='apradinados-orange-icon' src="/apradinadosOrangeIcon.png" alt="apradinados-orange-icon" />
                    <h1 className='apradinados-text'>12<span>Apadrinados</span></h1>
                </div>
            </div>
        </>
    )
}