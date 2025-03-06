import React from 'react';
import { FaLungs } from 'react-icons/fa';
import Purni from '../../Pictures/]priya.jpg';
import Rithu from '../../Pictures/two.jpg';
import Aadhav from '../../Pictures/m4.jpg';
import Footer2 from '../Footer2';
import { useEffect } from "react";
const Pulmonology = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Ensure page starts at the top
  }, []);
  return (
    <div >
      <h2><FaLungs className="hea" /> Pulmonology Department</h2>
      <div className="cont" id="Pulmonology">
      <div className="text-left">
                <h1>Respiratory Sciences</h1>
                <p>
                Our Pulmonology department specializes in the diagnosis, treatment, and management of respiratory disorders. 
                We provide expert care for conditions such as asthma, chronic obstructive pulmonary disease (COPD), interstitial lung disease, lung infections, and sleep disorders.
                </p>
                <p>
                Using advanced diagnostic tools like pulmonary function tests (PFT), bronchoscopy, and high-resolution imaging, we ensure precise diagnoses and tailored treatment plans. 
                Our team is dedicated to helping patients breathe easier and improve their lung health.
                </p>
              </div>
              <div className="image-right" id="Pulmonology">
                <img src="https://i0.wp.com/www.mounthospitals.com/wp-content/uploads/2023/03/Chest-physician.jpg?resize=977%2C635&ssl=1" alt="Lungs" width="500px" height="500px" />
              </div>
      </div>
      <div className='cont'>
              <div className="image-left" >
                <img src="https://barstowhospital.com/wp-content/uploads/2021/04/PulmonologyFeaturedImage-400x250.jpg" alt="Lung Scan" width="500px" height="500px" /> 
              </div>
              <div className="text">
                <h1>Procedures</h1>
                <ul>
                <li><b>Bronchoscopy:</b> A procedure that allows doctors to examine the airways using a flexible camera to diagnose infections, tumors, or blockages.</li>
                <li><b>Pulmonary Function Tests (PFT):</b> A series of tests that measure lung capacity and airflow to diagnose and monitor respiratory conditions.</li>
                <li><b>Thoracentesis:</b> A minimally invasive procedure to remove excess fluid from the space around the lungs, easing breathing difficulties.</li>
                <li><b>Sleep Apnea Treatment:</b> Management of sleep disorders through CPAP therapy and other interventions to improve breathing during sleep.</li>
                <li><b>Lung Biopsy:</b> A procedure used to take tissue samples from the lung to diagnose conditions like lung cancer or infections.</li>
                <li><b>Oxygen Therapy:</b> Providing supplemental oxygen to patients with chronic respiratory conditions to improve oxygen levels in the blood.</li>
                </ul>
              </div>
    </div>
    <div className='cont'>
              <div className="image-left" >
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAoobluL2bUp1j2TWQLxlNdL-_X4pblTr2zg&s" alt="Lung Scan" width="500px" height="500px"/> 
              </div>
              <div className="text">
                <h1>Technologies Used</h1>
                <ul>
                <li><b>High-Resolution CT Scan:</b> Provides detailed imaging of the lungs to diagnose various lung diseases.</li>
                <li><b>Non-Invasive Ventilation (NIV):</b> Helps patients with respiratory failure breathe more easily without invasive procedures.</li>
                <li><b>ECMO (Extracorporeal Membrane Oxygenation):</b> Used for severe lung failure to provide oxygen directly to the blood.</li>
                <li><b>Pulse Oximetry:</b> A non-invasive test that measures oxygen saturation levels in the blood.</li>
                <li><b>Robotic-Assisted Surgery:</b> Advanced minimally invasive lung procedures for precise treatment and faster recovery.</li>
                </ul>
              </div>
    </div>
    <div className='cont'>
              <div className="image-left" >
                <img src="https://img.freepik.com/premium-vector/vector-doctor-checking-lung-health-hospital-medical-illustration_1158065-1370.jpg" alt="Consultation" width="500px" height="500px" /> 
              </div>
              <div className="text">
                <h1>When to Consult</h1>
                <ul>
                <li><b>Chronic Cough:</b> A persistent cough lasting more than three weeks should be evaluated by a pulmonologist.</li>
                <li><b>Shortness of Breath: </b>Seek medical advice if you experience difficulty breathing, especially during physical activity.</li>
                <li><b>Frequent Respiratory Infections:</b> If you suffer from recurrent lung infections or bronchitis, a pulmonologist can help.</li>
                <li><b>Sleep Disorders:</b> If you have symptoms of sleep apnea such as snoring or excessive daytime fatigue, a lung specialist can assess your condition.</li>
                <li><b>Exposure to Pollutants:</b> If you have been exposed to smoke, dust, or chemicals and experience breathing issues, consult a pulmonologist.</li>
                </ul>
              </div>
    </div>
     <div  className='contain'>
          <div>
            <img src={Purni} alt="priya" width="400px" height="400px"></img>
            <div className='txt'>
            <p >Dr.Purnima </p>
            <p>Qualification:	MD.,DNB.,HERMES.,DAA</p>
              <p>Experience:6 Years</p>
            </div>
          </div>
          <div>
            <img src={Rithu} alt="priya" width="400px" height="400px"></img>
            <div className='txt'>
            <p >Dr.Rithu </p>
            <p>Qualification:	MBBS, MD( Respiratory Medicine), DM (Pulmonary Medicine)</p>
              <p>Experience:4 Years</p>
            </div>
          </div>
          <div>
            <img src={Aadhav} alt="priya" width="400px" height="400px"></img>
            <div className='txt'>
            <p >Dr.Adhav </p>
            <p>Qualification:	MBBS, MD( Respiratory Medicine)</p>
              <p>Experience:8 Years</p>
            </div>
          </div>
        </div>
        <Footer2/>
    </div>
  );
};

export default Pulmonology;