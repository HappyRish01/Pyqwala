import React, { useState, useEffect, useContext } from "react";
import TableCard from "../components/TableCard";
import "../components/TableCardcss.css";
import { BsFillFileEarmarkZipFill } from "react-icons/bs";
import { PiFileZip } from "react-icons/pi";
import NavBar from "../components/NavBar";
import { useLocation } from "react-router-dom";

import { AppContext } from "../AppContext";
import { storageDB } from "../firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";

const Downloadallbtn = () => {
  const handleClick = () => {};
  return (
    <div className="carduu allcard" onClick={handleClick}>
      <h1
        style={{
          userSelect: "none",
        }}
      >
        Download All
        <BsFillFileEarmarkZipFill className="logoAll logoLeft" />
        <PiFileZip className="logoAll" />
      </h1>
    </div>
  );
};

export default function TablePage() {
  const { year } = useContext(AppContext);
  // const [fileName , setFileName] = useState('')

  let location = useLocation();
  let route;
  useEffect(() => {
    route = `${year}${location.pathname}/`;
  });

  const [fileUrls, setFileUrls] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      const storageRef = ref(storageDB, route);

      const fileList = await listAll(storageRef);
      fileList.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setFileUrls((prev) => {
            if (prev.includes(url)) {
              return prev;
            }
            return [...prev, url];
          });
        });
      });
    };
    fetchFiles();
    });
    
   
    
  return (
    <>
      <NavBar />
      <div className="card-container">
        <Downloadallbtn />
        {fileUrls.map((file , id) =>
        (
          
          <TableCard title={ref(storageDB,file).name.split('.').slice(0, -1).join('.')} key ={id} />
        ))}

          



        {/* <TableCard title="20.06.2023 Shift-II" /> */}
      </div>
    </>
  );
}
