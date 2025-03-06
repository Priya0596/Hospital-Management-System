import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import SpecialistDetail from "./Components/Specialist/SpecialistDetails";
import AboutUs from "./Components/Aboutus";
import DoctorDetails from "./Components/Doctordetails";
import Front from "./Components/Front";
import Specialist from "./Components/Specialist";
import Cardiology from "./Components/Specialist/Cardiology";
import Neurology from "./Components/Specialist/Neurology";
import Pulmonology from "./Components/Specialist/Pulmonology";
import Orthopedics from "./Components/Specialist/Orthopedic";
import GeneralSurgery from "./Components/Specialist/GeneralSurgery";
import Login from "./Components/Login";
import Medicalservice from "./Components/Medicalservice";
import HealthPackage from "./Components/Specialist/HealthPackage";
import './App.css';
import Signup from "./Components/Signup";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/specialists" element={<Specialist />} />
        <Route path="/specialist/:specialty" element={<SpecialistDetail />} />
        <Route path="/doctors/:specialty" element={<DoctorDetails />} />
        <Route path="/" element={<Front />} />
        <Route path="/health-package" element={<HealthPackage/>}/>
        <Route path="/medical" element={<Medicalservice/>}/>
        <Route path="/cardiology" element={<Cardiology />} />
        <Route path="/neurology" element={<Neurology />} />
        <Route path="/pulmonology" element={<Pulmonology />} />
        <Route path="/orthopedics" element={<Orthopedics />} />
        <Route path="/general-surgery" element={<GeneralSurgery />} />
      </Routes>
    </Router>
  );
}
export default App;