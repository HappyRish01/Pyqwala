import React from 'react'
import './cardcss.css'

function CardSample({ title, content }) {
    return (
      <div className="card">
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
    );
  }

function Card (){
    return (
        
          <div className="card-container">
            <CardSample title="Card Title 1" content="This is some content inside the first card. You can put any text or HTML elements here." />
            <CardSample title="Card Title 2" content="This is some content inside the second card. You can put any text or HTML elements here." />
            <CardSample title="Card Title 3" content="This is some content inside the third card. You can put any text or HTML elements here." />
            <CardSample title="Card Title 3" content="This is some content inside the third card. You can put any text or HTML elements here." />
            <CardSample title="Card Title 3" content="This is some content inside the third card. You can put any text or HTML elements here." />
          
          </div>
   
      );
}

export default Card;