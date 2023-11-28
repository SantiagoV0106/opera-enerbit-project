import apadrinadosList from '../../const/apadrinadosList'

import './ApadrinadosList.css'

export function ApadrinadosList() {
    return (
        <>
            <div className='apadrinados-list-div'>
                {
                    apadrinadosList.map(({id, position, photo, name, score})=> {
                        return (
                            <div key={id} className="info-apadrinados-div">
                                <h2 className='position-text'>{position}</h2>
                                <img className="photo-apadrinados" src={photo} alt="photo-apadrinados" />
                                <h1 className='name-text'>{name}</h1>
                                <h3 className='score-text'>{score}</h3>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}