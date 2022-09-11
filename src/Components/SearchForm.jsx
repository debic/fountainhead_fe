import { Box, Button, FormControl, HStack, Input, InputGroup, InputRightElement, Select, Stack, Text, useBreakpointValue, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

export default function SearchForm() {
    return (
        <Stack maxW={'2xl'} align={'center'} spacing={6} w={'full'} sx={{ py: 6 }}>
            <Text
                color={'white'}
                fontWeight={700}
                lineHeight={1.2}
                fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
                Explore Projects
            </Text>
            <Stack direction={'row'} w={'full'}>
                <Box
                    w={'full'}
                    rounded={'lg'}
                    border={'1px solid black'}
                    // bg={useColorModeValue('white', 'gray.700')}
                    // boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <FormControl id="project">

                            <InputGroup size='md'>
                                <Input type="text" bg={useColorModeValue('white', 'white.700')} color={"#5458f6"} />
                                <InputRightElement width='5rem'>
                                    <Button h='97%' size='md'>
                                        {'Search'}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>

                        </FormControl>

                        <HStack>
                            <Box>
                                <FormControl id="filter-1" color={"white"}>
                                    <Select placeholder='Select option'>
                                        <option value='option1'>Option 1</option>
                                        <option value='option2'>Option 2</option>
                                        <option value='option3'>Option 3</option>
                                    </Select>
                                </FormControl>
                            </Box>
                            <Box>
                                <FormControl id="filter-2">
                                    <Select placeholder='Select option' variant='outline'>
                                        <option value='option1'>Option 1</option>
                                        <option value='option2'>Option 2</option>
                                        <option value='option3'>Option 3</option>
                                    </Select>
                                </FormControl>
                            </Box>
                            <Box>
                                <FormControl id="filter-3">
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
