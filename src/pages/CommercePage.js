import React from 'react'
import '../components/cardcss.css'
import { Link } from "react-router-dom";
import NavBar from '../components/NavBar'

const Mathimg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKAbnA-aETHsKhaetDavG3FTlnYACK4LhZPg&s";
const Accimg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJD9Lp29V4tvFjjtZFuUGVM-QtwEg0LUbbRg&s"
const Bstimg = "https://static.vecteezy.com/system/resources/previews/014/688/770/non_2x/male-office-workers-are-studying-the-infographics-the-analysis-of-the-evolutionary-scale-illustration-of-business-graphics-distance-learning-and-education-vector.jpg" ;
const Ecoimg = "https://static.vecteezy.com/system/resources/thumbnails/001/759/745/small/economics-books-and-graphs-vector.jpg" ;
function CardSample({ title  , Image}) {
   
  
    const handleClick = () => {
   console.log(title)
    
    };
  
    return (
      <Link to={`/Commerce/${title}`} style={{ textDecoration: "none"}}>
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
  

export default function CommercePage() {
  return (
    <>
    <NavBar />
    
    <div className="card-container">

        <CardSample title="Accounts" Image={Accimg}/>
        <CardSample title="Business Studies" Image={Bstimg}/>
        <CardSample title="Economics" Image={Ecoimg}/>
        <CardSample title="Maths" Image={Mathimg}/>
        
    </div>
    </>
  )
}
