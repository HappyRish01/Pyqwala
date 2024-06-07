import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../AppContext";
function CardSample({ title }) {
  const { streamRoute , setSubjectroute } = useContext(AppContext);

  const handleClick = () => {
    setSubjectroute(title);
    // console.log()
  };
  return (
    <Link to={`/paper`} style={{ textDecoration: "none" }}>
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

function SubjectPage() {
  return (
   <div>rIsh</div>
  );
}

export default SubjectPage;
