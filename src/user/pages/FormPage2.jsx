import { FaChevronLeft } from "react-icons/fa"
import { NavBar } from "../../ui/components"
import { useNavigate } from "react-router-dom"

export function FormPage2() {

    const navigate = useNavigate()

    return(
        <>
        <div className="form-header-container">
            <FaChevronLeft className="icon-form" onClick={()=> { navigate('/form') }} />
            <h2>Acta de Instalación</h2>
        </div>
        <div className="bar">
            <div className="progress-2"></div>
        </div>
        <div className="form-header">
            <h2>Medidor de energía activa/reactiva - principal - encontrado/instalado</h2>
        </div>
        <div className="form-container">
            <input type="text" placeholder="Propiedad de medidor" className="input-form" />
            <input type="text" placeholder="Serie de medidor" className="input-form" />
            <input type="text" placeholder="Marca medidor" className="input-form" />
            <input type="text" placeholder="Lectura importación activa" className="input-form"  />
            <input type="text" placeholder="Lectura exportación activa" className="input-form"  />
            <input type="text" placeholder="Lectura importación reactiva"  className="input-form" />
            <input type="text" placeholder="Lectura exportación reactiva" className="input-form" />
            <input type="text" placeholder="Sellos" className="input-form" />
            <button className="btn-form" onClick={()=>{ navigate('/form-step3') }} >Continuar</button>
        </div>
        <NavBar/>
        </>
    )
}