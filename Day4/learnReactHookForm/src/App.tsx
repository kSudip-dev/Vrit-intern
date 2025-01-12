
import './App.css'
import { Route, Routes } from 'react-router'
import SignUpForm from './components/SignUpForm'
import LoginForm from './components/LoginForm'
import LandingPage from './components/LandingPage'
import Dashboard from './components/Dashboard'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path="/signup" element={<SignUpForm/>}/>
        <Route path="/login" element={<LoginForm/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>

    </>
  )
}

export default App
