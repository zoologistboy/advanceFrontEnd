import React from 'react'

const Provider = ({children}) => {
  return (
    <div>
        <h1>provider</h1>
        {children}
        <h1>provider end</h1>

    </div>
  )
}

export default Provider 