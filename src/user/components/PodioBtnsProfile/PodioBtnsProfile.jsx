import './PodioBtnsProfile.css'

export function PodioBtnsProfile({ activeBtn, handleClick }) {

    return(
        <>
            <div className='podio-btns-div'>
                <button className={activeBtn === 'Vista general' ? 'activo' : ''} onClick={() => handleClick('Vista general')}>Vista general</button>
                <button className={activeBtn === 'Podio' ? 'activo' : ''} onClick={() => handleClick('Podio')}>Podio</button>
            </div>
        </>
    )
}