import React from 'react'
import Home from './Home/Home'
import { Route, Routes } from 'react-router-dom'
import Courses from './Courses/Courses'
import Signup from './Components/Signup'
import Contact from './Components/Contact'
import About from './Components/About'

const App = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/course' element={<Courses/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </>
  )
}

export default App
