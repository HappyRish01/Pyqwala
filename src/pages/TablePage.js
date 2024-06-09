import React from "react";
import TableCard from "../components/TableCard";
import "../components/TableCardcss.css";
import { BsFileZip , BsFillFileEarmarkZipFill  } from "react-icons/bs";
import { PiFileZip } from "react-icons/pi";




// import { useEffect } from 'react'
//  var Subelem;
//  var Streamelem;


const Downloadallbtn = () => {
    const handleClick = () =>{

    }
  return (
    <div className="carduu allcard" onClick={handleClick} >
      <h1
        style={{
          userSelect: "none",
        }}
      >
        Download All
        <BsFillFileEarmarkZipFill className="logoAll logoLeft"/>
        <PiFileZip className="logoAll"/>
      </h1>
    </div>
  );
};

export default function TablePage() {
  // useEffect(()=>{
  //     const ddd = window.location.href; console.log(ddd);
  //    const a =  ddd.split('/')
  //    Subelem = a[a.length-1]
  //    Streamelem = a[a.length-2]
  //  console.log(a)
  //  console.log(Subelem)
  //  console.log(Streamelem)
  // })
  return (
    <>
    <div className="card-container">
    <Downloadallbtn />
      <TableCard title="20.06.2023 Shift-III" />
      <TableCard title="20.06.2023 Shift-II" />
    </div>
    </>
  );
}
