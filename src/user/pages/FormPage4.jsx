import { FaChevronLeft } from "react-icons/fa"
import { NavBar } from "../../ui/components"
import { useNavigate } from "react-router-dom"

export function FormPage4() {

    const navigate = useNavigate()

    return (
        <>
            <div className="form-header-container">
                <FaChevronLeft className="icon-form" onClick={() => { navigate('/form') }} />
                <h2>Acta de Instalación</h2>
            </div>
            <div className="bar">
                <div className="progress-4"></div>
            </div>
            <div className="form-header">
                <h2>Observaciones</h2>
            </div>
            <div className="form-container">
                
                <textarea name="observaciones" id="observaciones" cols="30" rows="10" placeholder="Escribe tus observaciones aquí">

                </textarea>
               
                <button className="btn-form" onClick={() => { navigate('/') }} >Finalizar</button>
            </div>
            <NavBar />
        </>
    )
}