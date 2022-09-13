import React from 'react';
import { useContext, createContext,useState } from 'react'
import {
   
    useDisclosure,

    
  } from '@chakra-ui/react';
import axios from 'axios';

export const UserContext = createContext(null);


export function useUserContext() {
    return useContext(UserContext);
}


export default function UserContextProvider({ children }) {
 
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [currentUser, setCurrentUser] = useState('');
    const validate = async () => {
        try {

            const res = await axios.get("http://localhost:8080/api/user/validate", { withCredentials: true });
            setCurrentUser(res.data[0]);
            localStorage.setItem("user", JSON.stringify(res.data[0]));
            console.log('dat', res.data[0]);

            return res.data;



        } catch (error) {
            console.log(error);
        }
    }


    const makePayment = async () => {
        try{
        const res = await axios.get("http://localhost:8080/api/user/donation", {withCredentials: true});
        const {url} = res.data
         window.location.href = url    
    
    }catch(err){
            console.log(err)
        }
    }
    
    const gooleAuth = async () => {
        try{
            window.location.href = "http://localhost:8080/api/user/google"
        // const res = await fetch("http://localhost:8080/api/user/google", {withCredentials: true,
        // headers:{
        //     'Access-Control-Allow-Origin': ["http://localhost:3000","http://accounts.google.com"],
        // }});
        // axios.get("http://localhost:8080/api/user/google", {withCredentials: true, 
        // headers: {
        //     'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET,POST,HEAD', //'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept', 'Access-Control-Max-Age': '86400'
        // }
    // });
        // const {url} = res.data
        //  window.location.href = url    
    
    }catch(err){
            console.log(err)
        }
    }
    
    const gitHubAuth = async () => {
        try{
    
    window.location.href = "http://localhost:8080/api/user/github"
        // const res = await axios.get("http://localhost:8080/api/user/github", {withCredentials: true, headers: {'Access-Control-Allow-Origin': ['http://localhost:3000'], 'Access-Control-Allow-Methods': 'GET,POST,HEAD', 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept', 'Access-Control-Max-Age': '86400'}});
        // const {url} = res.data
        //  window.location.href = url    
        // console.log(res.data)
    }catch(err){
            console.log(err)
        }
    }


    return (
        <div>
            <UserContext.Provider value={{ validate, setCurrentUser, currentUser, gitHubAuth, gooleAuth, makePayment, setCurrentUser, isOpen, onOpen, onClose }}>
                {children}
            </UserContext.Provider>
        </div>
    )

}
