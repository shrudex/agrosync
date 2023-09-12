import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <section>
        <div className="left-text">
          <p>Revolutionizing Agriculture with <br></br> <span>Agrosync</span></p>
          <div className="btn-text">
            <p>
              Agrosync is an AI-powered web app designed to enhance the primary
              sector of India – Agriculture.
               
              <br />Our innovative solutions, including
              crop disease detection, weather information extraction, and farm
              management, help farmers optimize their crops and produce.
            </p>
            <button>View All Services</button>
          </div>
        </div>
          <img src="./images/land2.png" alt="" className="right-image"/>
      </section>
    </div>
  );
};

export default Home;
