import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ScoresLevelsCard, PodioBtnsProfile, UsersList, PodioGraphic } from "../components";
import { FaChevronLeft } from 'react-icons/fa'

import './ProfilePage.css'
import { NavBar } from "../../ui/components";

export function ProfilePage() {
    const navigate = useNavigate()

    const [activeBtn, setActiveBtn] = useState('Vista general')

    const handleClick = (boton) => {
        setActiveBtn(boton)
    }

    return (
        <>
            <div className="header-deco"></div>
            <img id='background-img' src="/BG line 2.svg" alt="background-img" />
            <section className="header-profile">
                <FaChevronLeft onClick={() => navigate('/')}/>
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
                <ScoresLevelsCard onClick={() => navigate('/sencond-profile')}/>
                <img className='division-purple-icon' src="/divisionPurpleIcon.png" alt="division-purple-icon" />

                {activeBtn === 'Vista general' && (
                    <h1 className='division-title'>Plata<span>Llevas 8 días en esta división</span></h1>
                )}

                {activeBtn === 'Podio' && (
                    <h1 className='division-title'>Plata<span>Solo te faltan 2 EXP para estar en el podio</span></h1>
                )}

                <PodioBtnsProfile activeBtn={activeBtn} handleClick={handleClick} />

                {activeBtn === 'Vista general' && (
                    <section className="users-list-section">
                        <UsersList />
                    </section>
                )}
                {activeBtn === 'Podio' && (
                    <section className="podio-graphic-section">
                        <PodioGraphic />
                    </section>
                )}
            </section>
            <NavBar/>
        </>
    )   
}