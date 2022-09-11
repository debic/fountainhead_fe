import { Avatar, Box, Center, Heading, Image, Stack, Text, useColorModeValue, HStack, Divider } from '@chakra-ui/react'
import * as React from 'react'

export const ProductCard = (props) => {
    const { product, rootProps, rating } = props
    return (
        <Center py={3}>
            <Box
                maxW={'2xl'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'md'}
                overflow={'hidden'}>
                <Image
                    src={
                        'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                    }
                    layout={'fill'}
                />
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

                    <Divider />

                    <Stack mt={6} mb={3} direction={'row'} spacing={4} align={'center'}>
                        <Avatar
                            src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
                            alt={'Author'}
                        />
                        <Stack direction={'column'} spacing={0} fontSize={'sm'} textAlign={'left'}>
                            <Text fontWeight={600}>Achim Rolle</Text>
                        </Stack>
                        <HStack>
                            <Box w='40px' h='40px' bg='yellow.200'>
                                1
                            </Box>
                            <Box w='40px' h='40px' bg='red.200'>
                                2
                            </Box>
                            <Box w='40px' h='40px' bg='teal.200'>
                                3
                            </Box>
                            <Box w='40px' h='40px' bg='purple.200'>
                                4
                            </Box>
                            <Box w='40px' h='40px' bg='blue.200'>
                                5
                            </Box>
                            {/* <Box h='40px' bg='blue.200'>
                                Role
                            </Box>
                            <Box w='40px' h='40px' bg='blue.200'>
                                Points
                            </Box> */}
                        </HStack>
                    </Stack>
                </Box>

            </Box>
        </Center>
    )
}
