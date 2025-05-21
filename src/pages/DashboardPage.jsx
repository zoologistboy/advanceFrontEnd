import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const DashboardPage = () => {
    const navigate = useNavigate()

    const admin = ()=>{
        navigate("/admin")
    }
  return (
    <div>
        <p>DashboardPage</p>
        <button onClick={admin}>Admin</button>
    </div>
    
  )
}

export default DashboardPage