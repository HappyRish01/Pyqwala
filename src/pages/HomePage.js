import React from 'react'
import Card from '../components/Card'
import NavBar from '../components/NavBar'
import { Helmet } from 'react-helmet-async'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <>
    <Helmet>
      <title>CUET Previous Year Question Papers | Free PDF Download | PYQs of All Subjects in One Click</title>
      <meta name='description' content='Prepare for CUET with our free, one-click download of previous year question papers for all subjects including General Test and Physical Education.'/>
      <link rel="canonical" href="/" />
    </Helmet>
    <NavBar />
    <Card /> 
    {/* <TablePage /> */}
    <Footer />

    </>
  )
}
