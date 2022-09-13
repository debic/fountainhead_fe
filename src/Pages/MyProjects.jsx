import {
    Box,
    chakra,
    Icon,
    SimpleGrid,
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




function StatsCard(props) {
    const { title, stat } = props;
    return (
        <Stat
            px={{ base: 4, md: 8 }}
            py={'7'}
            shadow={'xl'}
            border={'1px solid'}
            borderColor={useColorModeValue('gray.800', 'gray.500')}
            rounded={'lg'}>
            <StatLabel fontWeight={'medium'} isTruncated>
                {title}
            </StatLabel>
            <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
                {stat}
            </StatNumber>
        </Stat>
    );
}

export default function MyProjects() {

    const [currentProjects, setCurrentProjects] = useState('')

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
                console.log(currentProjects)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getCurrentProjects()
    }, [])

    return (
        <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
                {currentProjects.length > 0 && currentProjects.map(project => {

                    return <div key={project.created_at}>
                        <StatsCard title={'Project'} stat={project.name} />
                        <CloseIcon id={project.projectId} onClick={handleDeleteProject} position={'relative'} bottom={'110px'} ml='5px' _hover={{ 'color': 'red.600' }} cursor={'pointer'} />
                    </div>

                })}

            </SimpleGrid>

            <ToastContainer />
        </Box>
    );
}