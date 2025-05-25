import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import SignUp from './Components/SignUp'
import LogIn from './Components/LogIn'
import DashBoard from './Components/DashBoard'
import BookingForm from './Components/BookingForm'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<SignUp/>} />
          <Route path='/login' element = {<LogIn/>} />
          <Route path='/Dash-board' element = {<DashBoard/> }/>
          <Route path='/booking-slot' element = {<BookingForm/> }/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
