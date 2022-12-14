import { Box, Button, FormControl, HStack, Input, InputGroup, InputRightElement, Select, Stack, Text, useBreakpointValue, useColorModeValue } from '@chakra-ui/react'
import React, { useState } from 'react'

export default function SearchForm({ searchProjects, searchByRating }) {

    const [formData, setFormData] = useState({ name: "" });

    function handleChange(e) {
        setFormData((previousState) => ({
            ...previousState,
            [e.target.id]: e.target.value,
        }));
    }

    return (
        <Stack maxW={'2xl'} align={'center'} spacing={6} w={'full'} sx={{ py: 6 }} >
            <Text
                color={'white'}
                fontWeight={700}
                lineHeight={1.2}
                pt={'10%'}
                fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
                Explore Projects
            </Text>
            <Stack direction={'row'} w={'full'} align={'center'}>
                <Box
                    w={'full'}
                    rounded={'lg'}
                >
                    <Stack spacing={4} align={'center'}>
                        <FormControl id="project">

                            <InputGroup size='md'>
                                <Input type="text" bg={useColorModeValue('white', 'white.700')} color={"#5458f6"} onChange={handleChange} id="name" />
                                <InputRightElement width='5rem'>
                                    <Button h='97%' size='md' onClick={(e) => searchProjects(formData)}>
                                        {'Search'}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>

                        </FormControl>

                        <HStack pb={'10%'}>
                            <Box>
                                <FormControl id="type" color={"white"}>
                                    <Select placeholder='Project type' onChange={handleChange} className='sel'>
                                        <option value={"FE"} >Front End</option>
                                        <option value={"BE"}>Back End</option>
                                        <option value={"FS"}>Full Stack</option>
                                    </Select>
                                </FormControl>
                            </Box>
                            <Box>
                                <FormControl id="filter-2" color={"white"}>
                                    <Select placeholder='Client ratings' variant='outline' onChange={(e) => { searchByRating(e.target.value, 'client') }} className='sel'>
                                        <option value='avgCreativity'>Most creative</option>
                                        <option value='avgBestPractices'>Best practices</option>
                                        <option value='avgDesign'>Best design</option>
                                        <option value='avgBugs'>Least bugs</option>
                                    </Select>
                                </FormControl>
                            </Box>
                            <Box>
                                <FormControl id="filter-3" color={"white"}>
                                    <Select placeholder='Students ratings' onChange={(e) => { searchByRating(e.target.value, 'student') }} className='sel'>
                                        <option value='avgCreativity'>Most creative</option>
                                        <option value='avgBestPractices'>Best practices</option>
                                        <option value='avgDesign'>Best design</option>
                                        <option value='avgBugs'>Least bugs</option>
                                    </Select>
                                </FormControl>
                            </Box>
                        </HStack>

                    </Stack>
                </Box>
            </Stack>
        </Stack>
    )
}