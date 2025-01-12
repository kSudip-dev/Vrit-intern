import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

type userData={
    name:string,
}| null;

function Dashboard() {
    const navigate=useNavigate();
    const [user,setUser]=useState<userData>(null)
    const [userData,setUserData]=useState<userData>(null)
    useEffect(()=>{
      const data= localStorage.getItem('user'); 
      const userDetails= localStorage.getItem('userData'); 

        if(data){
            setUser(JSON.parse(data))
        }else{
            navigate("/login");
        }
        if(userDetails){
            setUserData(JSON.parse(userDetails))
        }
    },[])
  return (
    <div>
      <h1>Welcome {userData?.name}</h1>
<button onClick={()=>{localStorage.removeItem("user");navigate("/login")}}>Logout</button>
    </div>
  )
}

export default Dashboard
