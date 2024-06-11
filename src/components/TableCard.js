import React from "react";
import "./TableCardcss.css";
import { PiDownloadSimple } from "react-icons/pi";
// import { storageDB } from "../firebase";
// import { ref } from "firebase/storage";

export default function TableCard({ title, link }) {


  const handleDownload = () => {
    if(link){
      const downRef = document.createElement("a");
      downRef.href = link;
      downRef.target = "_blank"
      downRef.download = title;
      
      document.body.appendChild(downRef)
      downRef.click();
      document.body.removeChild(downRef)
      
    }
  };
  return (
    <div className="carduu" onClick={handleDownload}>
      <h1
        style={{
          userSelect: "none",
        }}
      >
        {title}

        <PiDownloadSimple className="logo" />
      </h1>
    </div>
  );
}
