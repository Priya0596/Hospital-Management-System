import React from 'react';
import { FaUserMd } from 'react-icons/fa';
import Arun from '../../Pictures/m2.jpg';
import Emily from '../../Pictures/three.jpg';
import Jack from '../../Pictures/m3.jpg';
import Footer2 from '../Footer2';
import { useEffect } from "react";

const GeneralSurgery = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Ensure page starts at the top
  }, []);

  return (
    <div>
      <h1><FaUserMd className="hea" /> General Surgery Department</h1>
      <div className="cont" id="GeneralSurgery">
        <div className="text-left">
          <h1>General Surgery</h1>
          <p>
            Our General Surgery department provides comprehensive surgical care with a focus on minimally invasive techniques, ensuring faster recovery and reduced post-operative complications.
          </p>
          <p>
            Our expert surgeons perform procedures related to the digestive system, hernias, endocrine disorders, soft tissues, and more, utilizing cutting-edge technology and advanced techniques.
          </p>
        </div>
        <div className="image-right">
          <img src="https://www.sakraworldhospital.com/assets/spl_splimgs/plastic-surgery.webp" alt="Surgery" width="500px" height="500px" />
        </div>
      </div>

      <div className='cont'>
        <div className="image-left">
          <img src="https://thumbs.dreamstime.com/b/concentrated-female-surgeon-performing-surgery-her-team-hospital-operating-room-medics-surgery-operation-theater-99469080.jpg" alt="Surgical Procedures" width="500px" height="500px" />
        </div>
        <div className="text">
          <h1>Common Procedures</h1>
          <ul>
            <li><b>Appendectomy:</b> Surgical removal of the appendix, often performed as an emergency procedure for appendicitis.</li>
            <li><b>Hernia Repair:</b> Corrects hernias by reinforcing the weakened area with sutures or a mesh.</li>
            <li><b>Gallbladder Removal (Cholecystectomy):</b> Removes the gallbladder, commonly due to gallstones or inflammation.</li>
            <li><b>Thyroid Surgery:</b> Partial or complete removal of the thyroid gland for conditions like goiters or cancer.</li>
            <li><b>Colorectal Surgery:</b> Treats conditions like colorectal cancer, diverticulitis, and inflammatory bowel disease.</li>
            <li><b>Breast Surgery:</b> Includes lumpectomy, mastectomy, and reconstructive surgery for breast cancer patients.</li>
            <li><b>Minimally Invasive Laparoscopic Procedures:</b> Used for various abdominal surgeries, reducing recovery time and scarring.</li>
          </ul>
        </div>
      </div>

      <div className='cont'>
        <div className="image-left">
          <img src="https://adultctsurgery.ucsf.edu/media/10715331/surgeon-console2_800x429.jpg" alt="Surgical Technologies" width="500px" height="500px" />
        </div>
        <div className="text">
          <h1>Technologies Used</h1>
          <ul>
            <li><b>Robotic-Assisted Surgery:</b> Enhances precision and control, reducing surgical trauma and recovery time.</li>
            <li><b>Advanced Laparoscopy:</b> Minimally invasive techniques that allow for smaller incisions and faster healing.</li>
            <li><b>Endoscopy:</b> A diagnostic and therapeutic tool used for internal organ examinations and minor procedures.</li>
            <li><b>Ultrasound-Guided Surgery:</b> Improves accuracy in soft tissue surgeries.</li>
            <li><b>3D Imaging & Navigation Systems:</b> Helps surgeons plan and execute complex procedures with greater accuracy.</li>
          </ul>
        </div>
      </div>
       <div  className='contain'>
            <div>
              <img src={Arun} alt="priya" width="400px" height="400px"></img>
              <div className='txt'>
              <p >Dr.Arun </p>
              <p>Qualification: MBBS.,MS (Gen Surg)., DNB(Gen Surg)</p>
              <p>Experience: 15 Years</p>
              </div>
            </div>
            <div>
              <img src={Emily} alt="priya" width="400px" height="400px"></img>
              <div className='txt'>
              <p >Dr.Bhanu </p>
              <p>Qualification: MS General Surgery, FMAS</p>
              <p>Experience: 10 Years</p>
              </div>
            </div>
            <div>
              <img src={Jack} alt="priya" width="400px" height="400px"></img>
              <div className='txt'>
              <p >Dr.Joseph </p>
              <p>Qualification: MBBS.,MS (General Surgery)</p>
              <p>Experience: 7 Years</p>
              </div>
            </div>
          </div>
          <Footer2/>
    </div>
  );
};

export default GeneralSurgery;
