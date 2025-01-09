import { useState } from "react"
import "../Styles/Navigation.scss"
import reactLogo from '../assets/react.svg'
function Navigation() {
    const [activeItem,setActiveItem]=useState<string>("Cards");

    const handleToggle=(item:string)=>{
        setActiveItem(item)
    }
  return (

    <nav>
        <div className="logo">
            <img src={reactLogo} alt="logo"/>
        </div>
        <ul>
            <li className={activeItem==="Cards" ? "active": ""} onClick={()=>handleToggle("Cards")}>Cards</li>
            <li className={activeItem==="Form" ? "active": ""} onClick={()=>handleToggle("Form")}>Form</li>
        </ul>
    </nav>
  )
}

export default Navigation
