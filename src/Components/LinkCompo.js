import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css' 


const LinkCompo = () => {
  return (

    <div id='navbar'>
          <Link to="/">Home</Link>
       
          <Link to="/Student">Students</Link>
      
          <Link to="/Contact">Contact Us</Link>
          </div>   
  );
};

export default LinkCompo;