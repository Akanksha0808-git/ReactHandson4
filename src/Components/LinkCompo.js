import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css' 


const LinkCompo = () => {
  return (

    <div id='navbar'>
          <Link to="/"  className='link'>Home</Link>
       
          <Link to="/Student" className='link'>Students</Link>
      
          <Link to="/Contact" className='link'>Contact Us</Link>
          </div>   
  );
};

export default LinkCompo;