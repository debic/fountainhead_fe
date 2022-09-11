import { Flex, Heading, Stack, Text, useBreakpointValue } from '@chakra-ui/react'
import React, { useState } from 'react'
import AddProjectForm from '../Components/AddProjectForm'

export default function AddProject() {
    const [errorMessage, setErrorMessage] = useState("")
    const [positiveMessage, setPositiveMessage] = useState("")
    return (
        <Flex
            align={'center'}
            justify={'center'}>
            <Stack spacing={8} py={6} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })} as='samp' color={'white'}>Add Project</Heading>
                    <Text fontWeight={200} fontSize={useBreakpointValue({ base: 'xl', md: '2xl' })} color={'white'}>
                        Enter the project details below
                    </Text>
                </Stack>
                <AddProjectForm />
            </Stack>
        </Flex>
    )
}
