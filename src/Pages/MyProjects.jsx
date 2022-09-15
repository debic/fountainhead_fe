import {
    Box,
    chakra,
    Icon,
    SimpleGrid,
    Stack,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';
import ProductCard from '../Components/ProductCard';




export default function MyProjects() {

    const [currentProjects, setCurrentProjects] = useState('')
    console.log(currentProjects)

    const handleDeleteProject = (event) => {
        alert('Are You Sure You Want To Delete The Project?')
        const projectId = event.currentTarget.id
        axios({
            method: 'DELETE',
            url: 'http://localhost:8080/api/project/',
            withCredentials: true,
            data: { projectId }
        })
            .then(data => {
                getCurrentProjects()
                toast.info('Project Successfully Deleted')
            })
            .catch(err => toast.error('Could Not Delete Project Please Try Again Later'))
    }

    const getCurrentProjects = () => {
        axios({
            method: 'GET',
            url: 'http://localhost:8080/api/project/userProjects',
            withCredentials: true
        })
            .then(res => {
                setCurrentProjects(res.data.data)
                
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getCurrentProjects()
    }, [])

    return (
        <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>

               
            {currentProjects ?
<>
            {currentProjects?.map((project) => (
                <>
            <CloseIcon id={project.projectId} onClick={handleDeleteProject}  ml='5px' _hover={{ 'color': 'red.600' }} cursor={'pointer'} mb='20px'/>

            <ProductCard key={project.projectId} project={project} />
            </>
           
        ))}
</>
            :
            <></>}
                    
                        
                  

            


            <ToastContainer />
        </Box>
    );
}