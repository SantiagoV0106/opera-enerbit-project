import './PodioGraphic.css'

export function PodioGraphic() {
    return (
        <>
            <div className='podio-graphic'>
                <div className='second-place'>
                    <img className='second-place-img' src='/user3.png' alt='second-place-img' />
                    <h1>Alberto<span>22 EXP</span></h1>
                    <div className='bar-second-place'><h2>2</h2></div>
                </div>
                <div className='firts-place'>
                    <div className='firts-place-img-div'>
                        <img className='firts-place-img' src='/user2.png' alt='first-place-img' />
                        <div className='medal-icon-bg'>
                            <img className='medal-first-place' src='/medalIcon.png' alt='medal-first-place' />
                        </div>
                    </div>
                    <h1>Fernando<span>25 EXP</span></h1>
                    <div className='bar-firts-place'><h2>1</h2></div>
                </div>
                <div className='third-place'>
                    <img className='third-place-img' src='/user4.png' alt='third-place-img' />
                    <h1>Claudia<span>22 EXP</span></h1>
                    <div className='bar-third-place'><h2>3</h2></div>
                </div>
            </div>
        </>
    )
}