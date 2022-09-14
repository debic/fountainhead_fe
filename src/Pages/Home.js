import React, { useEffect } from 'react';
import { Text, Stack, VStack, useBreakpointValue, Flex, Heading } from '@chakra-ui/react';
import BackgroundImg from '../Img/background.jpg';
import { useUserContext } from '../Context/UserContext';
import { useNavigate } from 'react-router-dom';

export default function Home() {

const {validate, currentUser} = useUserContext();
const navigate = useNavigate();

useEffect(() => {validate()
navigate('/login')}, [])

  return (
    <Flex
      w={'full'}
      h={'100vh'}
      backgroundImage={
        `url(${BackgroundImg})`
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
   >
      <VStack
        w={'full'}
        justify={'flex-start'}
        align={'flex-start'}
        sx={{ px: 250, py: 150 }}
        px={useBreakpointValue({ base: 4, md: 8 })}
        justifyContent={'center'}
      >

        <Stack maxW={'2xl'} align={'flex-start'} spacing={3}>

          <Heading
            color={'white'}
            fontWeight={200}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            FOUNTAINHEAD
          </Heading>

          <Text
            color={'white'}
            fontWeight={200}
            lineHeight={1.2}
            textAlign={'left'}
            fontSize={useBreakpointValue({ base: '2xl', md: '3xl' })}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod tempor
          </Text>
        </Stack>
      </VStack>


    </Flex>
  )
}
