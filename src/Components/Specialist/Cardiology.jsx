import React from 'react';
import { FaHeartbeat } from 'react-icons/fa';
import Heart from '../../Pictures/Heart.png'; 
import Priya from '../../Pictures/four.jpg';
import Aadhi from '../../Pictures/m6.jpg';
import Shalini from '../../Pictures/two.jpg';
import Footer2 from '../Footer2';
import { useEffect } from "react";
const Cardiology = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Ensure page starts at the top
  }, []);
  return (
    <div >
      <h1 className='hea'><FaHeartbeat className="hea" /> Cardiology Department</h1>
      <div className="cont" id="Cardiology">
      <div className="text-left">
                <h1>Cardiac Sciences</h1>
                <p>
                Since 2000, we've pioneered heart care and won the trust of millions we've served. As experts, we endeavour to treat and prevent cardiovascular diseases, 
                restoring health, and empowering individuals to lead active, fulfilling lives. 
                </p>
                <p>
                Our specialists utilise cutting-edge technology and advanced surgical techniques to deliver the highest standard of care across general cardiology, interventional cardiology, electrophysiology, cardiac surgery, heart failure management, and more, 
                including TAVI, Mitra Clip, Aortic Aneurysm Repair, Stent Grafting, Balloon Pulmonary Angioplasty, and CABG.
                </p>
              </div>
              <div className="image-right" id="Neurology">
                <img src={Heart} alt="Heart" width="500px" height="500px" />
              </div>
      </div>
      <div className='cont'>
              <div className="image-left" >
                <img src="https://media.post.rvohealth.io/wp-content/uploads/2020/09/Heart_Angioplasty_and_Stent_Placement-732x549-thumbnail.jpg" alt="Brain" width="500px" height="500px" /> 
              </div>
              <div className="text">
                <h1>Procedures</h1>
                <ul>
                <li><b>Angioplasty and Stenting:</b> Involve using a balloon to open blocked arteries, followed by the placement of a stent to keep the artery open, 
                improving blood flow and reducing symptoms of heart disease.</li>
                <li><b>Coronary Artery Bypass Surgery (CABG):</b> Creates new pathways around blocked arteries to restore blood flow to the heart muscle, improving survival rates and quality of life.</li>
                <li><b>Heart Valve Repair/Replacement:</b> Repairing or replacing damaged heart valves to restore normal heart function and improve patient outcomes.</li>
                <li><b>Ablation Therapy:</b>Uses energy to create small scars in the heart tissue to block abnormal electrical signals, effectively treating arrhythmias.</li>
                <li><b>Pacemaker/ICD Implantation: </b>Implanting devices to regulate heart rhythm, ensuring consistent and effective heart function.</li>
                <li><b>TAVI (Transcatheter Aortic Valve Implantation): </b>A minimally invasive procedure to replace a narrowed aortic valve, improving blood flow and reducing symptoms.</li>
                <li><b>Mitra Clip: </b>A minimally invasive treatment for mitral valve regurgitation, clipping together a portion of the valve to reduce leakage and improve heart function.</li>
                <li><b>Aortic Aneurysm Repair: </b>Surgically repairing a weakened and bulging section of the aorta to prevent rupture and improve patient outcomes.</li>
                </ul>
              </div>
    </div>
    <div className='cont'>
              <div className="image-left" >
                <img src="https://www.politico.eu/cdn-cgi/image/width=1160,height=774,quality=80,onerror=redirect,format=auto/wp-content/uploads/2023/10/03/JPG_Large-DV_LS_Xi_OR_DualConsole_1_0920_RGB_1600.jpg" alt="Brain" width="500px" height="500px" /> 
              </div>
              <div className="text">
                <h1>Technologies Used</h1>
                <ul>
                <li><b>Echocardiogram:</b> Provides detailed images of the heart's structure and function, essential for accurate diagnosis and treatment planning.</li>
                <li><b>Electrocardiogram (ECG):</b>  Measures the heart's electrical activity to diagnose arrhythmias and other heart conditions.</li>
                <li><b>Cardiac MRI:</b> Offers detailed images of the heart's anatomy and function, aiding in diagnosing and managing complex heart diseases.</li>
                <li><b>CT Angiography:</b> Provides cross-sectional images of the coronary arteries, which are important for assessing blockages & planning interventions.</li>
                <li><b>Robotic Surgery: </b>Enables minimally invasive heart surgeries with enhanced precision and faster recovery times.</li>
                <li><b>3D Mapping Systems: </b>Used in electrophysiology to accurately locate and treat arrhythmias, improving the success rates of ablation procedures.</li>
                </ul>
              </div>
    </div>
    <div className='cont'>
              <div className="image-left" >
                <img src="https://img.freepik.com/premium-vector/vector-doctor-medical-hospital-health-medicine-illustration-care-man-clinic-people-profes_1158065-1370.jpg?semt=ais_hybrid" alt="Brain" width="500px" height="500px" /> 
              </div>
              <div className="text">
                <h1>When to Consult</h1>
                <ul>
                <li><b>Chest Pain:</b>  Consult a cardiologist immediately if you experience chest pain, pressure, or discomfort, which may indicate a heart problem.</li>
                <li><b>Shortness of Breath: </b>Seek medical advice if you have unexplained shortness of breath, especially during physical activity or while lying down.</li>
                <li><b>Palpitations: </b>Book an appointment with a doctor if you experience irregular heartbeats, fluttering, or a racing heart.</li>
                <li><b>High Blood Pressure:</b> Individuals with high blood pressure should seek personalised risk assessment and management to prevent heart disease.</li>
                <li><b>Family History:</b> Consult a specialist if you have a family history of heart disease, as you may be at higher risk and benefit from preventive check-ups.</li>
                </ul>
              </div>
    </div>
    <div  className='contain'>
      <div>
        <img src={Priya} alt="priya" width="400px" height="400px"></img>
        <div className='txt'>
        <p >Dr.Priyasagi </p>
        <p>Qualification:MBBS., DCH., DNB</p>
        <p>Experience:12 Years</p>
        </div>
      </div>
      <div>
        <img src={Aadhi} alt="priya" width="400px" height="400px"></img>
        <div className='txt'>
        <p >Dr.Aadhithiya </p>
        <p>Qualification:MD., DNB (Cardiology)</p>
        <p>Experience:10 Years</p>
        </div>
      </div>
      <div>
        <img src={Shalini} alt="priya" width="400px" height="400px"></img>
        <div className='txt'>
        <p >Dr.Shalini </p>
        <p>Qualification:MBBS,MD,DM</p>
        <p>Experience:5 Years</p>
        </div>
      </div>
    </div>
    <Footer2/>
</div>
  );
}

export default Cardiology;
