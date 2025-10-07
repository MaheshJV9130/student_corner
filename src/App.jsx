import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Feed from './pages/Feed'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route path='/feed' element={<Feed/>}/>
      </Routes>
    </div>
  )
}

export default App
