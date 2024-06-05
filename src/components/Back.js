import React from 'react'
import "./Cssforback.css"
import image from "./bg.jpg"
// import bgimage from './bgimage.jpg';


export default function Back() {
  const mycss = {
    backgroundImage:`url(${image})`,
    backgroundSize: "cover",
    backgroundRepeat: 'no-repeat',
    height: '90vh'
  }
  
  var is_mobile = !!navigator.userAgent.match(/iphone|android|blackberry/ig) || false;
  console.log(is_mobile)
  const bgLink = "https://firebasestorage.googleapis.com/v0/b/pyqs-4575a.appspot.com/o/assets%2FWhatsApp%20Image%202024-06-05%20at%2018.24.46_f2176783.jpg?alt=media&token=7fc1a2fd-2cce-48de-a7a9-56694aab7758";
  return (
  // <img src={bgLink} alt="background" />
  <div style={mycss}></div>
  )
}