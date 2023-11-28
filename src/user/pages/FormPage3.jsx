import { FaChevronLeft } from "react-icons/fa"
import { NavBar } from "../../ui/components"
import { useNavigate } from "react-router-dom"

export function FormPage3() {

    const navigate = useNavigate()

    return (
        <>
            <div className="form-header-container">
                <FaChevronLeft className="icon-form" onClick={() => { navigate('/form') }} />
                <h2>Acta de Instalación</h2>
            </div>
            <div className="bar">
                <div className="progress-3"></div>
            </div>
            <div className="form-header">
                <h2>Paneles o cajas de seguridad - Retiradas </h2>
            </div>
            <div className="form-container">
                <div className="input-form-container">
                    <h2>Celda o caja de medidor principal</h2>
                    <input type="text" placeholder="Fabricante" className="input-form" />
                </div>
                <div className="input-form-container">
                    <h2>Celda o caja de medidor respaldo/testigo</h2>
                    <input type="text" placeholder="Fabricante" className="input-form" />
                </div>
                <div className="input-form-container">
                    <h2>Celda de transformadores de medida</h2>
                    <input type="text" placeholder="Fabricante" className="input-form" />
                </div>
                <div className="input-form-container">
                    <h2>Otras celdas del sistema de medida</h2>
                    <input type="text" placeholder="Fabricante" className="input-form" />
                </div>
               
                <button className="btn-form" onClick={() => { navigate('/form-step4') }} >Continuar</button>
            </div>
            <NavBar />
        </>
    )
}