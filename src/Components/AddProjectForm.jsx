import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Box, Button, FormControl, FormLabel, Input, Link, Select, Stack, Text, Textarea, useBreakpointValue } from '@chakra-ui/react'
import React, { useState } from 'react'
import axios from 'axios';

export default function AddProjectForm(props) {

    const [formData, setFormData] = useState({ name: "", info: "", iframe: "", type: "" });

    function handleChange(e) {
        console.log([e.target.id], e.target.value);
        setFormData((previousState) => ({
            ...previousState,
            [e.target.id]: e.target.value,
        }));
    }

    async function handleSubmit(e) {

        try {
            e.preventDefault()
            const res = await axios.post("http://localhost:8080/api/project", formData);
            if (res.data.ok) {


            }
        } catch (err) {
            console.log(err)


        }
    }

    return (
        <Box>
            <Stack spacing={4} >
                <FormControl id="name">
                    <FormLabel color={'white'}>Project Name</FormLabel>
                    <Input onChange={handleChange} borderWidth={2} type="text" value={formData.name} />
                </FormControl>
                <FormControl id="info">
                    <FormLabel color={'white'}>Description</FormLabel>
                    <Textarea onChange={handleChange} borderWidth={2} type="text" resize={"none"} rows="5" value={formData.info} />
                </FormControl>

                <Box>
                    <Text fontWeight={200} fontSize={useBreakpointValue({ base: 'md', md: 'md' })} color={'white'}>
                        Upload your code to <Link href='https://codesandbox.io' isExternal>CodeSandbox <ExternalLinkIcon mx='2px' /></Link> and paste the link in the field below
                    </Text>
                </Box>

                <FormControl id="link">
                    <FormLabel color={'white'}>Link to Code</FormLabel>
                    <Input onChange={handleChange} borderWidth={2} type="text" value={formData.iframe} />
                </FormControl>

                <FormControl id="type">
                    <FormLabel color={'white'}>Type</FormLabel>
                    <Select placeholder='Select option' onChange={handleChange}>
                        <option value={"FE"}>Front End</option>
                        <option value={"BE"}>Back End</option>
                        <option value={"FS"}>Full Stack</option>
                    </Select>
                </FormControl>

                <Stack spacing={10}>
                    <Button onClick={handleSubmit}
                        bg={'white'}
                        color={'#5458f6'}
                        _hover={{
                            bg: '#212cb5',
                        }}>
                        Add
                    </Button>
                </Stack>
            </Stack>
        </Box>
    )
}
