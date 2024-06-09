import React from 'react'
import './TableCardcss.css'
import { PiDownloadSimple  } from "react-icons/pi";




export default function TableCard({title}) {
    const handleClick = () => {
        // setStreamroute(title)
        // console.log("hello")
      }; 
  return (
    <div className='carduu' onClick={handleClick}>
        

    <h1
      style={{
        userSelect: 'none'
          }}
          >
            {title}
      
      <PiDownloadSimple className='logo' />
      
    </h1>
       
  </div>
  )
}
