import React, {useEffect, useState}from 'react'
import { Center, Heading, Stack, Text, Flex,Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
 CircularProgress,CircularProgressLabel, useDisclosure } from '@chakra-ui/react'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import VoteForm from '../Components/VoteForm';
import { useUserContext } from '../Context/UserContext';


export default function ProjectInfo() {

  const[currentProject, setCurrentProject] = useState([]);

  const location = useLocation();
  const splitLocation = (location.pathname).toString().split("/");
  const newLocation = splitLocation[2]
  console.log(newLocation)

  const { isOpen, onOpen, onClose } = useUserContext();

  async function readProject(){
    try{
      const project = await axios.get(`http://localhost:8080/api/project/one/${newLocation}`)
      setCurrentProject(project.data.data)
    }catch(err){
      console.log(err)
    }
  }


  useEffect(() => {
    readProject()
  }, [])


  return (
    <Center py={20}>
    <Flex  maxW={'70vw'}> 

    
      <Stack w={'45%'} mr={'15'}>
               <Heading fontSize={'6xl'} as='samp' color={'white'} >{currentProject.name}</Heading>
                <Text fontSize={'lg'} color={'white'}>
                {currentProject.info}
                </Text>
                  <Button  onClick={onOpen} bg={'#F6F6F6'}  variant={'outline'} w='70px'>
                    <Center>
                       Vote       
                    </Center>
                </Button>
      </Stack>


      <VoteForm/>
            

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
  )
}
