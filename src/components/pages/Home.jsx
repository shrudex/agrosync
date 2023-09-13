import React from "react";
import "./Home.css";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import Services from "./Services";

const Home = () => {
  const scrollToSection = () => {
    //scrolling logic here
    const targetSection = document.getElementById("services");
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const services = [
    {
      img: "./images/disease.jpg",
      title: "Crop Disease Detection",
      description:
        "Our Crop Disease Detection service uses advanced image processing and machine learning algorithms to provide accurate diagnosis of crop diseases in real-time.",
    },
    {
      img: "./images/land2.png",
      title: "Web App Design",
      description:
        "Our Farm Management App provides farmers with comprehensive features, from crop planning to monitoring and reporting, to streamline the farm management process.",
    },
    {
      img: "./images/land3.png",
      title: "Weather Analysis",
      description:
        "Our Weather Information Extraction service provides farmers with reliable real-time updates on critical weather information, helping them make informed decisions about crop management",
    },
  ];

  return (
    <div className="home">
      <section>
        <div className="left-text">
          <p>
            Revolutionizing Agriculture with <br></br> <span>Agrosync</span>
          </p>
          <div className="btn-text">
            <p>
              Agrosync is an AI-powered web app designed to enhance the primary
              sector of India – <b>Agriculture</b>.
              <br />
              Our innovative solutions, including crop disease detection,
              weather information extraction, and farm management, help farmers
              optimize their crops and produce.
            </p>
            <button onClick={scrollToSection}>View All Services</button>
          </div>
        </div>
        <img
          src="./images/land3.png"
          alt="farmer-land"
          className="right-image"
        />
      </section>

      <section id="services">
        <div className="upper-text">
          <p>Our Services</p>
          <button>View All Services</button>
        </div>
        <div className="lower-body">
          {services.map((service, index) => (
            <Services
              key={index} // Make sure to provide a unique key for each iteration
              img={service.img}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
