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
                    <div key={user.id}>
                        <p>{user.name.firstname}</p>
                        <p>{user.phone}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Users