
import React from 'react'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Services from './components/Services'
import User_form from './components/User_form'
import MainNav from './components/MainNav'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import SignUp from './components/SignUp.jsx'
import Login from './components/Login.jsx'
import Dashboard from './components/User_Dashboard.jsx'

const App = () => {
  return (
    <>


      <BrowserRouter>

        <MainNav /> 

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/form" element={<User_form />}></Route>

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          <Route path="/dashboard" element={<Dashboard />}></Route>

        </Routes>

        <Footer />

      </BrowserRouter>

    </>
  )
}

export default App