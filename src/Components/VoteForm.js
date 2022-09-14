import React from 'react'
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useUserContext } from '../Context/UserContext';

import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Tooltip,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  
} from '@chakra-ui/react';

  export default function VoteForm() {
    const { isOpen, onClose, getRaitingFunction, currentProject, setCurrentProject, currentProjectRaitingStudents, setCurrentProjectRaitingStudents, currentProjectRaitingProfesional, setCurrentProjectRaitingProfesional  } = useUserContext();



  const [creativity, setCreativity] = React.useState(5)
  const [showTooltip1, setShowTooltip1] = React.useState(false)

  const [bestPractices, setBestPractices] = React.useState(5)
  const [showTooltip2, setShowTooltip2] = React.useState(false)

  const [design, setDesign] = React.useState(5)
  const [showTooltip3, setShowTooltip3] = React.useState(false)

  const [bugs, setBugs] = React.useState(5)
  const [showTooltip4, setShowTooltip4] = React.useState(false)


  const location = useLocation();
  const splitLocation = (location.pathname).toString().split("/");
  const projectId = splitLocation[2]


      async function voteFunction(){
        onClose()
        const newVote = {
          creativity: creativity,
          bestPractices: bestPractices,
          design: design,
          bugs: bugs,
        }
        try{
          const project = await axios.post(`http://localhost:8080/api/project/vote/${projectId}`, newVote, {withCredentials:true})
          getRaitingFunction()
        }catch(err){
          console.log(err)
        }
      }



    return (
      <>

<Modal onClose={onClose} isOpen={isOpen} isCentered >
              <ModalOverlay />
              <ModalContent p='10'>
                <ModalHeader>Make your vote</ModalHeader>
                <ModalCloseButton />
                <ModalBody>

      <Text fontSize={'lg'} color={'grey'}>creativity</Text>

      <Slider
      id='slider1'
      defaultValue={5}
      min={0}
      max={10}
      colorScheme='green'
      onChange={(v) => setCreativity(v)}
      onMouseEnter={() => setShowTooltip1(true)}
      onMouseLeave={() => setShowTooltip1(false)}
      mb='10'
    >
      <SliderMark value={0} mt='1' ml='-2.5' fontSize='sm'>
        0
      </SliderMark>

      <SliderMark value={10} mt='1' ml='-2.5' fontSize='sm'>
        10
      </SliderMark>
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <Tooltip
        hasArrow
        bg='teal.500'
        color='white'
        placement='top'
        isOpen={showTooltip1}
        label={`${creativity}`}
      >
        <SliderThumb />
      </Tooltip>
    </Slider>


    <Text fontSize={'lg'} color={'grey'}>BestPractices</Text>
    <Slider
      id='slider2'
      defaultValue={5}
      min={0}
      max={10}
      colorScheme='green'
      onChange={(v) => setBestPractices(v)}
      onMouseEnter={() => setShowTooltip2(true)}
      onMouseLeave={() => setShowTooltip2(false)}
      mb='10'

    >
      <SliderMark value={0} mt='1' ml='-2.5' fontSize='sm'>
        0
      </SliderMark>

      <SliderMark value={10} mt='1' ml='-2.5' fontSize='sm'>
        10
      </SliderMark>
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <Tooltip
        hasArrow
        bg='teal.500'
        color='white'
        placement='top'
        isOpen={showTooltip2}
        label={`${bestPractices}`}
      >
        <SliderThumb />
      </Tooltip>
    </Slider>



    <Text fontSize={'lg'} color={'grey'}>Design</Text>

    <Slider
      id='slider3'
      defaultValue={5}
      min={0}
      max={10}
      colorScheme='green'
      onChange={(v) => setDesign(v)}
      onMouseEnter={() => setShowTooltip3(true)}
      onMouseLeave={() => setShowTooltip3(false)}
      mb='10'
    >
      <SliderMark value={0} mt='1' ml='-2.5' fontSize='sm'>
        0
      </SliderMark>

      <SliderMark value={10} mt='1' ml='-2.5' fontSize='sm'>
        10
      </SliderMark>
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <Tooltip
        hasArrow
        bg='teal.500'
        color='white'
        placement='top'
        isOpen={showTooltip3}
        label={`${design}`}
      >
        <SliderThumb />
      </Tooltip>
    </Slider>



    <Text fontSize={'lg'} color={'grey'}>Bugs</Text>

    <Slider
      id='slider4'
      defaultValue={5}
      min={0}
      max={10}
      colorScheme='green'
      onChange={(v) => setBugs(v)}
      onMouseEnter={() => setShowTooltip4(true)}
      onMouseLeave={() => setShowTooltip4(false)}
      mb='10'
    >
      <SliderMark value={0} mt='1' ml='-2.5' fontSize='sm'>
        0
      </SliderMark>

      <SliderMark value={10} mt='1' ml='-2.5' fontSize='sm'>
        10
      </SliderMark>
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <Tooltip
        hasArrow
        bg='teal.500'
        color='white'
        placement='top'
        isOpen={showTooltip4}
        label={`${bugs}`}
      >
        <SliderThumb />
      </Tooltip>
    </Slider>


                </ModalBody>
                <ModalFooter>
                  <Button onClick={onClose} >Close</Button>
                  <Button onClick={voteFunction}>Vote</Button>

                </ModalFooter>
              </ModalContent>
            </Modal>

    </>

  )
    
  }