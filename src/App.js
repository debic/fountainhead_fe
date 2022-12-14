import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import AllProjects from './Pages/AllProjects';
import ProjectInfo from './Pages/ProjectInfo';
import Profile from './Pages/Profile';
import EditProfile from './Pages/EditProfile';
import Footer from './Components/Footer';
import PrivateRoute from "./Components/PrivateRoute";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from './Context/UserContext';
import AddProject from './Pages/AddProject';
import React from 'react';

import Donation from './Components/Donation';


import { ChakraProvider } from '@chakra-ui/react'



function App() {

  return (
    <ChakraProvider>
      <BrowserRouter>
      <UserContext >
    <div className="App">
      <Navbar/>
      <Routes>
             <Route path="/" element={<Home/>}/>
             <Route path="/Login" element={<Login/>}/>
             <Route path="/SignUp" element={<SignUp/>}/>
             <Route path="/Profile" element={<Profile/>}/>
             <Route path="/Reward" element={<Home/>}/>
             <Route path="/AllProjects" element={<AllProjects/>}/>
             <Route path="/ProjectInfo/:id" element={<ProjectInfo/>}/>
             <Route path="/ProjectInfo" element={<ProjectInfo/>}/>
            <Route path="*" element={<h1>404 - Not Found!</h1>}/>
            <Route path='donation' element={<Donation/>}/>
            <Route path='/AddProject' element={<AddProject/>}/>
        </Routes>
        <Footer/>
    </div>
    </UserContext>
    </BrowserRouter>
   
    </ChakraProvider>
  );
}

export default App;
