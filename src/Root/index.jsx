import React from 'react'
import Navbar from '../Components/Navbar'
import Main from '../Components/Main'
import {Route, Routes} from 'react-router-dom'
import Home from '../Components/Home'
import Properties from '../Components/Properties'
import Contact from '../Components/Contact'
const Root = () => {
  return (
    <div>
      <Navbar/>
<Routes>
  <Route path='/home' element={<Home/>}></Route>
  <Route path='/properties' element={<Properties/>}></Route>
  <Route path='/contact' element={<Contact/>}></Route>
</Routes>
      <Main/>
    </div>
  )
}

export default Root
