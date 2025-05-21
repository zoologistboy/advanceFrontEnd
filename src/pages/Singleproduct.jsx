import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Singleproduct = () => {
    const {id} = useParams()
    console.log(id);
    
    const[singleProduct, setSingleProduct] = useState([])
    // const[isLoading, setIsLoading] = useState(false)
    // const[error, setError]= useState(null)

    const fetchSingleProduct = async () =>{


      const  res = await fetch(`https://fakestoreapi.com/products/${id}`)

      console.log(res);
      
        const oneData = await res.json()
        setSingleProduct(oneData)
         console.log(oneData);
         
        console.log(id);
        
    }

    useEffect(()=>{
        if(id){
            fetchSingleProduct()
        }
    },[id])

  return (
    <div>
        <div>
            <img src={singleProduct.image} alt="" width={500}/>
            <h1>{singleProduct.title}</h1>
        </div>
    </div>
  )
}

export default Singleproduct