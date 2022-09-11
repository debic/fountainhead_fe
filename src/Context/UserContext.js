import { ModalContextProvider } from '@chakra-ui/react'
import React from 'react'
import { useContext, createContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

 const context = createContext()

 export const useUserContext = () =>{
     return useContext(context)
 }

export default function UserContext({children}) {

    const navigate = useNavigate()

    const validate = async ()=>{
        try {
            const res = await axios.get("http://localhost:8080/api/user/validate", {withCredentials: true}  ) 
            if (!res.data.length) navigate("/")
        } catch (error) {
            
        }
    }
    useEffect (()=>{validate()
    },[])

  return (
    <div>
        <context.Provider value={{ validate, navigate}}>
        {children}
        </context.Provider>
    </div>
  )
}
