import React from 'react'
import "./Cssforback.css"
// import bgimage from './bgimage.jpg';


export default function Back() {
  var is_mobile = !!navigator.userAgent.match(/iphone|android|blackberry/ig) || false;
  console.log(is_mobile)
  return (

    <>


  
  <div className='bg'>
    <img src='https://www.paraggupta.com/wp-content/uploads/20220402152158CUET-.jpg' alt='Backgroundimage' id="bgimage"/>
            </div>
    </>
  )
}
