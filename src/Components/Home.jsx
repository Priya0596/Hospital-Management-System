import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import hoslogo from '../Pictures/hoslogo.webp'; 
import doctor from '../Pictures/doctor.png';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import ContactUs from './Contact';
import Appointment from './Appoint';
import Emergency from './Emergency';
import QuickFacts from './Specialist/Quikfact';
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  const [openAppointment, setOpenAppointment] = useState(false);
  const [openEmergency, setOpenEmergency] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInitial, setUserInitial] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    const userData = JSON.parse(localStorage.getItem("user"));
    
    if (loggedIn && userData) {
      setIsLoggedIn(true);
      setUserInitial(userData.name ? userData.name.charAt(0).toUpperCase() : '');
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/");
  };
  
  return (
    <>
      <div className="hospital-container">
        <div className="hospital-header">
          <img src={hoslogo} alt="Hospital Logo" className="hospital-logo" />
          <h1 className="hospital-name">PRIYA'S HOSPITAL</h1>
        </div>
        <nav className="nav">
          <div className="nav-buttons">
          <Link to="/about"><button className="nav-button">About Us</button></Link>
          <Link to="/medical"><button className="nav-button">Medical Service</button></Link>
          <div 
              className="dropdown"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <button className="nav-button">Specialists</button>
              {showDropdown && (
                <div className="dropdown-menu">
                  <Link to="/cardiology" className="dropdown-item">Cardiology</Link>
                  <Link to="/neurology" className="dropdown-item">Neurology</Link>
                  <Link to="/pulmonology" className="dropdown-item">Pulmonology</Link>
                  <Link to="/orthopedics" className="dropdown-item">Orthopedics</Link>
                  <Link to="/general-surgery" className="dropdown-item">General Surgery</Link>
                </div>
              )}
            </div>
            <Link to="/health-package"><button className="nav-button">Health Packages</button></Link>
            <button className="nav-button" onClick={() => setOpenAppointment(true)}>Appointment</button>
            <button className="nav-button" onClick={() => setOpenEmergency(true)}>
              <AddIcCallIcon fontSize="small" style={{ verticalAlign: 'middle', marginLeft: '10px', marginRight: '10px' }} />
              Emergency
            </button>
            <div className="user-section">
              {isLoggedIn ? (
                <button className="logout-button" onClick={handleLogout}>
                  <span className="user-icon">{userInitial}</span> Logout
                </button>
              ) : (
                <>
                  <Link to="/login"><button className="nav-button">Login</button></Link>
                  <Link to="/signup"><button className="nav-button">Signup</button></Link>
                </>
              )}
            </div>
          </div>
        </nav>
      </div>

      <h1 className="head">WELCOME TO PRIYA'S HOSPITAL</h1>

      <div className="con">
        <div className="text-left">
          <p>
            Our hospital is dedicated to providing exceptional healthcare services with a focus on patient-centered care, advanced medical technology, and a compassionate approach. 
            We offer a wide range of specialized treatments, including emergency care, diagnostic services, surgical procedures, and outpatient care. 
            Our team of highly skilled doctors, nurses, and healthcare professionals work tirelessly to ensure the best possible outcomes for our patients. 
            With state-of-the-art facilities and a commitment to innovation, we strive to deliver world-class medical care in a safe and comfortable environment.
          </p>
        </div>
        <div className="image-right">
          <img src={doctor} alt="Doctor" width="400px" height="400px" />
        </div>
      </div>

      <QuickFacts />
      <ContactUs />

      <Appointment open={openAppointment} handleClose={() => setOpenAppointment(false)} />
      <Emergency open={openEmergency} handleClose={() => setOpenEmergency(false)} />
    </>
  );
}
