// import PropTypes from 'prop-types'
// import react, { Component } from 'react'
// import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'
import './Csss2.css';
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';
export default function NavBar() {
  // const handleFunc = () => {
  //   <Link to={"/"}></Link>
  // }
  return (


   
    <nav class="navbar">
       <Link to={"/"} style={{position:'absolute',left:'10px', color: 'white',top:"10px"}}>
        <FaHome size={30}/>
       </Link>
        <div class="navbar-text">
            Pyq Wala Dost
        </div>
    </nav>
    
    
  )
}



