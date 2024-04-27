import React, { useContext, useRef } from 'react';
import SearchBar from "../../components/searchBar/SearchBar";
import './homePage.scss';
import { AuthContext } from "../../context/AuthContext";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const HomePage = () => {
  const { currentUser } = useContext(AuthContext);
  const videoRef = useRef(null);

  const toggleFullScreen = () => {
    const video = videoRef.current;

    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.mozRequestFullScreen) { /* Firefox */
      video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { /* IE/Edge */
      video.msRequestFullscreen();
    }
  };

  return (
    <section className='sec'>
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Unearth Your Optimal Property Selection</h1>
          <h3>Effortlessly find your ideal property variety</h3>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>15+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200+</h1>
              <h2>Happy Customers</h2>
            </div>
            <div className="box">
              <h1>28+</h1>
              <h2>Builders and Designers</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
     
    </div>
    <div className="videoContainer">
     <video
       ref={videoRef}
       className="video"
       controls
       autoPlay
       onClick={toggleFullScreen}
     >
       <source src="./video.MP4" type="video/mp4" />
       
     </video>
   </div>
   <div className="footer">
      <div className="container">
        <div className="e row">

          <div className=" q col-md-4">
            <img className="im" src="logo4.png" />
            <h4 className="q1">Quick Links</h4>
            <ul className="l1">
              <li className="/"><a href="/">Home</a></li>
              <li><a href="/list">Properties</a></li>
              <li><a href=" https://www.justdial.com/Hyderabad/Vasundhara-Electricals-And-Engineering-Nacharam/040PXX40-XX40-090825125338-N3D4_BZDET" target="_blank" rel="noopener noreferrer">Contact Us</a></li><br />
            </ul>
          </div>
          <div id="contact-us"className="c1 col-md-4">

            <h2 className="c">Contact Us</h2>
            <p>Hyderabad, Telangana</p>
            <p>Email: vasundara150@gmail.com</p>
            <p>Phone: +9000966037</p>
          </div>

          <div className="r col-md-4 social">
            <h4 className="r1">Follow us on Social Media</h4>

            <div className="iconn">
              <a href="https://www.facebook.com"><FaFacebook size={25} /></a>
              <a href="https://www.instagram.com"><FaInstagram size={25} /></a>
              <a href="https://www.twitter.com"><FaTwitter size={25} /></a>
         

            </div>

          </div>
        </div>
      </div>
    </div>
   </section>
  );
};

export default HomePage;
