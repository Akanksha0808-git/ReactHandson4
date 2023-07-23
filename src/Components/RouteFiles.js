import React from 'react'
import {BrowserRouter,Routes ,Route } from 'react-router-dom';
import Home from './Home'
import Student from './Student'
import Contact from './Contact'
import LinkCompo from './LinkCompo';


const RouteFiles =()=>{
    return(
        <BrowserRouter>
        <LinkCompo />
        <Routes>
          <Route path="/" element={<Home />} />
  <Route path="/Student" element={<Student />} />
          <Route path="/Contact" element={<Contact />} />
         
        </Routes>
      </BrowserRouter>
    )
}
export default RouteFiles