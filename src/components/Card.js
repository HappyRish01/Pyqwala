import React from "react";
import "./cardcss.css";
import { Link } from "react-router-dom";
// import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../AppContext";

const ScienceImg = "https://static.vecteezy.com/system/resources/thumbnails/006/204/262/small/education-chemistry-and-biology-concept-vector.jpg"

const commerceImg = "https://img.freepik.com/free-vector/investor-with-laptop-monitoring-growth-dividends-trader-sitting-stack-money-investing-capital-analyzing-profit-graphs-vector-illustration-finance-stock-trading-investment_74855-8432.jpg";

const HumanitiesImg = "https://blogassets.leverageedu.com/blog/wp-content/uploads/2020/04/21184424/GRE-General-Test-vs-GRE-Subject-Test.jpg"

const EnglishImg = "https://students-residents.aamc.org/sites/default/files/styles/scale_and_crop_850_x_472/public/GettyImages-1171913244.jpg?itok=HvZMBNFj"

const GT = "https://img.freepik.com/free-vector/intellectual-property-concept-with-brain-lightbulb_23-2148695133.jpg";
const PheImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxBFaZ8FixnGyVsMUOXBOrordgejgpM6m4-Q&s"


function CardSample({ title  , Image}) {

  const {setStreamroute } = useContext(AppContext)

  const handleClick = () => {
    setStreamroute(title)
    // console.log("hello")
  };


  

  return (
    <Link to={`/${title}`} style={{ textDecoration: "none"}}>
      <div className="card" onClick={handleClick} style={{backgroundImage: `url("${Image}")`}}>
        <h1
          style={{
            padding: "25px",
            userSelect: 'none'
          }}
        >
          {title}
        </h1>
      </div>
    </Link>
  );
}

function Card() {
  return (
    <div className="card-containerrr">
      <CardSample
        title="Language"
        Image={EnglishImg}
      />
      <CardSample title="Science" content="" Image={ScienceImg} />
      <CardSample
        title="Commerce"
       Image={commerceImg}
      />
      <CardSample
        title="Humanities"
        Image={HumanitiesImg}
      />
      <CardSample
        title="General Test"
       Image={GT}
      />
      <CardSample
        title="Physical Education"
       Image={PheImg}
      />
    </div>
  );
}

export default Card;
