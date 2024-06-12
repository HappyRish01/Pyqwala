// import PropTypes from 'prop-types'
// import react, { Component } from 'react'
// import { LinearGradient } from 'expo-linear-gradient';
import React , {useState , useEffect} from "react";
import "./Csss2.css";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import { AppContext } from "../AppContext";
import { useContext } from "react";

export default function NavBar({isAboutLoaded}) {
  const {year , setYear} = useContext(AppContext)
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const closeDropdown = (event) => {
    if (!event.target.matches('.dropbtn')) {
      setDropdownVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', closeDropdown);
    return () => {
      window.removeEventListener('click', closeDropdown);
    };
  }, []);


  return (
    <nav className={!isAboutLoaded? `navbar`: `navbarRed`}>
      <Link
        to={"/"}
        style={{
          position: "absolute",
          left: "10px",
          color: "white",
          top: "10px",
        }}
      >
        <FaHome size={30} />
        
      </Link>
      <div className="navbar-text">Pyq Wala Dost</div>

     

      
      <div className="navbar-right-menu" onClick={toggleDropdown}>
        <button className={!isAboutLoaded? `dropbtn`: `dropbtnRedf`} >{year}<IoMdArrowDropdown/></button>
        <div className={`dropdown-content ${dropdownVisible ? 'show' : ''}`}>
          <Link to={"/"} style={{textDecoration: 'none'}}>
          <p onClick={()=> {setYear(2022)}} style={{fontSize: '20px'}}>2022</p>
          <p onClick={()=> {setYear(2023)}} style={{fontSize: '20px'}}>2023</p>
          <p onClick={()=> {setYear(2024)}} style={{fontSize: '20px'}}>2024</p>
          </Link>
        </div>
      </div>
      
    </nav>
  );


}
