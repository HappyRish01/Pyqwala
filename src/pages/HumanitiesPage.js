import React from 'react'
import NavBar from '../components/NavBar'
import '../components/cardcss.css'
import { Link } from "react-router-dom";

const His = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGHIK85L-jGP1hBHIkE4yoMRGrYH5tgMeRug&s";
const Pol = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcdoghmVPHcUbmFl1tzP0f1rWUX_ZR9jcpnw&s";
const Ecoimg = "https://static.vecteezy.com/system/resources/thumbnails/001/759/745/small/economics-books-and-graphs-vector.jpg" ;
const Geo = "https://static.vecteezy.com/system/resources/thumbnails/001/759/756/small/geography-supplies-and-books-vector.jpg";
const Psy = "https://static.vecteezy.com/system/resources/thumbnails/005/661/870/small_2x/psychologist-and-female-patient-in-psychotherapy-session-free-vector.jpg";
const Soc = "https://static.vecteezy.com/system/resources/thumbnails/001/759/771/small/sociology-books-and-supplies-vector.jpg";

function CardSample({ title  , Image}) {
    // const {setStreamroute } = useContext(AppContext)
  
    const handleClick = () => {
    //   setStreamroute(title)
    
    };
  
    return (
      <Link to={`/Humanities/${title}`} style={{ textDecoration: "none"}}>
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
  

export default function HumanitiesPage() {
  return (
    <>
    <NavBar />
    
    <div className="card-container">

        <CardSample title="History" Image={His}/>
        <CardSample title="Political Science"Image={Pol}/>
        <CardSample title="Geography" Image={Geo}/>
        <CardSample title="Psychology" Image={Psy}/>
        <CardSample title="Sociology" Image={Soc}/>
        <CardSample title="Economics" Image={Ecoimg}/>
        
    </div>
    </>
  )
}
