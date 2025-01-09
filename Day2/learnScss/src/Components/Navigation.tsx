import { useState } from "react"
import "../Styles/Navigation.scss"
import reactLogo from '../assets/react.svg'

interface NavigationProps {
    isActive: string;
    setActive:(item: string) => void;
  }
function Navigation({isActive,setActive}:NavigationProps) {
    

    const handleToggle=(item:string)=>{
        setActive(item)
    }
  return (

    <nav>
        <div className="logo">
            <img src={reactLogo} alt="logo"/>
        </div>
        <ul>
            <li className={isActive==="Cards" ? "active": ""} onClick={()=>handleToggle("Cards")}>Cards</li>
            <li className={isActive==="Form" ? "active": ""} onClick={()=>handleToggle("Form")}>Form</li>
        </ul>
    </nav>
  )
}

export default Navigation
