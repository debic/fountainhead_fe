import { Box, Button, FormControl, HStack, Input, Select, Stack, Text, useBreakpointValue, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

export default function SearchForm() {
    return (
        <Stack maxW={'2xl'} align={'center'} spacing={6} w={'full'}>
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
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <FormControl id="project">
                            <Input type="text" />
                        </FormControl>

                        <HStack>
                            <Box>
                                <FormControl id="filter-1">
                                    <Select placeholder='Select option'>
                                        <option value='option1'>Option 1</option>
                                        <option value='option2'>Option 2</option>
                                        <option value='option3'>Option 3</option>
                                    </Select>
                                </FormControl>
                            </Box>
                            <Box>
                                <FormControl id="filter-2">
                                    <Select placeholder='Select option'>
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

                        <Stack spacing={10} display="grid" justify={'center'}>
                            <Button
                                w={'100px'}
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }}>
                                Search
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Stack>
    )
}
