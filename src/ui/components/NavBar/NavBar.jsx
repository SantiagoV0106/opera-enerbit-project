
import { NavLink, useLocation } from 'react-router-dom'
import { navOptions } from '../../const/navbarInfo';
import { FaBars } from "react-icons/fa6";
import { HiOutlinePresentationChartLine } from "react-icons/hi";
import { BiHomeAlt2 } from "react-icons/bi";
import { LuUser2 } from "react-icons/lu";
import './navbar.css'

export function NavBar() {

  
  const location = useLocation()

  const icons = (title) => {

    switch (title) {
      case 'Orden del día':
        return <FaBars />
      case 'Capacitaciones':
        return <HiOutlinePresentationChartLine />
      case 'Inicio':
        return <BiHomeAlt2 />
      case 'User':
        return <LuUser2 />
        
      default:
        return null
    }
  }


  return (
    <div className="nav-container">      {
        navOptions.map(({ id, title, path }) => {
        
        const isActive = location.pathname === path
          const iconClassname = isActive? 'active-icon' : 'icon' 
          const textClassname = isActive? 'active-text' : 'text' 

          return (
            
            <ul key={id}>
              <li >
                <NavLink className='links' to={path}>
                  <span className={iconClassname}> {title && icons(title)} </span>
                  <span className={textClassname}> {title}</span>
                </NavLink>
              </li>
            </ul>
          )
          
        })
      }
    </div>
  )
}