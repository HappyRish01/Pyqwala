import React from 'react'
import './cardcss.css'
// import { useState } from 'react';

// const CardFooter = () =>{
//   return (
//     <div style={{ display: 'flex' , justifyContent: 'space-between' , alignItems: 'center' , marginTop: '20px '}}>Click to view 
//     <button style={{borderRadius: '70%'}} onClick={handleClick}>Arrow</button>
//     </div>
//   )
// }

const ScienceImg = "https://static.vecteezy.com/system/resources/thumbnails/006/204/262/small/education-chemistry-and-biology-concept-vector.jpg"

const commerceImg = "https://img.freepik.com/free-vector/investor-with-laptop-monitoring-growth-dividends-trader-sitting-stack-money-investing-capital-analyzing-profit-graphs-vector-illustration-finance-stock-trading-investment_74855-8432.jpg";

const HumanitiesImg = "https://blogassets.leverageedu.com/blog/wp-content/uploads/2020/04/21184424/GRE-General-Test-vs-GRE-Subject-Test.jpg"

const EnglishImg = "https://students-residents.aamc.org/sites/default/files/styles/scale_and_crop_850_x_472/public/GettyImages-1171913244.jpg?itok=HvZMBNFj"

const GtImg = "https://firebasestorage.googleapis.com/v0/b/pyqs-4575a.appspot.com/o/assets%2FnewGTBG.jpg?alt=media&token=b8117930-c4e3-4f35-98a1-f786aeef34ad"
const handleClick = () => {
  console.log("area clicked");
}

function CardSample({ title, content ,Image }) {
  // const [loader, setLoader] = useState()
    return (
      <div className="card" onClick={handleClick} style={{backgroundImage:`url("${Image}")` }}>
   

        <h2 style={{
          padding: '25px',
          fontWeight: 'bolder',
          
          }}>{title}</h2>
    
      </div>
    );
  }

function Card (){
    return (
        
      <div className="card-container" onMouseEnter={()=>{}}>
            <CardSample title="Language" content="This is some content inside the third card. You can put any text or HTML elements here." Image={EnglishImg}/>
            <CardSample title="Science" content="" Image={ScienceImg} />
            
            <CardSample title="Commerce" content="This is some content inside the second card. You can put any text or HTML elements here." Image={commerceImg}/>
            <CardSample title="Humanities" content="This is some content inside the third card. You can put any text or HTML elements here."  Image={HumanitiesImg}/>
           
            <CardSample title="General Test" content="This is some content inside the third card. You can put any text or HTML elements here."Image={GtImg} />
          
          </div>
   
      );
}

export default Card;