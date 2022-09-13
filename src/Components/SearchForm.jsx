import { Box, Button, FormControl, HStack, Input, InputGroup, InputRightElement, Select, Stack, Text, useBreakpointValue, useColorModeValue } from '@chakra-ui/react'
import axios from 'axios';
import React, { useState } from 'react'

export default function SearchForm({ searchProjects, searchByRating }) {

    const [formData, setFormData] = useState({ name: "", type: "" });

    function handleChange(e) {
        setFormData((previousState) => ({
            ...previousState,
            [e.target.id]: e.target.value,
        }));
    }

    //  Search By Name
    const searchProjectsByName = () => {
        axios({
            method: 'GET',
            url: 'http://localhost:8080/api/project',
            data: {
                type: formData.name
            }
        })
    }

    //  Search By Name
    const searchProjectsByType = () => {
        axios({
            method: 'GET',
            url: 'http://localhost:8080/api/project',
            data: {
                type: formData.type
            }
        })
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
            <Stack direction={'row'} w={'full'}>
                <Box
                    w={'full'}
                    rounded={'lg'}
                >
                    <Stack spacing={4}>
                        <FormControl id="project">

                            <InputGroup size='md'>
                                <Input type="text" bg={useColorModeValue('white', 'white.700')} color={"#5458f6"} onChange={handleChange} id="name" />
                                <InputRightElement width='5rem'>
                                    <Button h='97%' size='md' onClick={() => searchProjectsByName(formData)}>
                                        {'Search'}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>

                        </FormControl>

                        <HStack pb={'10%'}>
                            <Box>
                                <FormControl id="type">
                                    <Select placeholder='Select option' onChange={() => {
                                        handleChange();
                                        searchProjectsByType(formData);
                                    }}>
                                        <option value={"FE"}>Front End</option>
                                        <option value={"BE"}>Back End</option>
                                        <option value={"FS"}>Full Stack</option>
                                    </Select>
                                </FormControl>
                            </Box>
                            <Box>
                                <FormControl id="filter-2" color={"white"}>
                                    <Select placeholder='Client ratings' variant='outline' onChange={(e) => { searchByRating(e.target.value, 'client') }}>
                                        <option value='avgCreativity'>Most creative</option>
                                        <option value='avgBestPractices'>Best practices</option>
                                        <option value='avgDesign'>Best design</option>
                                        <option value='avgBugs'>Least bugs</option>
                                    </Select>
                                </FormControl>
                            </Box>
                            <Box>
                                <FormControl id="filter-3" color={"white"}>
                                    <Select placeholder='Students ratings' onChange={(e) => { searchByRating(e.target.value, 'student') }}>
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
