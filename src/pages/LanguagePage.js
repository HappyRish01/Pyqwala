import React from "react";
import NavBar from "../components/NavBar";
import "../components/cardcss.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const bg =
  "https://static.vecteezy.com/system/resources/thumbnails/001/762/015/small/literature-books-stacked-vector.jpg";

function CardSample({ title, Image }) {
  const handleClick = () => {};

  return (
    <Link to={`/Language/${title}`} style={{ textDecoration: "none" }}>
      <div
        className="card"
        onClick={handleClick}
        style={{ backgroundImage: `url("${Image}")` }}
      >
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

export default function LanguagePage() {
  return (
    <>
      <Helmet>
        <title>CUET English Previous Year Questions | Free Download PDFs effortlessly</title>
        <meta
          name="description"
          content="CUET Previous Year Question Paper of English Language : Click on the cards to directly download the CUET PYQs"
        />
        <link rel="canonical" href="/Language" />
      </Helmet>
      <NavBar />
      <div className="card-containerrr">
        <CardSample title="English" Image={bg} />
      </div>
    </>
  );
}
