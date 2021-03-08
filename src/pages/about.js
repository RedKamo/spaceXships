/*TODO: in NEXTjs its not neccesary import react from react  */
//import React from 'react'
import Image from "next/image";
import Link from "next/link";
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
          <h2>Technologies Used in this website</h2>
          <div className="about__tech__images">
            <Image src="/next.png" width={200} height={200} />
            <Image src="/react.png" width={200} height={140} />
            <Image src="/vercel.png" width={200} height={120} />
          </div>
        </div>
        <div className="about__api">
          <h2>Api used in this project</h2>
          <a href={apiLink} target="_blank">
            Github api
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;

/* 
<p>esta pagina es navbar/about</p>
<Image src="/next.png" width={200} height={200} /> */
