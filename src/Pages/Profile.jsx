import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  Avatar,
  AvatarBadge,
  IconButton,
  Center,
  Text,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Select,
} from '@chakra-ui/react';
import axios from 'axios';
import { CheckIcon } from '@chakra-ui/icons';
import { UserContext } from '../Context/UserContext';
import { useContext, useState, useRef, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyProjects from './MyProjects';
import { useUserContext } from '../Context/UserContext';
import { Photo } from '@mui/icons-material';

export default function Profile() {
  const inputRef = useRef(null)

  const data = useContext(UserContext)
  const { validate } = useUserContext()
  useEffect(() => {
     validate()
   
  }, [])
  

  useEffect(() => {
    axios.get("http://localhost:8080/api/user/validate", { withCredentials: true })
      .then(res => {
        const user = res.data[0]
        const { name, email, bio, avatar } = user
        setUserName(name)
        setUserEmail(email)
        setUserBio(bio)
        setUserPhoto(avatar)
      })
  }, [])

  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userBio, setUserBio] = useState('')
  const [Userphoto, setUserPhoto] = useState('')

  const handleUsernameChange = (e) => setUserName(e.target.value)
  const handleEmailChange = (e) => setUserEmail(e.target.value)
  const handleUserBioChange = (e) => setUserBio(e.target.value)
  const handleUserRoleChange = (e) => setUserBio(e.target.value)
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
        bio: userBio,
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
        direction={'column'}
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

          {/* <FormControl id="role">
            <FormLabel>Role</FormLabel>
            <Select placeholder='Select Role' onChange={handleUserRoleChange} value={userRole}>
              <option value={"student"}>Student</option>
              <option value={"client"}>Client</option>
            </Select>
          </FormControl> */}

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


        <Heading as='h2' size='xl'>
          My Projects
        </Heading>

        <Center p={5}>
          <MyProjects />
        </Center>

      </Flex>

      <ToastContainer />
    </>
  );
}