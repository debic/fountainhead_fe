import React from 'react'
//import Image from 'next/image';
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import 'charts.css';
export default function Card() {

        return (
            <Center py={6}>
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
    
                  <iframe src={"https://codesandbox.io/embed/damp-violet-0ybqks?fontsize=17&hidenavigation=0&theme=dark"}
                        style={{width:"100%", height:"100%"}}
                        title="damp-violet-0ybqks"
                        allow= {"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"}
                        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts  view = 'preview'">

                 </iframe>

                </Box>
                <Stack>
                     p={10}
                  <Heading
                    color={useColorModeValue('gray.700', 'white')}
                    fontSize={'2xl'}
                    fontFamily={'body'}>
                    Boost your conversion rate
                  </Heading>
                  <Text color={'gray.500'}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                    erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                    et ea rebum.
                  </Text>
                </Stack>
                <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
                  <Avatar
                    src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
                    alt={'Author'}
                  />
                  <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                    <Text fontWeight={600}>Achim Rolle</Text>
                    <Text color={'gray.500'}>Feb 08, 2021 · 6min read</Text>
                  </Stack>
                </Stack>
                <Accordion allowToggle mt={10}>
                <AccordionItem py={10}>
             
                    <AccordionButton p={0} >
                        <Box flex='1' textAlign='left'>
                        <Avatar
                    src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
                    alt={'Author'}
                  />
                  <table class="charts-css column">

  <caption> Front End Developer Salary </caption>

  <tbody>
    <tr>
      <td style={{size:"calc( 40 / 100 )%"}}> $40K </td>
    </tr>
    <tr>
      <td style={{size:"calc( 30 / 100 )%"}}> $60K </td>
    </tr>
    <tr>
      <td style={{"--size":"calc( 90 / 100 )%"}}> $75K </td>
    </tr>
    <tr>
      <td style={{size:"calc( 40 / 100 )%"}}> $90K </td>
    </tr>
    <tr>
      <td style={{size:"calc( 40 / 100 )%"}}> $100K </td>
    </tr>
  </tbody>

</table>
                        </Box>
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
              
            </Center>
          );
    
}
