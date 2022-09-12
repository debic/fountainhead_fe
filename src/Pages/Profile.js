import React from 'react'

import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  Button,

} from '@chakra-ui/react';



export default function Profile() {
  return (
    <Container maxW={'4xl'} py={12} h={'100vh'} mt={'5%'}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={0}>
         <Flex justifyContent={'center'}>
          <Image
          boxSize='300px'
            rounded={'md'}
            alt={'feature image'}
            src={
              'https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png'
            }
            objectFit={'cover'}
          />
        </Flex>

        <Flex>
        <Stack spacing={4}>
          <Heading color={'white'}>Complete Name</Heading>
          <Text color={'white'} fontSize={'lg'}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore nonumy eirmod tempor invidunt ut labore por invidunt ut labore 
          </Text>
          <Button 
                bg={'white'}
                color={'#5458f6'}
                _hover={{
                  bg: '#212cb5',
                }}
                w={'150px'}
                variant={'link'}
                href={'./EditProfile'}>
              Edit Profile          
          </Button>
        </Stack>
        </Flex>

      </SimpleGrid>
    </Container>
  );
  
}
