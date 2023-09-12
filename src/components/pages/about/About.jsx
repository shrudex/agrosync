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
      role: "ML Scientist",
      description: "Trained the classification model for disease detection",
      linkedin: "http://www.linkedin.com/in/ishaan-sachdeva-9a6b72233",
      github: "https://github.com/Ishaan-73",
      email: "ishaansachdeva7@gmail.com",
      instagram: "https://www.instagram.com/_ishaan.73/",
      imgSrc: "./images/ishaan-sachdeva.jpg",
    },
    {
      name: "Akshay Singh",
      role: "ML Scientist ",
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
      linkedin: "#",
      github: "#",
      email: "#",
      instagram: "#",
      imgSrc: "./images/d1.png",
    },

    {
      name: "Harshita M",
      role: "ML Scientist",
      description: "Worked on image processing and recommendation",
      linkedin: "#",
      github: "#",
      email: "#",
      instagram: "#",
      imgSrc: "./images/d2.png",
    },
    {
      name: "Dishita Mohan",
      role: "ML Scientist",
      description: "Worked on creating a CNN model",
      linkedin: "#",
      github: "#",
      email: "#",
      instagram: "#",
      imgSrc: "./images/d2.png",
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="col-md-12 text-center">
          <p className="title">
            Meet the Minds Behind
            <span className="title-span">
              <b> Agrosync</b>
            </span>
          </p>
          
          <p className="section-subtitle">{subtitle}</p>
        </div>
        <div className="team-content">
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
