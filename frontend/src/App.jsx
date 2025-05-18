import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainSignup from './pages/CaptainSignup'
import CaptainLogin from './pages/CaptainLogin'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/users/login" element={<UserLogin/>}/>
        <Route path="/users/register" element={<UserSignup/>}/>
        <Route path="/captains/register" element={<CaptainSignup/>}/>
        <Route path="/captains/login" element={<CaptainLogin />} />
      </Routes>
    </div>
  )
}

export default App
