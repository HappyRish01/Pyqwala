import React from 'react'
import '../components/cardcss.css'
import { Link } from "react-router-dom";
import NavBar from '../components/NavBar'
import { Helmet } from 'react-helmet-async';

const Mathimg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKAbnA-aETHsKhaetDavG3FTlnYACK4LhZPg&s";
const Accimg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJD9Lp29V4tvFjjtZFuUGVM-QtwEg0LUbbRg&s"
const Bstimg = "https://static.vecteezy.com/system/resources/previews/014/688/770/non_2x/male-office-workers-are-studying-the-infographics-the-analysis-of-the-evolutionary-scale-illustration-of-business-graphics-distance-learning-and-education-vector.jpg" ;
const Ecoimg = "https://static.vecteezy.com/system/resources/thumbnails/001/759/745/small/economics-books-and-graphs-vector.jpg" ;
function CardSample({ title  , Image}) {
   
    return (
      <Link to={`/Commerce/${title}`} style={{ textDecoration: "none"}}>
        <div className="card" style={{backgroundImage: `url("${Image}")`}}>
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
    <Helmet>
      <title>CUET Commerce Previous Year Questions | Free Download PDFs effortlessly</title>
      <meta name='description' content='CUET Previous Year Question Paper of Commerce stream: Click on the cards to directly download the CUET PYQs' />
      <link rel="canonical" href="/Commerce" />
    </Helmet>
    <NavBar />
    
    <div className="card-containerrr">

        <CardSample title="Accounts" Image={Accimg}/>
        <CardSample title="Business Studies" Image={Bstimg}/>
        <CardSample title="Economics" Image={Ecoimg}/>
        <CardSample title="Maths" Image={Mathimg}/>
        
    </div>
    </>
  )
}
