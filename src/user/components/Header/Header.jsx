import './header.css'

export function Header() {
    return (

        <div className="header-container">
            <div className="perfil-container">
                <h2>Bienvenido <b>Emanuel</b>
                </h2>
                <span>Este es tu programa del día</span>
            </div>
            <div className="img-container">
                <img src="/perfil.png" alt="user-img" />
            </div>
        </div>

    )
}