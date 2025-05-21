import React from 'react'
import { useParams } from 'react-router-dom'

const VerifyEmail = () => {
    const {token} = useParams()
  return (
    <div>VerifyEmail</div>
  )
}

export default VerifyEmail