import React from 'react'

import '../components/cardcss.css'
import { Link } from "react-router-dom";
import NavBar from '../components/NavBar'

const PHYimg = "https://static.vecteezy.com/system/resources/thumbnails/001/759/760/small/physics-supplies-and-books-vector.jpg";
const ChEimg = "https://static.vecteezy.com/system/resources/thumbnails/002/863/737/small/chemistry-laboratory-experiment-tool-icon-vector.jpg";
const Bioimg = "https://static.vecteezy.com/system/resources/thumbnails/001/759/758/small/biology-supplies-and-books-vector.jpg";
const Mathimg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKAbnA-aETHsKhaetDavG3FTlnYACK4LhZPg&s";
const Csimg = "https://static.vecteezy.com/system/resources/thumbnails/001/859/240/small/back-to-school-computer-book-pencil-planets-rocket-science-elementary-education-cartoon-free-vector.jpg"

function CardSample({ title  , Image}) {
    // const {setStreamroute } = useContext(AppContext)
  
    const handleClick = () => {
      // setStreamroute(title)
      
    };
  
    return (
      <Link to={`/Science/${title}`} style={{ textDecoration: "none"}}>
        <div className="card" onClick={handleClick} style={{backgroundImage: `url("${Image}")`}}>
          <h1
            style={{
              padding: "25px",
            }}
          >
            {title}
          </h1>
        </div>
      </Link>
    );
  }
  

export default function SciencePage() {
  return (
    <>
    <NavBar />
    
    <div className="card-container">

        <CardSample title="Physics" Image={PHYimg}/>
        <CardSample title="Chemistry" Image={ChEimg}/>
        <CardSample title="Maths" Image={Mathimg}/>
        <CardSample title="Biology" Image={Bioimg}/>
        <CardSample title="Computer Science" Image={Csimg}/>
        
    </div>
    </>
  )
}
