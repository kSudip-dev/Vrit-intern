import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './Components/Navigation'
import Card from './Components/Card'
import Form from './Components/Form'

function App() {
  const [activeItem,setActiveItem]=useState<string>("Cards");
  return (
    <>
      <Navigation isActive={activeItem} setActive={setActiveItem}/>

      {activeItem === "Cards" && <Card />}
      {activeItem === "Form" && <Form />}
    </>
  )
}

export default App
