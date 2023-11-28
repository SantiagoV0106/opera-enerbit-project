import './TrainingStartCard.css'

export function TrainingStartCard() {
    return (
        <>
            <div className="big-training-start-card">
                <div className="training-start-card">
                    <img className='enerbit-icon' src="/enerbitIcon.png" alt="enerbit-icon" />
                    <div className='line-deco'></div>
                    <div className='info-start-card'>
                        <h1>Conoce Ópera</h1>
                        <p>Enerbit - Hace 6 minutos</p>
                    </div>
                </div>
                <button className='play-training-btn'><img className='play-icon' src="/playIcon.png" alt="play-icon" /></button>
            </div>
        </>
    )
}