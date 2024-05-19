import React, { useState } from 'react';
import './App.css'
import { Route, Router, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import Login from './Components/Login/Login.Components';
import Home from './Components/Home/Home.Components';
import LoginBoxInput from './Components/LoginInput/LoginBoxInput.Components';
import SignUpBoxInput from './Components/SignUp/SignUpBoxInput.Components';
import { auth } from './Components/Firebase/Firebase';

export default function App() { 

  const router  =  createBrowserRouter([
    {
      path:"/",
      element: <Login/>,
      children:[
        {
          path:"/LoginBoxInput",
          element: <LoginBoxInput/>
        },
        {
          path:"/SignUpBoxInput",
          element: <SignUpBoxInput/>
        }
      ]
    },
    {
      path: "/Home",
      element: <Home name={name}/>
    }
  ]);

  return (
    <>
      <div>
        <RouterProvider router={router}></RouterProvider>
        {/* <Router>
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/LoginBoxInput" element={<LoginBoxInput />} />
        <Route path="/SignUpBoxInput" element={<SignUpBoxInput />} />
        <Route path='/Home' element={
          <div className='app'>
            <Home name={name} email={email} image={image} />
          </div>
        } />
      </Routes>
      </Router> */}
      </div>
    </>
  );
}