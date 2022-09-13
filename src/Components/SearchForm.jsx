import { Box, Button, FormControl, HStack, Input, InputGroup, InputRightElement, Select, Stack, Text, useBreakpointValue, useColorModeValue } from '@chakra-ui/react'
import React, { useState } from 'react'

export default function SearchForm({ searchProjects }) {

    const [formData, setFormData] = useState({ name: "", type: "" });

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
                                    <Button h='97%' size='md' onClick={() => searchProjects(formData)}>
                                        {'Search'}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>

                        </FormControl>

                        <HStack pb={'10px'}>
                            <Box>
                                <FormControl id="type">
                                    <Select placeholder='Select option' onChange={handleChange}>
                                        <option value={"FE"}>Front End</option>
                                        <option value={"BE"}>Back End</option>
                                        <option value={"FS"}>Full Stack</option>
                                    </Select>
                                </FormControl>
                            </Box>
                            <Box>
                                <FormControl id="filter-2" color={"white"}>
                                    <Select placeholder='Select option' variant='outline'>
                                        <option value='option1'>Option 1</option>
                                        <option value='option2'>Option 2</option>
                                        <option value='option3'>Option 3</option>
                                    </Select>
                                </FormControl>
                            </Box>
                            <Box>
                                <FormControl id="filter-3" color={"white"}>
                                    <Select placeholder='Select option'>
                                        <option value='option1'>Option 1</option>
                                        <option value='option2'>Option 2</option>
                                        <option value='option3'>Option 3</option>
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
