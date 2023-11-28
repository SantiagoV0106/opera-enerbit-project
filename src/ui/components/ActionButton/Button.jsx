import './button.css'

export function ActionButton({ type, onClick, title, icon }) {

    return (
        <button className='action-button' type={type} onClick={onClick}> {title} {icon} </button>
    )

}