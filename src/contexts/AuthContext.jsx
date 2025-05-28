import { createContext } from "react";
import { useState } from "react";

//const authContext = createContext()
// const {arguments} = useContext()
export const authContext = createContext()

const AuthProvider = ({children})=>{
        
        const [users, setUsers] = useState([])
        //const []
        

            const fetchUsers = async()=>{
                try {
                   const res = await fetch("http://localhost:4003/api/users")
                   const data = await res.json()
                   console.log(data);
                   
                   setUsers(data.user)

                } catch (error) {
                    console.log(error);
                    
                }
            }
        

        


        

        const value ={
            users,
            fetchUsers
            
        }



   return(
    <authContext.Provider value={value}>
        {children}

        <hr />
        <p>contact us</p>
    </authContext.Provider>

   
   )


}

export default AuthProvider

