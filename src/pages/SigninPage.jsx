import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SigninPage = () => {
  const navigate = useNavigate()
  const [formData, setFormData]= useState({})
  const handleInput =(e)=>{
      const {name, value} = e.target
      setFormData(prev=>({...prev, [name]:value}))

  }
  console.log(formData);
  
  const handleSubmit=async(e)=>{
       e.preventDefault()
       try {
        const res = await fetch("https://dummyjson.com/auth/login", {
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify(formData)
        })

        const data = await res.json()

        navigate("/dashboard")
        // console.log(data);
        

       } catch (error) {
        console.log(error);
        
       }
  }
  return (
    <div>
      <h1>Sign in page</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="text" name='username' placeholder='enter email address' onChange={handleInput} />
        <label htmlFor="password" >Password</label>
        <input type="password" name='password' placeholder='enter your password' onChange={handleInput}/>
        <button>submit</button>
      </form>
    </div>
  )
}

export default SigninPage

























































// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'sonner';

// const SigninPage = () => {
//   const navigate = useNavigate();
//   const siginForm = async(e)=>{
//         e.preventDefault();
//         const form = document.getElementById("form");
//         try {

//           const res = await fetch("https://dummyjson.com/auth/login",{
//             method:"POST", 
//             headers:{
//               "Content-Type":"application/json",
              
//             },
//             body: JSON.stringify({
//               username : form.userName.value.trim(),
//               password : form.password.value.trim()
//             })
            
//           })
          
//           const data = await res.json();
//           console.log(data);
          
//           !data.username && !data.password ? toast.warning("invalid details"): toast.success("logged in successfully", navigate("/dashboard"))

//           const{accessToken}= data

//           localStorage.setItem("Access Token", accessToken)
          
//         } catch (error) {
//           console.log(error);
          
//         }
        


//        }
       


//   return (
//     <section className="flex flex-col md:flex-row h-screen items-center">
      
//       <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
//         <img
//           src="#"
//           alt="Random Unsplash"
//           className="w-full h-full object-cover"
//         />
//       </div>

//       <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
//         <div className="w-full h-100">
//           <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
//             Log in to your account
//           </h1>

//           <form className="mt-6" action="#" method="POST" id='form' onSubmit={siginForm}>
//             <div>
//               <label className="block text-gray-700">Username</label>
//               <input
//                 name='userName'
//                 type="text"
//                 placeholder="Enter Email Address"
//                 className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
//                 required
//               />
//             </div>

//             <div className="mt-4">
//               <label className="block text-gray-700">Password</label>
//               <input
//                 name='password'
//                 type="password"
//                 placeholder="Enter Password"
//                 minLength="6"
//                 className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
//                 required
//               />
//             </div>

//             <div className="text-right mt-2">
//               <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">
//                 Forgot Password?
//               </a>
//             </div>

//             <button
//               type="submit"
//               className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-6"
//             >
//               Log In
//             </button>
//           </form>

//           <button
//             type="button"
//             className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300 mt-4"
//           >
//             <div className="flex items-center justify-center">
//               <svg className="w-6 h-6" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
//                 {/* ...SVG content... */}
//               </svg>
//               <span className="ml-4">Log in with Google</span>
//             </div>
//           </button>

//           <p className="mt-8">
//             Need an account?{' '}
//             <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold">
//               Create an account
//             </a>
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SigninPage;
