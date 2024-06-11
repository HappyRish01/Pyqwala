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

const Downloadallbtn = ({ year }) => {
  const [ZipRoute , setZipRoute ] = useState('')

  const location = useLocation();

  useState(() => {
    setZipRoute(`${year}/AllZip${location.pathname}/`);
    
  });

  const handleAllDownload = (link) => {
    if(link){
      const downRef = document.createElement("a");
      downRef.href = link;
      downRef.target = "_blank"
      downRef.download = "Allzip";
      
      document.body.appendChild(downRef)
      downRef.click();
      document.body.removeChild(downRef)
    }
  };
  const handleClick = () => {
    const handleFetch = async () => {
      const storageRefee = ref(storageDB, ZipRoute);
      const fileList = await listAll(storageRefee);
      fileList.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          // console.log(url)
          // setZipUrl(url)
          // console.log(ZipUrl)
          handleAllDownload(url)
        });
      });
    };

    handleFetch();
  };

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
  const location = useLocation();

  const { year } = useContext(AppContext);
  const [route, setRoute] = useState("");
  // const [subjectName , setSubjectName] = useState('');

  useEffect(() => {
    setRoute(`${year}${location.pathname}/`);
    
    // console.log(route);
  }, [year, location.pathname]);

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
        <Downloadallbtn year={year} />
        {fileUrls.map((file, id) => (
          <TableCard
            title={ref(storageDB, file).name.split(".").slice(0, -1).join(".")}
            key={id}
            link={file}
          />
        ))}
      </div>
    </>
  );
}
