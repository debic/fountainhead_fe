
import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,Heading
} from '@chakra-ui/react';

  export default function Footer() {
   
    return (
      <Box
      bg={useColorModeValue('#424242')}
   >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={20}
        spacing={4}
        justify={'center'}
        align={'center'}>
   
        <Stack direction={'column'} spacing={6}>
        <Heading fontSize={'4xl'} as='samp' color={'white'} textAlign='center' fontWeight='base' >FOUNTAINHEAD</Heading>
        <Text fontSize={'lg'} color={'white'}>
           Made by : Vladi Yudashkin | Debi Codriansky | Ben Cosmin | Aviv Maman      
        </Text>
        </Stack>
      </Container>
    </Box>
  );
    
  }