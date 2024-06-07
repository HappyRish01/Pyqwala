import React from 'react'
import './cardcss.css'

// const CardFooter = () =>{
//   return (
//     <div style={{ display: 'flex' , justifyContent: 'space-between' , alignItems: 'center' , marginTop: '20px '}}>Click to view 
//     <button style={{borderRadius: '70%'}} onClick={handleClick}>Arrow</button>
//     </div>
//   )
// }



const handleClick = () => {
  console.log("area clicked")
}

function CardSample({ title, content }) {
    return (
      <div className="card" onClick={handleClick}>
        <h2 style={{
          padding: '25px'
        }}>{title}</h2>
        {/* <p style={{userSelect: 'none'}}>{content}</p> */}
        {/* <CardFooter /> */}
      </div>
    );
  }

function Card (){
    return (
        
          <div className="card-container" onMouseEnter={()=>{}}>
            <CardSample title="Science" content="" />
            <CardSample title="Commerce" content="This is some content inside the second card. You can put any text or HTML elements here." />
            <CardSample title="Humanities" content="This is some content inside the third card. You can put any text or HTML elements here." />
            <CardSample title="English" content="This is some content inside the third card. You can put any text or HTML elements here." />
            <CardSample title="General Test" content="This is some content inside the third card. You can put any text or HTML elements here." />
          
          </div>
   
      );
}

export default Card;