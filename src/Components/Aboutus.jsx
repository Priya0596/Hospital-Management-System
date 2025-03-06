import React from "react";
import hos3 from "../Pictures/hos3.jpg"; // Ensure the image path is correct
import { FaGem, FaCheckCircle, FaUsers } from "react-icons/fa";
import Footer2 from "./Footer2";

const AboutUs = () => {
  return (
    <div className="about-us">
      {/* Hero Section with Background Image */}
      <div className="hero">
        <img src={hos3} alt="Hospital" className="hero-image" />
        <div className="hero-overlay">
          <h1>Welcome to Priya's Hospital</h1>
          <p className="txt"><b>Established in the year 1961, Priya's Hospital has emerged as a premier healthcare institution providing quality tertiary care to domestic. 
            Priya's Hospital, with 1032 beds, is one of the largest private healthcare centers in India. It is an apex teaching hospital attached to Priya's Medical College, Krishnagiri and 
            an associate hospital of the Krishnagiri Academy of Higher Education. Spread over 11,25, 000 sq. ft. , Priya's Hospital caters to an average of 3000 outpatients and 200 admissions each day. 
            Patients come from almost all Indian States including many International patients.</b></p>
        </div>
      </div>

      {/* Information Section */}
      <div className="info-section">
        <h2 className="section-title">
          <FaGem className="icon" /> Quality Policy
        </h2>
        <p className="description">
          Priya's Hospital is committed to meeting patient needs and increasing satisfaction
          through continual improvement of its services, quality management system, and
          staff empowerment. We aim to deliver holistic, patient-friendly healthcare to the community.
        </p>

        {/* Cards Section */}
        <div className="cards">
          <div className="card">
            <FaCheckCircle className="card-icon" />
            <h3>Vision</h3>
            <p>Global leadership in human development, excellence in education, and healthcare.</p>
          </div>
          <div className="card">
            <FaCheckCircle className="card-icon" />
            <h3>Mission</h3>
            <p>
              Commitment to being the most preferred hospital through clinical excellence,
              patient-centric care, and ethical practices.
            </p>
          </div>
          <div className="card">
            <FaUsers className="card-icon" />
            <h3>Core Values</h3>
            <p>
              <ul>
              <li>Integrity</li>
              <li>Transparency</li>
              <li>Quality</li>
              <li>Team Work</li>
              <li>Execution with Passion</li>
              </ul> 
            </p>
          </div>
        </div>
      </div>
      <Footer2/>
    </div>
  
  );
};

export default AboutUs;
