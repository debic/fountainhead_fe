import React, {useEffect, useState}from 'react'
import { Avatar, Box, Center, Heading, Stack, Text, useColorModeValue, Flex, Accordion,Button,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,CircularProgress,CircularProgressLabel,Image, Spacer } from '@chakra-ui/react'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Comments from '../Components/Comments';

export default function ProjectInfo() {

  const[currentProject, setCurrentProject] = useState([]);

  const location = useLocation();
  const splitLocation = (location.pathname).toString().split("/");
  const newLocation = splitLocation[2]
  console.log(newLocation)


  async function readProject(){
    try{
      const project = await axios.get(`http://localhost:8080/api/project//one/${newLocation}`)
      setCurrentProject(project.data.data)
    }catch(err){
      console.log(err)
    }
  }


  useEffect(() => {
    readProject()
  }, [])


  return (
    <Flex direction={'column'}>
    <Center py={20}>
   <Flex  maxW={'70vw'}> 
     <Stack w={'45%'} mr={'15'}>
            <Heading fontSize={'6xl'} as='samp' color={'white'} >My Project Name</Heading>
                <Text fontSize={'lg'} color={'white'}>
                {currentProject.info}
                </Text>
      </Stack>


      <Stack w={'55%'} ml={'15'}>
   
                <Center>
              
                    <Text color={'white'} fontSize={'xl'} mr={'10'} fontWeight={400}>Profesionals Raiting</Text>
                   <CircularProgress size='70px' value={40} color='#69DB33'>
                    <CircularProgressLabel color={'white'}>40%</CircularProgressLabel>
                    </CircularProgress>
                    <CircularProgress size='70px'  value={40} color='#FF9900'>
                    <CircularProgressLabel color={'white'}>40%</CircularProgressLabel>
                    </CircularProgress>
                    <CircularProgress size='70px'  value={40} color='#24D0DB'>
                    <CircularProgressLabel color={'white'}>40%</CircularProgressLabel>
                    </CircularProgress>
                    <CircularProgress size='70px'  value={40} color='#DF5EEA'>
                    <CircularProgressLabel color={'white'}>40%</CircularProgressLabel>
                    </CircularProgress>

                </Center>


              <Center pt={'10'}>
              
              <Text color={'white'} fontSize={'xl'} mr={'10'} fontWeight={400}>Student Raiting</Text>
             <CircularProgress size='70px'  value={40} color='#69DB33'>
              <CircularProgressLabel color={'white'}>40%</CircularProgressLabel>
              </CircularProgress>
              <CircularProgress size='70px'  value={40} color='#FF9900'>
              <CircularProgressLabel color={'white'}>40%</CircularProgressLabel>
              </CircularProgress>
              <CircularProgress size='70px'  value={40} color='#24D0DB'>
              <CircularProgressLabel color={'white'}>40%</CircularProgressLabel>
              </CircularProgress>
              <CircularProgress size='70px' value={40} color='#DF5EEA'>
              <CircularProgressLabel color={'white'}>40%</CircularProgressLabel>
              </CircularProgress> 
          </Center>    
      </Stack>
   </Flex>
</Center>
<Comments />  
</Flex>
  )
}
