import { FaChevronLeft } from "react-icons/fa"
import { NavBar } from "../../ui/components"
import { useNavigate } from "react-router-dom"

import './taskdetail.css'

export function TaskDetailPage() {

    const navigate = useNavigate()

    return (
        <>
            <div className="header-deco"></div>
            <img id='background-img' src="/BG line 2.svg" alt="background-img" />
            <section className="header-task-detail">
                <FaChevronLeft onClick={() => navigate('/tasks')} />
                <h2 className="header-training-detail-title">Inspeccion de seguridad</h2>
            </section>
            <div className="task-desc">
                <div className="desc-title">
                    <h2>Descripción</h2>
                    <img src="/clipboardIcon.png" alt="image" />
                </div>
                <p> Verificar que el
                    medidor y su entorno cumplan con
                    las normas de seguridad eléctrica
                    para prevenir riesgos eléctricos
                    y garantizar un funcionamiento seguro.</p>
            </div>
            <h2 className='task-info-general'>Información General</h2>
            <div className="general-info-container">
                <div className="client-info-container">
                    <img src="/userIcon.png" alt="client img" />
                    <div className="sub-info">
                        <p>Nombre del Usuario:</p>
                        <h2>María Fernanda Londoño</h2>
                    </div>
                </div>
                <div className="client-info-container">
                    <img src="/locationIcon.png" alt="client img" />
                    <div className="sub-info">
                        <p>Ubicación:</p>
                        <h2>Carrera 76B #2-56 Alto Pance, Cali</h2>
                    </div>
                </div>
                <div className="client-info-container">
                    <img src="/clipboard-textIcon.png" alt="client img" />
                    <div className="sub-info">
                        <p>Anotaciones</p>
                        <p> Es al casa de dos pisos, al lado de un árbol grande con un portón negro.
                            Cuidado hay un perro esperando al otro lado, no se preocupe no muerde.
                        </p>
                    </div>
                </div>
            </div>
            <button className="btn-task-service" onClick={()=>{ navigate('/form') }} >Empezar servicio</button>
            <NavBar />
        </>
    )

}