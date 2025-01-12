import { useNavigate } from "react-router"

function LandingPage() {
    const navigate=useNavigate()
  return (
    <div>
      <h1>Learning React Hook Form & Zod</h1>
      <button onClick={()=>navigate("/dashboard")}>Dashboard</button>
    </div>
  )
}

export default LandingPage
