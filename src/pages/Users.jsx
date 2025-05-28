import React,{ useContext, useEffect} from 'react'
import { authContext } from '../contexts/AuthContext'


const Users = () => {
    const {fetchUsers, users}= useContext(authContext)
    useEffect(() => {
     fetchUsers()
    }, [])

    
    
  return (
    <div>
        {
            users.map((user)=>{
                return(
                    <div key={user._id}>
                        <p>{user.name}</p>
                        <p>{user._id}</p>
                        <p>{user.email}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Users