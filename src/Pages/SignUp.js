import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { FcGoogle } from 'react-icons/fc';
import GoogleGithub from './googleGithub';
import { useUserContext } from '../Context/UserContext';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  Center,
  Select

} from '@chakra-ui/react';
export default function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password1, setPassword1] = useState("")
  const [password2, setPassword2] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [positiveMessage, setPositiveMessage] = useState("")
  const [role, setRole] = useState("")


  async function handleSubmit(e) {
    try {
      e.preventDefault()
      const res = await axios.post("http://localhost:8080/api/user/signup", { name, email, password1, password2 }, { withCredentials: true })
      if (res.data.ok) {
        setErrorMessage("")
        setPositiveMessage("Welcome!")
      }
    } catch (err) {
      console.log(err)
      setErrorMessage(err.message)
      setPositiveMessage("")
    }
  }

  async function handleSubmitGoogle(e) {
    try {
      e.preventDefault()
      const res = await axios.get("http://localhost:8080/api/user/google", { withCredentials: true })
      console.log(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='LoginPage'>
      <div className='LoginPage_image'>

      </div>

      <div className='LoginPage_form'>
        <Flex
          minH={'90vh'}
          align={'center'}
          justify={'center'}>
          <Stack spacing={8} py={12} px={6}>
            <Stack align={'left'}>
              <Heading fontSize={'6xl'} as='samp' color={'white'}>Sign Up</Heading>
              <Text fontSize={'lg'} color={'white'}>
                Lorem Ipsum is simply dummy text of the printing an
              </Text>
              <Text fontSize={'lg'} color={'#700A0A'}>{errorMessage}</Text>
              <Text fontSize={'lg'} color={'white'}>{positiveMessage}</Text>
            </Stack>
            <Box >
              <Stack spacing={4} >
                <FormControl id="name">
                  <FormLabel color={'white'}>Name</FormLabel>
                  <Input onChange={(e) => { setName(e.target.value) }} borderWidth={2} type="text" />
                </FormControl>
                <FormControl id="email">
                  <FormLabel color={'white'}>Email address</FormLabel>
                  <Input onChange={(e) => { setEmail(e.target.value) }} borderWidth={2} type="email" />
                </FormControl>
                <FormControl id="password">
                  <FormLabel color={'white'}>Password</FormLabel>
                  <Input onChange={(e) => { setPassword1(e.target.value) }} borderWidth={2} type="password" />
                </FormControl>
                <FormControl id="password">
                  <FormLabel color={'white'}>Re Password</FormLabel>
                  <Input onChange={(e) => { setPassword2(e.target.value) }} borderWidth={2} type="password" />
                </FormControl>
                <Box>
                  <FormControl id="type">
                    <Select placeholder='Select option' onChange={(e) => setRole(e.target.value)}>
                      <option value={"student"}>Student</option>
                      <option value={"professional"}>Professional</option>
                    </Select>
                  </FormControl>
                </Box>
                <Stack spacing={10}>

                  <Button onClick={handleSubmit}
                    bg={'white'}
                    color={'#5458f6'}
                    _hover={{
                      bg: '#212cb5',
                    }}>
                    Sign up
                  </Button>
                  {/* <Button  bg={'white'} onClick={handleSubmitGoogle} w={'full'} variant={'outline'} leftIcon={<FcGoogle />}>
              <Center>
                <Text>Sign in with Google</Text>
              </Center>
            </Button> */}
                  <GoogleGithub />
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      </div>
    </div>
  )
}
