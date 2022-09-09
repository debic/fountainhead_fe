import { Stack, Flex, VStack, useBreakpointValue } from '@chakra-ui/react';
import { ProductCard } from '../Components/ProductCard';
import SearchForm from '../Components/SearchForm';
import { products } from '../Components/_data';
import BackgroundImg from '../Img/background.jpg';

export default function AllProjects() {
  return (
    <Flex
      w={'full'}
      backgroundImage={
        `url(${BackgroundImg})`
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>

        <SearchForm />

        <Stack
          direction={{
            base: 'column',
            lg: 'row',
          }}
          align={{
            lg: 'flex-start',
          }}
          spacing={{
            base: '8',
            md: '16',
          }}
        >
          <Stack
            spacing={{
              base: '8',
              md: '10',
            }}
            flex="2"
          >

            <Stack spacing="6">
              {products.map((item) => (
                <ProductCard key={item.id} {...item} />
              ))}
            </Stack>
          </Stack>

        </Stack>

      </VStack>
    </Flex>
  );
}
