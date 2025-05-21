import { useState } from "react";
const Counter =()=> {
    const [number, setNumber] = useState(0); //initial state: 0
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const changeNumber =()=>{
        setNumber((prev)=>(prev + 1))
    }
    const decreaseNumber =()=>{
        setNumber((prev)=>( prev !==0 ? prev - 1 : prev))
    }

    const login =()=>{
        setIsLoggedIn((prev)=>(true))
    }
    const logout =()=>{
        setIsLoggedIn((prev)=>(false))
    }
    

   
    return( 
       <div>
         <p>Count: {number}</p>
         <button onClick={changeNumber}>Increment</button>
         <button onClick={decreaseNumber}>decrement</button>


            <div>
                {
                    isLoggedIn ? (
                        <div>
                            <p>welcome</p>
                            <button style={styles.logout} onClick={logout}>logout</button>
                        </div>
                    ):
                    (
                        <div>
                            <p>pls log in</p>
                            <button style={styles.login} onClick={login}>login</button>
                        </div>
                    )
                }
            </div>


       </div>

      
    )
};

const styles={
   logout:{
    backgroundColor:'red',
    padding:'50px 100px'

   },
   login:{
    backgroundColor:'blue'
   }
}
export default Counter