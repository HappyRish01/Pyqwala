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

export default function NavBar() {
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
    <nav className="navbar">
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

     

      
      <div className="navbar-right-menu">
        <button className="dropbtn" onClick={toggleDropdown}>{year}<IoMdArrowDropdown/></button>
        <div className={`dropdown-content ${dropdownVisible ? 'show' : ''}`}>
          <Link to={"/"} style={{textDecoration: 'none'}}>
          <h3 onClick={()=> {setYear(2022)}} >2022</h3>
          <h3 onClick={()=> {setYear(2023)}}>2023</h3>
          <h3 onClick={()=> {setYear(2024)}} >2024</h3>
          </Link>
        </div>
      </div>
      
    </nav>
  );


}
