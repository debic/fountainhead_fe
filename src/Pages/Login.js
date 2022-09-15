import React from 'react'
import { Flex, Box, FormControl, FormLabel, Input, Stack, Button, Heading, Text, Image } from '@chakra-ui/react';
import { useState } from 'react';
import axios from 'axios';
import { useUserContext } from '../Context/UserContext';
import GoogleGithub from './googleGithub';
import logo from '../Img/logo.gif'
export default function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [positiveMessage, setPositiveMessage] = useState("")
  const { currentUser, setCurrentUser } = useUserContext();

  async function handleLogin(e) {
    try {
      e.preventDefault()
      const res = await axios.post("http://localhost:8080/api/user/login", { email, password }, { withCredentials: true });
      if (res.data.ok) {
        setCurrentUser(res.data.user);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        setErrorMessage("");
        setPositiveMessage("Welcome!");
      }
    } catch (err) {
      console.log(err)
      setErrorMessage(err.message)
      setPositiveMessage("")

    }
  }
  return (
    <div className='LoginPage'>
      <div className='LoginPage_image'>
      <Box boxSize='sm'>
        <Image src={logo} alt='' />
      </Box>
          </div>
      <div className='LoginPage_form'>
        <Flex
          minH={'90vh'}
          align={'center'}
          justify={'center'}>
          <Stack spacing={8} py={12} px={6}>
            <Stack align={'left'}>
              <Heading fontSize={'6xl'} as='samp' color={'white'}>Login</Heading>
              <Text fontSize={'lg'} color={'white'}>
                Welcome back! Please enter your details
              </Text>
              <Text fontSize={'lg'} color={'#700A0A'}>{errorMessage}</Text>
              <Text fontSize={'lg'} color={'white'}>{positiveMessage}</Text>
            </Stack>
            <Box >
              <Stack spacing={4} >
                <FormControl id="email">
                  <FormLabel color={'white'}>Email address</FormLabel>
                  <Input onChange={(e) => { setEmail(e.target.value) }} borderWidth={2} type="email" />
                </FormControl>
                <FormControl id="password">
                  <FormLabel color={'white'}>Password</FormLabel>
                  <Input onChange={(e) => { setPassword(e.target.value) }} borderWidth={2} type="password" />
                </FormControl>
                <Stack spacing={10}>

                  <Button onClick={handleLogin}
                    bg={'white'}
                    color={'#5458f6'}
                    _hover={{
                      bg: '#212cb5',

                    }}
                  >
                    Sign in
                  </Button>
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
