import usersList from '../../const/usersList'

import './UsersList.css'

export function UsersList() {
    return (
        <>
            <div className='users-list-div'>
                {
                    usersList.map(({id, position, photo, name, score})=> {
                        
                        const isEmanuel = name === 'Emanuel'

                        return (
                            <div key={id} className={`info-user-div ${isEmanuel ? 'emanuel-div' : ''}`}>
                                <h2 className='position-text'>{position}</h2>
                                <img className="photo-user" src={photo} alt="photo-user" />
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