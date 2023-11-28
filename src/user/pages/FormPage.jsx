import { FaChevronLeft } from "react-icons/fa"

import './formpage.css'
import { useNavigate } from "react-router-dom"
import { NavBar } from "../../ui/components"

export function FormPage() {

const navigate = useNavigate()

    return (
        <>
        <div className="form-header-container">
            <FaChevronLeft className="icon-form" onClick={()=> { navigate('/task1') }} />
            <h2>Acta de Instalación</h2>
        </div>
        <div className="bar">
            <div className="progress"></div>
        </div>
        <div className="form-header">
            <h2>Información General</h2>
        </div>
        <div className="form-container">
            <input type="text" placeholder="Nombre del Usuario" className="input-form" />
            <input type="text" placeholder="Dirección" className="input-form" />
            <input type="text" placeholder="Ciudad" className="input-form" />
            <input type="text" placeholder="Departamento" className="input-form"  />
            <input type="text" placeholder="Imagen del sistema de medida" className="input-form"  />
            <input type="text" placeholder="Código SIC RF"  className="input-form" />
            <input type="text" placeholder="Tensión de Servicio (kV)" className="input-form" />
            <input type="text" placeholder="Capacidad instalada del transformador de potencia" className="input-form" />
            <input type="text" placeholder="Tensión primaria del transformador de potencia" className="input-form"  />
            <input type="text" placeholder="Conexión" className="input-form"  />
            <input type="text" placeholder="Factor liquidación externo" className="input-form"  />
            <input type="text" placeholder="Operador de red" className="input-form" />
            <button className="btn-form" onClick={()=>{ navigate('/form-step2') }} >Continuar</button>
        </div>
        <NavBar/>
        </>
    )
}