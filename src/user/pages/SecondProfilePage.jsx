import { useNavigate } from "react-router-dom";
import { ApadrinadosList } from "../components";
import { FaChevronLeft } from 'react-icons/fa'

import './SecondProfilePage.css'
import { NavBar } from "../../ui/components";

export function SecondProfilePage() {
    const navigate = useNavigate()

    return (
        <>
            <div className="header-deco"></div>
            <img id='background-img' src="/BG line 2.svg" alt="background-img" />
            <section className="header-profile">
                <FaChevronLeft onClick={() => navigate('/profile')}/>
                <img className='messages-icon' src="/messagesIcon.png" alt="messages-icon" />
            </section>
            <div className="profile-img-div">
                <img className='profile-img' src="/user1.png" alt="profile-img" />
                <button className="edit-profile-btn"><img className='edit-profile-icon' src="/editProfileIcon.png" /></button>
            </div>
            <section className="profile-section">
                <h1 className="user-name-title">Emanuel
                    <span>
                        <img className='clock-icon' src="/clockIcon.png" alt="clock-icon" />
                        Te uniste en noviembre de 2023
                    </span>
                </h1>
                <img className='apadrinados-purple-icon' src="/apradinadosPurpleIcon.png" alt="apadrinados-purple-icon" />
                <h1 className='apadrinados-title'>12<span>Has apadrinado 12 operarios en esta división</span></h1>
                <section className="apadrinados-list-section">
                    <ApadrinadosList/>    
                </section>
            </section>
            <NavBar/>
        </>
    )   
}