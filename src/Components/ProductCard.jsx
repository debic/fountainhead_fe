import { Avatar, Box, Center, Heading, Stack, Text, useColorModeValue, Flex, Accordion,Button,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,CircularProgress,CircularProgressLabel,Image, Spacer } from '@chakra-ui/react'
import * as React from 'react'

export const ProductCard = (props) => {
    const { product, rootProps, rating } = props
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
    

                <iframe src={"https://codesandbox.io/embed/damp-violet-0ybqks?fontsize=17&hidenavigation=0&theme=dark"}
                        style={{width:"100%", height:"100%"}}
                        title="damp-violet-0ybqks"
                        allow= {"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"}
                        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts  view = 'preview'">

                 </iframe>

                 </Box>
                <Box p={6}>
                    <Stack>
                        <Heading
                            color={useColorModeValue('gray.700', 'white')}
                            fontSize={'2xl'}
                            fontFamily={'body'}>
                            Project Title
                        </Heading>
                        <Text color={'gray.500'}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                            et ea rebum.
                        </Text>
                    </Stack>
                    <Stack mt={6} mb={3} direction={'row'} spacing={4} align={'center'}>
                        <Avatar
                            src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
                            alt={'Author'}
                        />
                        <Stack direction={'column'} spacing={0} fontSize={'sm'} textAlign={'left'}>
                            <Text fontWeight={600}>Achim Rolle</Text>
                            <Text color={'gray.500'}>Sep 08, 2022</Text>
                        </Stack>

                    </Stack>


                    <Accordion allowToggle mt={10}>

                <AccordionItem py={10}> 
                    <AccordionButton p={0} >
                            <Box flex='1' textAlign='left'>
                            <Stack mt={6} mb={3} direction={'row'} spacing={4} align={'center'}>
                                    <Avatar
                                    src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
                                    alt={'Author'}/>
                                    <Stack direction={'column'} spacing={0} fontSize={'sm'} textAlign={'left'}>
                                        <Text fontWeight={600}>Achim Rolle</Text>
                            </Stack>
                            </Stack>
                            </Box>

                            <Spacer />
                            <Flex> 
                            <Center>
                            <CircularProgress value={40} color='#69DB33'>
                            <CircularProgressLabel>40%</CircularProgressLabel>
                            </CircularProgress>
                            <CircularProgress value={40} color='#FF9900'>
                            <CircularProgressLabel>40%</CircularProgressLabel>
                            </CircularProgress>
                            <CircularProgress value={40} color='#24D0DB'>
                            <CircularProgressLabel>40%</CircularProgressLabel>
                            </CircularProgress>
                            <CircularProgress value={40} color='#DF5EEA'>
                            <CircularProgressLabel>40%</CircularProgressLabel>
                            </CircularProgress>
                            <CircularProgress value={40} color='#2D30C3'>
                            <CircularProgressLabel>40%</CircularProgressLabel>
                            </CircularProgress>
                        
                            <Image
                                mx='5'
                                borderRadius='full'
                                boxSize='45px'
                                src='https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png'
                                alt=''
                                />
                          
                          <Text fontWeight={200}>Points</Text>
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
                                    <Avatar
                                    src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
                                    alt={'Author'}/>
                                    <Stack direction={'column'} spacing={0} fontSize={'sm'} textAlign={'left'}>
                                        <Text fontWeight={600}>Achim Rolle</Text>
                            </Stack>
                            </Stack>
                            </Box>

                            <Spacer />
                            <Flex> 
                            <Center>
                            <CircularProgress value={40} color='#69DB33'>
                            <CircularProgressLabel>40%</CircularProgressLabel>
                            </CircularProgress>
                            <CircularProgress value={40} color='#FF9900'>
                            <CircularProgressLabel>40%</CircularProgressLabel>
                            </CircularProgress>
                            <CircularProgress value={40} color='#24D0DB'>
                            <CircularProgressLabel>40%</CircularProgressLabel>
                            </CircularProgress>
                            <CircularProgress value={40} color='#DF5EEA'>
                            <CircularProgressLabel>40%</CircularProgressLabel>
                            </CircularProgress>
                            <CircularProgress value={40} color='#2D30C3'>
                            <CircularProgressLabel>40%</CircularProgressLabel>
                            </CircularProgress>
                        
                            <Image
                                mx='5'
                                borderRadius='full'
                                boxSize='45px'
                                src='https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png'
                                alt=''
                                />
                          
                          <Text fontWeight={200}>Points</Text>
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
                <Button  bg={'#F6F6F6'}  variant={'outline'} >
                    <Center>
                        <Text>See more comments</Text>
                    </Center>
                </Button>
                <Button  bg={'#F6F6F6'}  ml={'5%'} variant={'outline'} >
                    <Center>
                        <Text>Make a comment</Text>
                    </Center>
                </Button>
            </Box>
        </Center>
    )
}
