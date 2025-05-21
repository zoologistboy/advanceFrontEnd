import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

const ProtectAdminOnly = () => {
    const[isAdmin, setIsAdmin] = useState(false)
    const navigate = useNavigate()

    useEffect(()=>{
        if (!isAdmin) {
            toast.warning("you must an admin to access this page")
            navigate("/signin")
        }
    },[isAdmin, navigate])
  return (
    isAdmin? <Outlet/> : null
  )
}

export default ProtectAdminOnly