import './App.css';
import Navbar from './Components/Navbar';
import * as React from 'react'
import Home from './Pages/Home';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import AllProjects from './Pages/AllProjects';
import ProjectInfo from './Pages/ProjectInfo';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import Donation from './Components/Donation';


function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>

    <div className="App">
      <Navbar/>
      <Routes>
             <Route path="/" element={<Home/>}/>
             <Route path="/Login" element={<Login/>}/>
             <Route path="/SignUp" element={<SignUp/>}/>
             <Route path="/AllProjects" element={<AllProjects/>}/>
             <Route path="/ProjectInfo" element={<ProjectInfo/>}/>
             <Route path="*" element={<h1>404 Not Found</h1>}/>
             <Route path='/donation' element={<Donation/>}/>
        </Routes>
    </div>
    </BrowserRouter>

    </ChakraProvider>
  );
}

export default App;
