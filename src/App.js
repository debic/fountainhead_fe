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
import React, { useState, useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import AddProject from './Pages/AddProject';



function App() {
  
  return (
    <ChakraProvider>

      <BrowserRouter>

        <UserContext>
          <div className="App">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/Login" element={<Login />} />
              <Route path="/SignUp" element={<SignUp />} />

              <Route element={<PrivateRoute />}>
                <Route path="/AddProject" element={<AddProject />} />
              </Route>

              <Route path="/Profile" element={<Profile />} />
              <Route path="/EditProfile" element={<EditProfile />} />
              <Route path="/AllProjects" element={<AllProjects />} />
              <Route path="/ProjectInfo" element={<ProjectInfo />} />

            </Routes>
            <Footer />
          </div>
        </UserContext>
      </BrowserRouter>


    </ChakraProvider>
  );
}

export default App;
