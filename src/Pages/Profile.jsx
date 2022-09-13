import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  HStack,
  Avatar,
  AvatarBadge,
  IconButton,
  Center,
} from '@chakra-ui/react';
import axios from 'axios';
import { CheckIcon } from '@chakra-ui/icons';
import { UserContext } from '../Context/UserContext';
import { useContext, useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Profile() {
  const inputRef = useRef(null)

  const data = useContext(UserContext)
  const { currentUser } = data
  const { name, email, bio, avatar } = currentUser
  const [userName, setUserName] = useState(name)
  const [userEmail, setUserEmail] = useState(email)
  const [userBio, setUserBio] = useState(bio)
  const [Userphoto, setUserPhoto] = useState(avatar)
  const handleUsernameChange = (e) => setUserName(e.target.value)
  const handleEmailChange = (e) => setUserEmail(e.target.value)
  const handleUserBioChange = (e) => setUserBio(e.target.value)
  const handleChangePhotoClick = () => inputRef.current.click()

  const handleFileChange = async (event) => {

    try {
      const fileObj = event.target.files && event.target.files[0]
      const formData = new FormData();
      formData.append("photo", fileObj);
      const res = await axios.patch('http://localhost:8080/api/user/updatePicture', formData, {
        headers: {
          "content-type": "multipart/form-data"
        },
        withCredentials: true
      });

      setUserPhoto(res.data.data)
    } catch (err) {
      console.log(err)
      toast.error('Something Went Wrong')
    }
  };

  const handleProfileEdit = async () => {
    axios({
      method: 'PATCH',
      url: 'http://localhost:8080/api/user/updateMe',
      data: {
        name: userName,
        email: userEmail,
        bio: userBio
      },
      withCredentials: true
    })
      .then(res => toast.success('Saved'))
      .catch(err => toast.error(err))
  }

  return (

    <>
      <Flex
        minH={'50vh'}
        align={'center'}
        justify={'center'}
      >
        <Stack
          spacing={4}
          w={'full'}
          maxW={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          rounded={'xl'}
          boxShadow={'lg'}
          p={6}
          my={12}>
          <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
            Profile Edit
          </Heading>

          <FormControl id="userName">

            <FormLabel>User Icon</FormLabel>

            <Stack direction={['column', 'row']} spacing={6}>
              <Center>
                <Avatar size="xl" src={Userphoto}>
                  <AvatarBadge
                    as={IconButton}
                    size="sm"
                    rounded="full"
                    top="-10px"
                    colorScheme="green"
                    aria-label="remove Image"
                    icon={<CheckIcon />}
                  />
                </Avatar>

              </Center>
              <Center w="full">
                <Input onChange={handleFileChange} ref={inputRef} type={'file'} display={'none'}></Input>
                <Button onClick={handleChangePhotoClick} w="full">Change Icon</Button>
              </Center>

            </Stack>


          </FormControl>
          <FormControl id="userName" isRequired>
            <FormLabel>User name</FormLabel>
            <Input
              onChange={handleUsernameChange}
              value={userName}
              placeholder="UserName"
              _placeholder={{ color: 'gray.500' }}
              type="text"
            />
          </FormControl>

          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input
              onChange={handleEmailChange}
              value={userEmail}
              placeholder="your-email@example.com"
              _placeholder={{ color: 'gray.500' }}
              type="email"
            />
          </FormControl>

          <FormControl id="bio" isRequired>
            <FormLabel>Bio</FormLabel>
            <Input
              onChange={handleUserBioChange}
              value={userBio}
              placeholder="Bio"
              _placeholder={{ color: 'gray.500' }}
              type="email"
            />
          </FormControl>

          <Stack spacing={6} direction={['column', 'row']}>

            <Button
              onClick={handleProfileEdit}
              bg={'green.500'}
              color={'white'}
              w="full"
              _hover={{
                bg: 'green.500',
              }}>
              Submit
            </Button>

          </Stack>

        </Stack>




      </Flex>

      <ToastContainer />
    </>
  );
}