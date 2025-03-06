import React from 'react';
import { FaBrain } from 'react-icons/fa';
import Mithunaa from '../../Pictures/mithu.jpg';
import John from '../../Pictures/m1.jpg';
import Shalini from '../../Pictures/two.jpg';
import Footer2 from '../Footer2';
import { useEffect } from "react";
const Neurology = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Ensure page starts at the top
  }, []);
  return (
    <div>
      <h1><FaBrain className="hea" /> Neurology Department</h1>
      <div className="cont" id="Neurology">
        <div className="text-left">
          <h1>Neuro Sciences</h1>
          <p>
            Narayana Health is one of the leading neurology hospitals in India. We offer specialised care for a wide range of neurological disorders in adults & children, and are equipped with advanced technologies, including MRI, CT scanning, EEG, 
            EMG, PET scanning, and stereotactic radiosurgery systems.
          </p>
          <p>
            Our expert neurologists and neurosurgeons also utilise neuro-navigation systems, intraoperative neuro-monitoring, and advanced microscopy to provide comprehensive care for conditions affecting the brain, spine, nerves, and muscles. 
            Additionally, we use intraoperative MRI, endovascular therapy devices, spinal navigation systems, neurostimulation devices, and 3D printing for precise surgical planning.
          </p>
        </div>
        <div className="image-right" id="Neurology">
          <img src="https://www.pharmaadda.in/wp-content/uploads/2023/05/Top-10-Neurology-Medicine-Companies-In-India.jpg" alt="Neurology" width="500px" height="500px" />
        </div>
      </div>
      <div className='cont'>
        <div className="image-left">
          <img src="https://www.epilepsy.com/sites/default/files/upload/image/Mayo-types-surgery-3260932_0020-OG-TW.jpg" alt="Brain Surgery" width="500px" height="500px" /> 
        </div>
        <div className="text">
          <h1>Procedures</h1>
          <ul>
            <li><b>Neurointerventional Procedures: </b> Minimally invasive procedures, including thrombectomy for stroke and coiling for aneurysms, are performed to treat neurovascular conditions. These techniques offer 
            faster recovery and improved outcomes by addressing issues such as blocked blood vessels or aneurysms with high precision.</li>
            <li><b>Epilepsy Surgery:</b> For patients with epilepsy who do not respond to medication, surgical interventions such as resective surgery and vagus nerve stimulation (VNS) are available. These procedures significantly improve seizure control.</li>
            <li><b>Spinal Surgery:</b> These surgeries help treat spinal cord injuries, herniated discs, spinal stenosis, degenerative disc disease, scoliosis, spinal fractures, tumours & infections, failed back surgery syndrome (FBSS) and correct spinal deformities while minimising recovery time & improving patient outcomes.</li>
            <li><b>Deep Brain Stimulation (DBS):</b> DBS is a surgical procedure used to treat movement disorders such as Parkinson's disease, essential tremor, and dystonia. It involves implanting a device that sends electrical impulses to targeted brain areas, improving motor function and reducing symptoms such as tremors, rigidity, and involuntary movements.</li>
            <li><b>Lumbar Puncture (Spinal Tap): </b>This diagnostic procedure involves collecting cerebrospinal fluid from the spinal canal for testing. It is vital for diagnosing meningitis, multiple sclerosis, and other central nervous system disorders.</li>
            <li><b>Stereotactic Radiosurgery:  </b>A non-invasive procedure that uses focused radiation to treat brain tumours, arteriovenous malformations (AVMs), and other brain abnormalities. Stereotactic radiosurgery precisely targets specific areas while minimising damage to nearby healthy tissues.</li>
          </ul>
        </div>
      </div>
      <div className='cont'>
        <div className="image-left">
          <img src="https://www.politico.eu/cdn-cgi/image/width=1160,height=774,quality=80,onerror=redirect,format=auto/wp-content/uploads/2023/10/03/JPG_Large-DV_LS_Xi_OR_DualConsole_1_0920_RGB_1600.jpg" alt="Brain Surgery Equipment" width="500px" height="500px" /> 
        </div>
        <div className="text">
          <h1>Technologies Used</h1>
          <ul>
            <li><b>Electroencephalogram (EEG):</b> A test used to detect electrical activity in the brain, aiding in the diagnosis of epilepsy, sleep disorders, and other neurological conditions.</li>
            <li><b>Magnetic Resonance Imaging (MRI):</b> Used to visualize the brain and spinal cord in great detail, aiding in the diagnosis of neurological conditions such as brain tumours, multiple sclerosis, and stroke.</li>
            <li><b>Positron Emission Tomography (PET):</b> Provides detailed images of the brain’s function and metabolism, commonly used for diagnosing conditions like Alzheimer's disease and other neurodegenerative disorders.</li>
            <li><b>Computed Tomography (CT) Scan:</b> Helps in visualizing brain structure and detecting abnormalities such as brain hemorrhages, tumours, or strokes.</li>
            <li><b>Neurostimulation Devices:</b> Used for the treatment of various neurological conditions, such as chronic pain, Parkinson’s disease, and epilepsy, by stimulating specific areas of the brain or spinal cord.</li>
          </ul>
        </div>
      </div>
      <div className='cont'>
        <div className="image-left">
          <img src="https://img.freepik.com/premium-vector/vector-doctor-medical-hospital-health-medicine-illustration-care-man-clinic-people-profes_1158065-1370.jpg?semt=ais_hybrid" alt="Doctor Consultation" width="500px" height="500px" /> 
        </div>
        <div className="text">
          <h1>When to Consult</h1>
          <ul>
            <li><b>Frequent Headaches:</b> If you experience regular or severe headaches, it could be a sign of a neurological disorder and you should seek professional consultation.</li>
            <li><b>Seizures:</b> Anyone experiencing unexplained seizures should consult a neurologist immediately for diagnosis and treatment options.</li>
            <li><b>Sudden Numbness or Weakness:</b> If you experience sudden weakness or numbness in any part of the body, it could indicate a neurological issue, such as a stroke, and requires immediate medical attention.</li>
            <li><b>Memory Loss:</b> Gradual or sudden memory loss, confusion, or difficulty concentrating may be symptoms of neurological conditions like Alzheimer's disease and should be evaluated by a doctor.</li>
            <li><b>Loss of Coordination:</b> Any issues with balance or coordination, such as difficulty walking or handling objects, should be investigated by a neurologist.</li>
          </ul>
        </div>
      </div>
       <div  className='contain'>
            <div>
              <img src={Mithunaa} alt="priya" width="400px" height="400px"></img>
              <div className='txt'>
              <p >Dr.Mithunaa </p>
              <p>Qualification:MBBS,DNB Neurology</p>
              <p>Experience:12 Years</p>
              </div>
            </div>
            <div>
              <img src={John} alt="priya" width="400px" height="400px"></img>
              <div className='txt'>
              <p >Dr.Yazhan </p>
              <p>Qualification:MBBS, DM Neurology</p>
              <p>Experience:7 Years</p>
              </div>
            </div>
            <div>
              <img src={Shalini} alt="priya" width="400px" height="400px"></img>
              <div className='txt'>
              <p >Dr.Mahalakshmi</p>
              <p>Qualification:MD, DM (Neurology)</p>
              <p>Experience:9 Years</p>
              </div>
            </div>
          </div>
          <Footer2/>
    </div>
  );
};

export default Neurology;
