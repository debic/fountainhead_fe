import React, {useEffect, useState}from 'react'
import { Center, Heading, Stack, Text, Flex,Button,
 CircularProgress,CircularProgressLabel, Box } from '@chakra-ui/react'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import VoteForm from '../Components/VoteForm';
import { useUserContext } from '../Context/UserContext';
import Comments from '../Components/Comments';



export default function ProjectInfo() {


  const location = useLocation();
  const splitLocation = (location.pathname).toString().split("/");
  const projectId = splitLocation[2]
  const {  onOpen, makePayment,validate, getRaitingFunction, currentProject, setCurrentProject, currentProjectRaitingStudents, setCurrentProjectRaitingStudents, currentProjectRaitingProfesional, setCurrentProjectRaitingProfesional  } = useUserContext();
  const [voted, setVoted] = useState(false)

  const checkIfVoted = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/api/project/checkVote/${projectId}`, { withCredentials: true });
      console.log("voted", res.data)
      setVoted(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {validate()
    window.scrollTo(0, 0)
    checkIfVoted()
  },[])


  async function readProject(){
    try{
      const project = await axios.get(`http://localhost:8080/api/project/one/${projectId}`)
      setCurrentProject(project.data.data)
    }catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    readProject()
    getRaitingFunction()
  },[])


  return (
    <Flex direction={'column'} pb={'150'}>
    <Center py={'200'}>

    <Flex  maxW={'70vw'}> 

    
      <Stack w={'45%'} mr={'15'}>
               <Heading fontSize={'6xl'} as='samp' color={'white'} >{currentProject.name}</Heading>
                <Text fontSize={'lg'} color={'white'}>
                {currentProject.info}
                </Text>
                <Flex > 
                  <Button  onClick={onOpen} bg={'#F6F6F6'}  variant={'outline'} w='140px' mr='30' mt='30' className={voted?'d-none':'undefined'}>
                    <Center>
                       Vote       
                    </Center>
                </Button>
                <Button onClick={makePayment} w='180px' mt='30'>
                  Reward Student
                  </Button>
                 </Flex>
      </Stack>
      <VoteForm checkIfVoted={checkIfVoted}/>
          
      <Stack w={'55%'} ml={'15'}>
   
                <Center justifyContent='flex-end'>   
                    <Text color={'white'} fontSize={'xl'} mr={'10'} fontWeight={400}>Student Raiting</Text>
         

                    <CircularProgress w='90px'className='rating' size='70px'  value={(currentProjectRaitingStudents?.BestPractices)*10} color='#FF9900'>
                    <CircularProgressLabel className='rating_number' color={'white'}>{currentProjectRaitingStudents?.BestPractices}</CircularProgressLabel>
                    <Text fontSize={'0.8rem'} color='#D1D1D1'>Best Practices</Text>
                    </CircularProgress>

                    <CircularProgress w='90px' className='rating' size='70px'  value={(currentProjectRaitingStudents?.Design)*10} color='#24D0DB'>
                    <CircularProgressLabel className='rating_number' color={'white'}>{currentProjectRaitingStudents?.Design}</CircularProgressLabel>
                    <Text fontSize={'0.8rem'} color='#D1D1D1'>Design</Text>
                    </CircularProgress>

                    <CircularProgress w='90px' className='rating' size='70px'  value={(currentProjectRaitingStudents?.Bugs)*10} color='#DF5EEA'>
                    <CircularProgressLabel className='rating_number' color={'white'}>{currentProjectRaitingStudents?.Bugs}</CircularProgressLabel>
                    <Text fontSize={'0.8rem'} color='#D1D1D1'>Bugs</Text>
                    </CircularProgress>

                    <CircularProgress w='90px' className='rating' size='70px' value={(currentProjectRaitingStudents?.Creativity)*10} color='#69DB33'>
                    <CircularProgressLabel className='rating_number' color={'white'}>{currentProjectRaitingStudents?.Creativity}</CircularProgressLabel>
                    <Text fontSize={'0.8rem'} color='#D1D1D1'>Creativity</Text>
                    </CircularProgress>
                </Center>



                <Center pt={'10'} justifyContent='flex-end'>
                    <Text color={'white'} fontSize={'xl'} mr={'10'} fontWeight={400}>Profesional Raiting</Text>
      
                    <CircularProgress w='90px' className='rating' size='70px'  value={(currentProjectRaitingProfesional?.BestPractices)*10} color='#FF9900'>
                    <CircularProgressLabel className='rating_number' color={'white'}>{currentProjectRaitingProfesional?.BestPractices}</CircularProgressLabel>
                    <Text fontSize={'0.8rem'} color='#D1D1D1'>Best Practices</Text>
                    </CircularProgress>
                    <CircularProgress w='90px' className='rating' size='70px'  value={(currentProjectRaitingProfesional?.Design)*10} color='#24D0DB'>
                    <CircularProgressLabel className='rating_number' color={'white'}>{currentProjectRaitingProfesional?.Design}</CircularProgressLabel>
                    <Text fontSize={'0.8rem'} color='#D1D1D1'>Design</Text>
                    </CircularProgress>
                    <CircularProgress w='90px' className='rating' size='70px' value={(currentProjectRaitingProfesional?.Bugs)*10} color='#DF5EEA'>
                    <CircularProgressLabel className='rating_number' color={'white'}>{currentProjectRaitingProfesional?.Bugs}</CircularProgressLabel>
                    <Text fontSize={'0.8rem'} color='#D1D1D1'>Bugs</Text>
                    </CircularProgress>
                    <CircularProgress w='90px' className='rating' size='70px'  value={(currentProjectRaitingProfesional?.Creativity)*10} color='#69DB33'>
                    <CircularProgressLabel className='rating_number' color={'white'}>{currentProjectRaitingProfesional.Creativity}</CircularProgressLabel>
                    <Text fontSize={'0.8rem'} color='#D1D1D1'>Creativity</Text>
                    </CircularProgress>
                </Center>
      </Stack>
   </Flex>
</Center>


      <Flex 
      justifyContent='center'
      mb={'150'}
      >
        
        <iframe src={currentProject?.iframe}
              style={{width:"70%", height:"80vh"}}
              title="damp-violet-0ybqks"
              allow= {"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"}
              sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts  view = 'preview'">

       </iframe>
       </Flex>

<Comments/>  
</Flex>
  )
}
