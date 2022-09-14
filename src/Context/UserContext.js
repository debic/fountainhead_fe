import React from 'react';
import { useContext, createContext,useState } from 'react'
import {
   
    useDisclosure,

    
  } from '@chakra-ui/react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

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
 
    
    }catch(err){
            console.log(err)
        }
    }
    
    const gitHubAuth = async () => {
        try{
    
    window.location.href = "http://localhost:8080/api/user/github"

    }catch(err){
            console.log(err)
        }
    }

    const location = useLocation();
    const splitLocation = (location.pathname).toString().split("/");
    const projectId = splitLocation[2]
    const[currentProject, setCurrentProject] = useState([]);
    const [currentProjectRaitingStudents, setCurrentProjectRaitingStudents] = useState({});
    const [currentProjectRaitingProfesional, setCurrentProjectRaitingProfesional] = useState({});

    async function getRaitingFunction(){

        try{
          const project = await axios.get(`http://localhost:8080/api/project/vote/${projectId}`, {withCredentials:true})
          console.log(project)
          setCurrentProjectRaitingStudents(project.data.studentVotes)
          setCurrentProjectRaitingProfesional(project.data.clientVotes)
        }catch(err){
          console.log(err)
        }
      }


    return (
        <div>
            <UserContext.Provider value={{ validate, setCurrentUser, currentUser, gitHubAuth, gooleAuth, makePayment, setCurrentUser, isOpen, onOpen, onClose, getRaitingFunction, currentProject, setCurrentProject, currentProjectRaitingStudents, setCurrentProjectRaitingStudents, currentProjectRaitingProfesional, setCurrentProjectRaitingProfesional }}>
                {children}
            </UserContext.Provider>
        </div>
    )

}
