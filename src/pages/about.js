/*TODO: in NEXTjs its not neccesary import react from react  */
//import React from 'react'
import Image from "next/image";
//import Link from "next/link";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const About = () => {
  const apiLink =
    "https://github.com/r-spacex/SpaceX-API/blob/master/docs/v4/README.md#ships---schema";
  return (
    <div>
      <Navbar />
      <div className="about">
        <div className="about__project">
          <h1>About this project</h1>
          <p>
            This website was built to learn more about an Api´s functionality, I
            decided to work with one of the Space X Api. It´s a simple project
            created with the only purpose to practice the acquired abilities in
            the Platzi Nextjs course.
          </p>
        </div>
        <div className="about__tech">
          <h1>Technologies Used in this website</h1>
          <div className="about__tech__images">
            <div className="images__item">
              <Image src="/next.png" width={150} height={120} />
            </div>
            <div className="images__item">
              <Image src="/rr.png" width={150} height={120} />
            </div>
            <div className="images__item">
              <Image src="/vercel.png" width={150} height={120} />
            </div>
          </div>
        </div>
        <div className="about__api">
          <h1>Api used in this project</h1>
          <p>
            I am not affiliated, associated, authorized, endorsed by, or in any
            way officially connected with Space Exploration Technologies Inc
            (SpaceX), or any of its subsidiaries or its affiliates. The names
            SpaceX as well as related names, marks, emblems and images are
            registered trademarks of their respective owners.
          </p>
          <h5>Apik link :</h5>
          <a href={apiLink} target="_blank">
            Github Api
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;

/* 
<p>esta pagina es navbar/about</p>
<Image src="/next.png" width={200} height={200} /> */
