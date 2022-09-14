import { Stack, Flex, VStack, useBreakpointValue, Spinner, Box } from '@chakra-ui/react';
import ProductCard from '../Components/ProductCard';
import SearchForm from '../Components/SearchForm';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useUserContext } from '../Context/UserContext';
import {DotLoader} from 'react-spinners';


export default function AllProjects() {
  const [currentProjects, setCurrentProjects] = useState([]);
  const [loading, setLoading] = useState('d-none');
  async function searchProjects(formData) {

    try {
      setLoading('undefined')
      const response = await axios.get("http://localhost:8080/api/project", {
        params: formData
      })
      setCurrentProjects(response.data.data)
      setLoading('d-none')
    } catch (err) {
      console.log(err)
    }}


    async function readAllProjects() {
      try {
        setLoading('undefined')
        const projects = await axios.get("http://localhost:8080/api/project")
        setCurrentProjects(projects.data.data)
        setLoading('d-none')
      } catch (err) {
        console.log(err)
      }
    }

    const { validate } = useUserContext();

    useEffect(() => { validate() }, [])

    async function readAllProjects() {
      try {
        setLoading('undefined')
        const projects = await axios.get("http://localhost:8080/api/project")
        setCurrentProjects(projects.data.data)
        setLoading('d-none')
      } catch (err) {
        console.log(err)
      }
    }

    const searchByRating = async (sortBy, role) => {
      try {

        console.log('sortBy', sortBy)
        console.log('role', role)

        if (sortBy){
        setLoading('undefined')
        const projects = await axios.get(`http://localhost:8080/api/project/sort?sortBy=${sortBy}&role=${role}`, { withCredentials: true })
        setCurrentProjects(projects.data)
        setLoading('d-none')}
      } catch (err) {
        console.log(err)
      }
    }

    useEffect(() => {
      readAllProjects()
    }, [])


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
          <SearchForm searchByRating={searchByRating} searchProjects={searchProjects} />

          <DotLoader color='white' className={loading}/>

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





  // async function readAllProjects() {
  //   try {
  //     const projects = await axios.get("http://localhost:8080/api/project")
  //     setCurrentProjects(projects.data.data)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  // const searchByRating = async (sortBy, role) => {
  //   try {
  //     const projects = await axios.get(`http://localhost:8080/api/project/sort?sortBy=${sortBy}&role=${role}`, { withCredentials: true })
  //     console.log(projects.data)
  //     setCurrentProjects(projects.data)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  // useEffect(() => {
  //   readAllProjects()
  // }, [])


  // return (

  //   <Flex
  //     w={'full'}
  //     backgroundSize={'cover'}
  //     backgroundPosition={'center center'}
  //   >

  //     <VStack
  //       w={'full'}
  //       justify={'center'}
  //       px={useBreakpointValue({ base: 4, md: 8 })}

  //     >

  //       <SearchForm searchByRating={searchByRating} searchProjects={searchProjects} />

  //       {isLoading ?
  //         (<Box pb={"10px"}><Spinner color='white.500' /></Box>) : (

  //           <Stack
  //             direction={{ base: 'column', lg: 'row' }}
  //             align={{ lg: 'flex-start' }}
  //             spacing={{ base: '8', md: '16' }}
  //           >
  //             <Stack
  //               spacing={{ base: '8', md: '10', }}
  //               flex="2"
  //             >

  //               <Stack spacing="6">
  //                 {currentProjects?.map((project) => (
  //                   <ProductCard key={project.projectId} project={project} />
  //                 ))}
  //               </Stack>
  //             </Stack>

  //           </Stack>)}

  //     </VStack>
  //   </Flex>
  // );
  //                 }
