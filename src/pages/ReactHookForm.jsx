import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"

const SignupFormSchema = yup.object({
    email: yup.string().email("Enter a valid email").required("Email is required"),
    name: yup.string().required("Name is Required").min(3, "Nmae must be at least 3 charactter").max(20, "Name cannot be more 20 characters"),
    password: yup.string().required("Password is required").min(6, "Password must be at least 6 characters")
})


const SignUp = ()=>{
    const {register, handleSubmit, formState:{errors}}= useForm({
        resolver: yupResolver(SignupFormSchema)
    })
    const [sigingnUp, setSigningUp]= useState(false)


    const submitForm = async(data)=>{
        console.log(data);
        
    }
//   formData



  return (
   <div>
    <form onSubmit={handleSubmit(submitForm)}>
        <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="" {...register("email")} />
            <p style={{color:"red"}}>{errors.email && errors.email.message}</p>
        </div>
        <div>
            <button type='submit' color='red'>submit</button>
        </div>

    </form>
   </div>
  )
}


export default SignUp