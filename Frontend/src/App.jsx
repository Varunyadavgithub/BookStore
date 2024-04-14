import React from 'react'
import Home from './Home/Home'
import { Navigate, Route, Routes } from 'react-router-dom'
import Courses from './Courses/Courses'
import Signup from './Components/Signup'
import Contact from './Components/Contact'
import About from './Components/About'
import { Toaster } from 'react-hot-toast';
import { useAuth } from './Context/AuthProvider'

const App = () => {
  const [authUser,setAuthUser]=useAuth();
  console.log(authUser);
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/course' element={authUser?<Courses/>:<Navigate to="/signup"/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      <Toaster/>
    </>
  )
}

export default App
