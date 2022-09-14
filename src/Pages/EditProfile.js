import React, { useState} from 'react'
import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  Button,
  FormLabel, Input, FormControl, Box,Textarea

} from '@chakra-ui/react';
import axios from 'axios';



export default function EditProfile() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [profilePicture, setProfilePicture] = useState("")
  const [bio, setBio] = useState("")


  const [oldPassword, setOldPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [reNewPassword, setReNewPassword] = useState("")



  async function handleEditProfile(e){
    try{
      e.preventDefault()
      const res = await axios.post("http://localhost:8080/api/user/signup", {name,email, profilePicture,bio,oldPassword, newPassword,reNewPassword }, {withCredentials: true} )
      if(res.data.ok){
  
      }
    }catch(err){
      console.log(err)
 
    }
  }
  
  
  return (
    <Container maxW={'6xl'} py={12}  mt={'5%'} pb={'10%'}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={200} >
         <Flex justifyContent={'center'}>
         <Stack spacing={4}>
          <Image
          boxSize='300px'
            rounded={'md'}
            alt={'feature image'}
            src={
              'https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png'
            }
            objectFit={'cover'}
          />
          <Heading color={'white'}>Complete Name</Heading>
          <Text color={'white'} fontSize={'lg'}>
            BLALLALALorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore nonumy eirmod tempor invidunt ut labore por invidunt ut labore 
          </Text>
          </Stack>
        </Flex>

        <Flex >
        <Stack>
        <Stack spacing={4} w={'xl'}>
          <Heading color={'white'}>Settings</Heading>
          <Box >
          <Stack spacing={4} >
            <FormControl   id="email">
              <FormLabel color={'white'}>Name</FormLabel>
              <Input onChange={(e) => {setName(e.target.value)}} borderWidth={2} type="text" color={'white'}/>
            </FormControl>
            <FormControl id="password">
              <FormLabel color={'white'}>Email</FormLabel>
              <Input onChange={(e) => {setEmail(e.target.value)}} borderWidth={2} type="email" color={'white'}/>
            </FormControl>
            <FormControl id="password">
              <FormLabel color={'white'}>Profile Picture</FormLabel>
              
              <Input onChange={(e) => {setProfilePicture(e.target.value)}} borderWidth={2} type="file" color={'white'}/>
            </FormControl>
            <Text color={'white'} mb='8px'>Bio</Text>
            <Textarea onChange={(e) => {setBio(e.target.value)}}
            fontSize={'lg'}
                color={'white'} 
                size='sm' borderWidth={2}
              />

              <Button onClick={handleEditProfile}
                bg={'white'}
                color={'#5458f6'}
                _hover={{
                  bg: '#212cb5',
                  
                }}
                >
                Edit profile
              </Button>
 
          </Stack>
        </Box>
        </Stack>


        <Stack spacing={4} w={'xl'} >
          <Heading color={'white'} mt='15%'>Password</Heading>
          <Box >
          <Stack spacing={4} >
            <FormControl   id="password">
              <FormLabel color={'white'}>Old Password</FormLabel>
              <Input onChange={(e) => {setOldPassword(e.target.value)}} borderWidth={2} type="password" color={'white'}/>
            </FormControl>
            <FormControl id="password">
              <FormLabel color={'white'}>New Password</FormLabel>
              <Input onChange={(e) => {setNewPassword(e.target.value)}} borderWidth={2} type="password" color={'white'}/>
            </FormControl>
            <FormControl id="password">
              <FormLabel color={'white'}>Repeat New Password</FormLabel>
              <Input onChange={(e) => {setReNewPassword(e.target.value)}} borderWidth={2} type="password" color={'white'}/>
            </FormControl>

              <Button onClick={""}
                bg={'white'}
                color={'#5458f6'}
                _hover={{
                  bg: '#212cb5',
                  
                }}
                >
                Edit profile
              </Button>
 
          </Stack>
        </Box>
        </Stack>
        </Stack>
        </Flex>

      </SimpleGrid>
    </Container>
  );
  
}
