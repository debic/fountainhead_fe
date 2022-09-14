import {
    Avatar, Box, Center, Heading, Stack, Text, useColorModeValue, Flex, Accordion, Button,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon, CircularProgress, CircularProgressLabel, Image, Spacer
} from '@chakra-ui/react'
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import UserContext from '../Context/UserContext';
import axios from 'axios';



export default function ProductCard({ project }) {
    const [currentProjectRaitingStudents, setCurrentProjectRaitingStudents] = useState({});
    const [currentProjectRaitingProfesional, setCurrentProjectRaitingProfesional] = useState({});
    const [currentUser, setCurrentUser] = useState({});
    const [currentProject, setCurrentProject] = useState({});

    let projectId = project.projectId

 

    async function readProject() {
        try {
            const project = await axios.get(`http://localhost:8080/api/project/one/${projectId}`, { withCredentials: true })
            setCurrentProject(project.data.data)
            takeUserId(project.data.data.userId)

        } catch (err) {
            console.log(err)
        }
    }


    async function takeUserId(currentUserId) {
        try {
            const userInfo = await axios.get(`http://localhost:8080/api/user/${currentUserId}`, { withCredentials: true })
            setCurrentUser(userInfo.data[0])
        } catch (err) {
            console.log(err)
        }
    }


    async function getRaitingFunction() {

        try {
            const project = await axios.get(`http://localhost:8080/api/project/vote/${projectId}`, { withCredentials: true })
            setCurrentProjectRaitingStudents(project.data.studentVotes)
            setCurrentProjectRaitingProfesional(project.data.clientVotes)
        } catch (err) {
            console.log(err)
        }
    }


    useEffect(() => {
        readProject()
        getRaitingFunction()
    }, [])


    return (
        <Center py={20}>
            <Box
                maxW={'700px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'md'}
                p={10}
                overflow={'hidden'}>

                <Box
                    h={'500px'}
                    bg={'gray.100'}
                    mt={-6}
                    mx={-6}
                    mb={6}
                    pos={'relative'}>


                    <iframe src={project?.iframe}
                        style={{ width: "100%", height: "100%" }}
                        title="damp-violet-0ybqks"
                        allow={"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"}
                        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts  view = 'preview'">
                    </iframe>

                </Box>
                <Box p={6}>
                    <Stack>
                        <Heading
                            color={useColorModeValue('gray.700', 'white')}
                            fontSize={'2xl'}
                            fontFamily={'body'}>
                            {project?.name}
                        </Heading>
                        <Text color={'gray.500'}>
                            {project?.info}

                        </Text>
                    </Stack>
                    <Stack mt={6} mb={3} direction={'row'} spacing={4} align={'center'}>
                        <Avatar
                            src={currentUser?.avatar}
                            alt={'Author'}
                        />
                        <Stack direction={'column'} spacing={0} fontSize={'sm'} textAlign={'left'}>
                            <Text fontWeight={600}>{currentUser?.name}</Text>
                            <Text color={'gray.500'}>{currentProject?.created_at}</Text>
                        </Stack>

                    </Stack>


                    <Accordion allowToggle mt={10}>

                        <AccordionItem py={10}>
                            <AccordionButton p={0} >
                                <Box flex='1' textAlign='left'>
                                    <Stack mt={6} mb={3} direction={'row'} spacing={4} align={'center'}>

                                        <Stack direction={'column'} spacing={0} fontSize={'sm'} textAlign={'left'}>
                                            <Text fontWeight={600}>Profesionals Rating</Text>
                                        </Stack>
                                    </Stack>
                                </Box>

                                <Spacer />
                                <Flex>
                                    <Center>
                                        <CircularProgress value={(currentProjectRaitingProfesional?.avgCreativity) * 10} color='#69DB33'>
                                            <CircularProgressLabel >{currentProjectRaitingProfesional?.avgCreativity}</CircularProgressLabel>
                                        </CircularProgress>
                                        <CircularProgress value={(currentProjectRaitingProfesional?.avgBestPractices) * 10} color='#FF9900'>
                                            <CircularProgressLabel >{currentProjectRaitingProfesional?.avgBestPractices}</CircularProgressLabel>
                                        </CircularProgress>
                                        <CircularProgress value={(currentProjectRaitingProfesional?.avgDesign) * 10} color='#24D0DB'>
                                            <CircularProgressLabel >{currentProjectRaitingProfesional?.avgDesign}</CircularProgressLabel>
                                        </CircularProgress>
                                        <CircularProgress value={(currentProjectRaitingProfesional?.avgBugs) * 10} color='#DF5EEA'>
                                            <CircularProgressLabel >{currentProjectRaitingProfesional?.avgBugs}</CircularProgressLabel>
                                        </CircularProgress>

                                    </Center>
                                </Flex>

                                <AccordionIcon />
                            </AccordionButton>

                            <AccordionPanel pb={4}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem py={10}>
                            <AccordionButton p={0} >
                                <Box flex='1' textAlign='left'>
                                    <Stack mt={6} mb={3} direction={'row'} spacing={4} align={'center'}>

                                        <Stack direction={'column'} spacing={0} fontSize={'sm'} textAlign={'left'}>
                                            <Text fontWeight={600}>Students Raiting</Text>
                                        </Stack>
                                    </Stack>
                                </Box>

                                <Spacer />
                                <Flex>
                                    <Center>
                                        <CircularProgress value={(currentProjectRaitingStudents?.avgCreativity) * 10} color='#69DB33'>
                                            <CircularProgressLabel >{currentProjectRaitingStudents?.avgCreativity}</CircularProgressLabel>
                                        </CircularProgress>
                                        <CircularProgress value={(currentProjectRaitingStudents?.avgBestPractices) * 10} color='#FF9900'>
                                            <CircularProgressLabel >{currentProjectRaitingStudents?.avgBestPractices}</CircularProgressLabel>
                                        </CircularProgress>
                                        <CircularProgress value={(currentProjectRaitingStudents?.avgDesign) * 10} color='#24D0DB'>
                                            <CircularProgressLabel >{currentProjectRaitingStudents?.avgDesign}</CircularProgressLabel>
                                        </CircularProgress>
                                        <CircularProgress value={(currentProjectRaitingStudents?.avgBugs) * 10} color='#DF5EEA'>
                                            <CircularProgressLabel >{currentProjectRaitingStudents?.avgBugs}</CircularProgressLabel>
                                        </CircularProgress>
                                    </Center>
                                </Flex>

                                <AccordionIcon />
                            </AccordionButton>

                            <AccordionPanel pb={4}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                            </AccordionPanel>
                        </AccordionItem>

                    </Accordion>
                </Box>
                <Button bg={'#F6F6F6'} variant={'outline'} >
                    <Center>
                        <Link
                            to={`/ProjectInfo/${project?.projectId}`}
                            project={project}>See comments and vote</Link>

                    </Center>
                </Button>

            </Box>
        </Center>
    )
}