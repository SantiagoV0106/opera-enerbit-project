import './button.css'
export function ActionButton({ type, title, icon }) {

    return (
        <button className='action-button' type={type}> {title} {icon} </button>
    )

}