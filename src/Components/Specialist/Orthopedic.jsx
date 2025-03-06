import React from 'react';
import { FaBone } from 'react-icons/fa';
import Kesu from '../../Pictures/five.jpg';
import Sangu from '../../Pictures/three.jpg';
import Venkat from '../../Pictures/m4.jpg';
import Footer2 from '../Footer2';
import { useEffect } from "react";
const Orthopedics = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Ensure page starts at the top
  }, []);
  return (
    <div>
      <h1><FaBone className="hea" /> Orthopedics Department</h1>
      <div className="cont" id="Orthopedics">
        <div className="text-left">
          <h1>Advanced Orthopedic Care</h1>
          <p>
            Our Orthopedics Department offers specialized care for a wide range of musculoskeletal disorders, including fractures, arthritis, sports injuries, and spinal conditions. Our team of expert orthopedic surgeons and specialists employ the latest medical advancements to ensure effective treatment and faster recovery.
          </p>
          <p>
            We utilize advanced imaging technologies such as MRI, CT scans, and digital X-rays for accurate diagnosis, alongside state-of-the-art surgical techniques including robotic-assisted surgery, minimally invasive procedures, and 3D printing for customized implants.
          </p>
        </div>
        <div className="image-right">
          <img src="https://sayaamed.com/wp-content/uploads/2022/01/Orthopedics-in-sayaa-med-1.jpg" alt="Orthopedic Care" width="500px" height="500px" />
        </div>
      </div>
      
      <div className='cont'>
        <div className="image-left">p
          <img src="https://www.chaudharyhospital.in/wp-content/uploads/2021/03/orthopedic-surgery-in-udaipur.jpg" alt="Orthopedic Surgery" width="500px" height="500px" />
        </div>
        <div className="text">
          <h1>Procedures</h1>
          <ul>
            <li><b>Joint Replacement Surgery:</b> Includes knee, hip, and shoulder replacements using minimally invasive techniques for faster recovery.</li>
            <li><b>Arthroscopy:</b> A minimally invasive procedure for diagnosing and treating joint issues such as ligament tears and cartilage damage.</li>
            <li><b>Spinal Surgery:</b> Procedures to treat conditions like herniated discs, spinal stenosis, and scoliosis.</li>
            <li><b>Fracture Management:</b> Advanced treatments for complex fractures using internal fixation, external fixation, and bone grafting.</li>
            <li><b>Sports Medicine:</b> Specialized treatment for sports injuries, including ligament reconstruction, tendon repairs, and rehabilitation programs.</li>
            <li><b>Orthopedic Oncology:</b> Diagnosis and treatment of bone tumors with specialized surgical interventions.</li>
          </ul>
        </div>
      </div>
      
      <div className='cont'>
        <div className="image-left">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb3pUsqc0w8c_1omJ9kjYL44i5rNfm950CB9cxRxfZTbtdnCljK65AdidyqCYDNso9sXs&usqp=CAU" alt="Orthopedic Technology" width="500px" height="500px" />
        </div>
        <div className="text">
          <h1>Technologies Used</h1>
          <ul>
            <li><b>Robotic-Assisted Surgery:</b> Enhances precision and improves outcomes in joint replacement and spine surgeries.</li>
            <li><b>3D Printing:</b> Used for creating customized implants and surgical planning.</li>
            <li><b>Minimally Invasive Surgery:</b> Reduces recovery time and postoperative complications.</li>
            <li><b>Advanced Imaging:</b> MRI, CT scans, and digital X-rays for accurate diagnosis and treatment planning.</li>
            <li><b>PRP Therapy:</b> Platelet-rich plasma therapy to accelerate healing in musculoskeletal injuries.</li>
          </ul>
        </div>
      </div>
      
      <div className='cont'>
        <div className="image-left">
          <img src="https://img.freepik.com/premium-vector/vector-doctor-medical-hospital-health-medicine-illustration-care-man-clinic-people-profes_1158065-1370.jpg?semt=ais_hybrid" alt="Consultation" width="500px" height="500px" />
        </div>
        <div className="text">
          <h1>When to Consult</h1>
          <ul>
            <li><b>Chronic Joint Pain:</b> If you experience persistent joint pain, stiffness, or swelling, it is advisable to consult an orthopedic specialist.</li>
            <li><b>Limited Mobility:</b> Difficulty in movement or performing daily activities may indicate underlying orthopedic conditions.</li>
            <li><b>Injury:</b> Any sports injury, fractures, or sprains that do not heal properly should be evaluated.</li>
            <li><b>Back and Neck Pain:</b> Persistent discomfort in the back or neck, particularly if accompanied by numbness or weakness, requires medical attention.</li>
            <li><b>Post-Surgical Rehabilitation:</b> Consultation for physical therapy and post-operative care after an orthopedic surgery.</li>
          </ul>
        </div>
      </div>
       <div  className='contain'>
            <div>
              <img src={Kesu} alt="priya" width="400px" height="400px"></img>
              <div className='txt'>
              <p >Dr.Kesavardhini </p>
              <p>Qualification:D.Ortho, DNB (Ortho)</p>
              <p>Experience:10 Years</p>
              </div>
            </div>
            <div>
              <img src={Sangu} alt="priya" width="400px" height="400px"></img>
              <div className='txt'>
              <p >Dr.Sangavi </p>
              <p>Qualification:	MS (Ortho)</p>
              <p>Experience:5 Years</p>
              </div>
            </div>
            <div>
              <img src={Venkat} alt="priya" width="400px" height="400px"></img>
              <div className='txt'>
              <p >Dr.Venkat</p>
              <p>Qualification:MS (Ortho)</p>
              <p>Experience:7 Years</p>
              </div>
            </div>
          </div>
          <Footer2/>
    </div>
  );
};

export default Orthopedics;