import React from 'react'
import Header from '../header/Header'
import { Route,Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'

import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Edit from '../pages/Edit'

const App = () => {
  

  return (
    <>

    <Header/>
   

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/edit/:id' element={<Edit/>}/>

    </Routes>
    <ToastContainer />
    </>
  )
}

export default App
