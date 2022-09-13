import { Stack, Flex, VStack, useBreakpointValue } from '@chakra-ui/react';
import  ProductCard  from '../Components/ProductCard';
import SearchForm from '../Components/SearchForm';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function AllProjects() {
const [currentProjects, setCurrentProjects] = useState([]);


  async function searchProjects(formData){
    try{
      const response = await axios.get("http://localhost:8080/api/project",{        
        params: formData
    })
      setCurrentProjects(response.data.data)
    }catch(err){
      console.log(err)

    }
  }

  return (

    <Flex
      w={'full'}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
    >

      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}

      >

        <SearchForm searchProjects={searchProjects} />

        <Stack
          direction={{ base: 'column', lg: 'row' }}
          align={{ lg: 'flex-start' }}
          spacing={{ base: '8', md: '16' }}
        >
          <Stack
            spacing={{ base: '8', md: '10', }}
            flex="2"
          >

            <Stack spacing="6">
              {currentProjects?.map((project) => (
                <ProductCard key={project.projectId} project={project} />
              ))}
            </Stack>
          </Stack>

        </Stack>

      </VStack>
    </Flex>
  );

}
