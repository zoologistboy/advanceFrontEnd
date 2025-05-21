import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const ProtectedRoute = () => {
    // const[auth, setAuth] = useState(true)
    const navigate = useNavigate()
    const auth = localStorage.getItem('Access Token');


    useEffect(()=>{
        if(!auth){
            navigate("/signin")
        }
    }, [navigate])

  return (
    
        auth?<Outlet/>:null
    
    
  )
}

export default ProtectedRoute