import React, {useEffect, useState}from 'react'
import { Center, Heading, Stack, Text, Flex,Button,
 CircularProgress,CircularProgressLabel } from '@chakra-ui/react'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import VoteForm from '../Components/VoteForm';
import { useUserContext } from '../Context/UserContext';
import Comments from '../Components/Comments';



export default function ProjectInfo() {

  const[currentProject, setCurrentProject] = useState([]);
  const [currentProjectRaiting, setCurrentProjectRaiting] = useState({});
  const location = useLocation();
  const splitLocation = (location.pathname).toString().split("/");
  const projectId = splitLocation[2]
  

  const {  onOpen, makePayment } = useUserContext();

  async function readProject(){
    try{
      const project = await axios.get(`http://localhost:8080/api/project/one/${projectId}`)
      setCurrentProject(project.data.data)
    }catch(err){
      console.log(err)
    }
  }


  async function getRaitingFunction(){

    try{
      const project = await axios.get(`http://localhost:8080/api/project/vote/${projectId}`, {withCredentials:true})
      setCurrentProjectRaiting(project.data.clientVotes)
    }catch(err){
      console.log(err)
    }
  }


  useEffect(() => {
    readProject()
    getRaitingFunction()
  },[])


  return (
    <Flex direction={'column'}>
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
                <Button onClick={makePayment}>Support Student</Button>
      </Stack>


      <VoteForm/>
            

      <Stack w={'55%'} ml={'15'}>
   
                <Center>
              
                    <Text color={'white'} fontSize={'xl'} mr={'10'} fontWeight={400}>Students Raiting</Text>
                   <CircularProgress size='70px' value={(currentProjectRaiting.avgBestPractices)*10} color='#69DB33'>
                    <CircularProgressLabel color={'white'}>{currentProjectRaiting.avgBestPractices}</CircularProgressLabel>
                    </CircularProgress>
                    <CircularProgress size='70px'  value={(currentProjectRaiting.avgBugs)*10} color='#FF9900'>
                    <CircularProgressLabel color={'white'}>{currentProjectRaiting.avgBugs}</CircularProgressLabel>
                    </CircularProgress>
                    <CircularProgress size='70px'  value={(currentProjectRaiting.avgCreativity)*10} color='#24D0DB'>
                    <CircularProgressLabel color={'white'}>{currentProjectRaiting.avgCreativity}</CircularProgressLabel>
                    </CircularProgress>
                    <CircularProgress size='70px'  value={(currentProjectRaiting.avgDesign)*10} color='#DF5EEA'>
                    <CircularProgressLabel color={'white'}>{currentProjectRaiting.avgDesign}</CircularProgressLabel>
                    </CircularProgress>

                </Center>



                <Center pt={'10'}>
                    
                    <Text color={'white'} fontSize={'xl'} mr={'10'} fontWeight={400}>Profesional Raiting</Text>
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
<Comments/>  
</Flex>
  )
}
