import { createContext } from "react";
import { useState } from "react";

//const authContext = createContext()
// const {arguments} = useContext()
export const authContext = createContext()

const AuthProvider = ({children})=>{
        // const user ={
        //     name: "Zoologistboi company and co."
        // }


        
        const [users, setUsers] = useState([])

            const fetchUsers = async()=>{
                try {
                   const res = await fetch("https://fakestoreapi.com/users")
                   const data = await res.json()
                   console.log(data);
                   
                   setUsers(data)

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

