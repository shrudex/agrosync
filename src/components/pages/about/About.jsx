import React from "react";
import Profile from "./Profile";
import "./About.css";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
const About = () => {
  let subtitle =
    "Meet the Visionaries, Innovators, and Agriculture Enthusiasts Who Form the Core of Agrosync, a Team Committed to Revolutionizing Farming Through Cutting-Edge Technology, Sustainable Practices, and a Shared Dedication to Feeding the World.";

  const teamMembers = [
    {
      name: "Shubh Sinha",
      role: "React.js Developer",
      description: "Handled the front-end part of the Agrosync",
      linkedin: "https://www.linkedin.com/in/codeshubh/",
      github: "https://github.com/shrudex",
      email: "realshubhsinha@gmail.com",
      instagram: "https://www.instagram.com/iamshubhsinha/",
      imgSrc: "./images/shubh-sinha.jpg",
    },
    {
      name: "Ishaan Sachdeva",
      role: "Deep Learning Scientist",
      description: "Trained the classification model for disease detection",
      linkedin: "http://www.linkedin.com/in/ishaan-sachdeva-9a6b72233",
      github: "https://github.com/Ishaan-73",
      email: "ishaansachdeva7@gmail.com",
      instagram: "https://www.instagram.com/_ishaan.73/",
      imgSrc: "./images/ishaan-sachdeva.jpg",
    },
    {
      name: "Akshay Singh",
      role: "Machine Learning Engineer ",
      description: "Preprocessed the datasets used",
      linkedin: "https://www.linkedin.com/in/akshay-singh-754960219/",
      github: "https://github.com/akshays1ngh",
      email: "contact.akshaysingh.7@gmail.com",
      instagram: "#",
      imgSrc: "./images/akshay-singh.jpg",
    },
  ];

  const teamMembers2 = [
    {
      name: "Dev Thakkar",
      role: "Backend Developer",
      description: "Handled the back-end part of the Agrosync",
      linkedin: "https://www.linkedin.com/in/dev-thakkar-0854891b0/",
      github: "http://www.github.com/devt-10",
      email: "devt1209@gmail.com",
      instagram: "https://www.instagram.com/devt.10",
      imgSrc: "./images/dev-thakkar.jpg",
    },

    {
      name: "Harshita Matkan",
      role: "Data Scientist",
      description: "Worked on image processing and recommendation",
      linkedin: "https://www.linkedin.com/in/harshita-matkan-936237231/",
      github: "https://github.com/harshitamatkan2511",
      email: "harshitamatkan02@gmail.com",
      instagram: "https://www.instagram.com/_harshita2511/",
      imgSrc: "./images/harshita.jpg",
    },
    {
      name: "Dishita Mohan",
      role: "Machine Learning Researcher",
      description: "Worked on creating a CNN model",
      linkedin: "https://www.linkedin.com/in/dishita-mohan-304413227",
      github: "https://github.com/dishitamohan",
      email: "mohan.dishita@gmail.com",
      instagram: "https://www.instagram.com/dishitamohan/",
      imgSrc: "./images/dishita.jpg",
    },
  ];

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="col-md-12 text-center">
          <p className="about-title">
            Meet the Minds Behind
            <span className="about-title-span">
              <b> Agrosync</b>
            </span>
          </p>
          
          <p className="about-section-subtitle">{subtitle}</p>
        </div>
        <div className="about-team-content">
          {teamMembers.map((member, index) => (
            <Profile key={index} {...member} />
          ))}
          {teamMembers2.map((member, index) => (
            <Profile key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
