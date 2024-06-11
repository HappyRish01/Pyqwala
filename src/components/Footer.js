import React from 'react'
import './Footercss.css'
import { FaInstagram,FaLinkedin  } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { RiTwitterXLine } from "react-icons/ri";


function Footer() {
    const upi = "kumarrish2@axl";
   
  return (

    <footer className="footer">


<div className="footer-container">


    <div className="footer-section">
        <h3>Quick Links</h3>
        <ul >
            <li><Link to="/" className='email'>Home</Link></li>
            <li><Link to="/about" className='email'>About Us</Link></li>
        </ul>
    </div>


    <div className="footer-section">
        <h3>Resources</h3>
        <ul >
            <li><a href="/"  className='email'>Help</a></li>
            <li><div  className='email' style={{cursor: 'pointer'}}>Support - {upi}</div></li>
        </ul>
    </div>

   
    <div className="footer-section">
        <h3 >Contact Us</h3>
        <p className='email'>Email: rishk219@gmail.com</p>
    </div>

    
    <div className="footer-section">
        <h3>Follow Us</h3>
        <div className="social-media">
            <a href="https://x.com/AlokDix79383859" target='_blank' rel="noreferrer"><i className="fab fa-twitter"></i> <RiTwitterXLine className='icon twitter'/> Twitter</a>
            <a href="https://www.linkedin.com/in/alok-dixit-061814282/" target='_blank' rel="noreferrer"><i className="fab fa-linkedin-in"></i> <FaLinkedin className=' icon linkedin'/> LinkedIn</a>
            <a href="https://www.instagram.com/me_rish1602/" target='_blank' rel="noreferrer"><i className="fab fa-instagram"></i><FaInstagram className='icon insta'/> Instagram</a>
        </div>
    </div>
    

</div>


<div className="footer-bottom">
    <p>&copy; 2024 PyqWalaDost Website. All rights reserved.</p>
</div>

</footer>
    
  )
}
export default Footer