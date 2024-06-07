import React, { useEffect } from "react";
import "./cardcss.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../AppContext";


function CardSample({ title, content }) {
  const {setStreamroute} = useContext(AppContext)

  const handleClick = () => {
    setStreamroute(title)
    // console.log()
  };
  return (
    <Link to="/subject" style={{ textDecoration: "none" }}>
      <div className="card" onClick={handleClick}>
        <h2
          style={{
            padding: "25px",
          }}
        >
          {title}
        </h2>
      </div>
    </Link>
  );
}

function Card() {
  return (
    <div className="card-container">
      <CardSample title="Science" content="" />
      <CardSample
        title="Commerce"
        content="This is some content inside the second card. You can put any text or HTML elements here."
      />
      <CardSample
        title="Humanities"
        content="This is some content inside the third card. You can put any text or HTML elements here."
      />
      <CardSample
        title="English"
        content="This is some content inside the third card. You can put any text or HTML elements here."
      />
      <CardSample
        title="General Test"
        content="This is some content inside the third card. You can put any text or HTML elements here."
      />
    </div>
  );
}

export default Card;
