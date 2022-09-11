import React from 'react';
import { Text, Stack, VStack, useBreakpointValue, Flex, Heading } from '@chakra-ui/react';
import BackgroundImg from '../Img/background.jpg';

import { products } from '../Components/_data'
import { ProductCard } from '../Components/ProductCard'
import { ProductGrid } from '../Components/ProductGrid'

export default function Home() {
  return (
    <Flex
      w={'full'}
      h={'100vh'}
      backgroundImage={
        `url(${BackgroundImg})`
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <VStack
        w={'full'}
        justify={'flex-start'}
        align={'flex-start'}
        sx={{ pl: 100, py: 100 }}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>

        <Stack maxW={'2xl'} align={'flex-start'} spacing={3} sx={{ pb: 20 }}>

          <Heading
            color={'white'}
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            FOUNTAINHEAD
          </Heading>

          <Text
            color={'white'}
            fontWeight={400}
            lineHeight={1.2}
            textAlign={'left'}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod tempor
          </Text>
        </Stack>
      </VStack>


    </Flex>
  )
}
