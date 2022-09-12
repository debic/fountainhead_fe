import React from 'react'
import { Avatar, Box, Center, Heading, Stack, Text, useColorModeValue, Flex, Accordion,Button,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,CircularProgress,CircularProgressLabel,Image, Spacer } from '@chakra-ui/react'


export default function ProjectInfo() {
  return (
    <Center py={20}>
   <Flex  maxW={'70vw'}> 

    
     <Stack w={'45%'} mr={'15'}>
            <Heading fontSize={'6xl'} as='samp' color={'white'} >Project Name</Heading>
                <Text fontSize={'lg'} color={'white'}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
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
  )
}
