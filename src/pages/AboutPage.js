import React, { useEffect, useState , } from "react";
import NavBar from "../components/NavBar";
import "./css/AboutPagecss.css"
import { PiDotFill } from "react-icons/pi";
import { Helmet } from "react-helmet-async";

const aboutUsImage =
  "https://t4.ftcdn.net/jpg/06/13/46/63/360_F_613466370_z5ACkTKDSLuyWlOAagyxoQrt95v1ptIV.jpg";
function AboutPage() {
  const [isAboutLoaded , setIsAboutLoaded] = useState(false)


    useEffect(()=>{
        window.scrollTo(0, 0)
        setIsAboutLoaded(true)
    },[])
    
  return (
    <>
    <Helmet>
    <link rel="canonical" href="/About" />
    <title>About us</title>
      <meta name='description' content='This is our about us page that tell us about our mission towards the society and aspirants'/>
    
    </Helmet>
      <NavBar isAboutLoaded={isAboutLoaded}/>
        <img src={aboutUsImage} alt="About Us" className="about-us-image" />
      <div className="about-us-container">
        <div className="about-us-content">
          <h1>About Us</h1>
          <p>Welcome to PYQ Wala Dost!</p>

          <p>
            At PYQ Wala Dost, we are dedicated to supporting students in their
            academic journey by providing access to previous{" "}
          </p>
          <p>
            years' question papers. We understand the importance of effective
            exam preparation and believe that practice with past{" "}
          </p>
          <p>papers is one of the best ways to achieve success.</p>

          <h2 className="heading">Our Mission</h2>
          <p>
            Our mission is to make quality educational resources accessible to
            every student, helping them excel in their studies{" "}
          </p>
          <p>
            and achieve their academic goals. By offering a comprehensive
            database of previous years' question papers, we aim to:
          </p>
          <div className="list">
            <ul>
              <li>
                <PiDotFill /> Enhance students' understanding of exam formats
                and question patterns.
              </li>
              <li>
                {" "}
                <PiDotFill /> Help students identify important topics and
                frequently asked questions.
              </li>
              <li>
                <PiDotFill /> Build confidence and reduce exam-related stress
                through effective practice.
              </li>
            </ul>
          </div>

          <h2 className="heading">What We Offer</h2>
          <div className="offer-first">
            <p>
              <b>Easy Access:</b> Our user-friendly website ensures that
              students can quickly and easily find the papers they need. Simply
            </p>
            <p>
              search by subject, year, or educational board to access the
              resources you require.
            </p>
          </div>
          <div className="offer-second">
            <p>
              <b>Regular Updates:</b> We continually update our database with
              the latest question papers to ensure students have
            </p>
            <p>access to the most recent exam formats and trends.</p>
          </div>

          <h2 className="heading">Why Choose Us?</h2>

          <div className="Choose-us">
            <p>
              <b>Reliable Content: </b> All our question papers are sourced from
              reputable educational institutions and verified{" "}
            </p>
            <p>for accuracy and completeness.</p>
          </div>
          <div className="Choose-us">
            <p>
              <b>Free Access:</b> We believe in education for all. That’s why we
              offer free access to our extensive collection{" "}
            </p>{" "}
            <p>
              of past question papers, ensuring that financial constraints do
              not hinder academic success.
            </p>
          </div>
          <div className="Choose-us">
            <p>
              <b>Dedicated Support:</b> Our support team is always here to
              assist you. Whether you need help navigating our website
            </p>{" "}
            <p>
              or have specific questions about our resources, we are just a
              message away.
            </p>
          </div>
          <h2 className="heading">Join Us</h2>

          <p>
            Join the thousands of students who have benefited from our
            resources. Start practicing with PastPapersHub and take
          </p>
          <p> a significant step towards academic excellence.</p>

          <h2 className="heading"> Contact Us </h2>
          <p>
            Have questions or need assistance? Feel free to reach out to us at:
          </p>

          <p>
     
            <b>Email:</b> pyqwaladost@gmail.com
          </p>
          <p>
            Thank you for choosing Pyq Wala Dost. Your success is our priority!
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutPage;