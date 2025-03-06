import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer2">
      <div className="footer2-top">
        {/* Contact Us Section */}
        <div className="footer2-left">
          <h3 className="footer2-title">Contact Us</h3>
          <div className="footer2-line"></div>
          <div className="footer2-content">
            <p>📍 Madhav Nagar, Bangalore Highway, Krishnagiri, Tamil Nadu 635104</p>
            <p>📧 office.ph@gmail.com</p>
            <p>📞 Emergency: 0820 2575555</p>
            <p>📞 Help Desk: 0820 2922761</p>
            <p>📞 Enquiry: 0820 2571201</p>
            <p>📞 Customer Care: 0820 2923188</p>
          </div>
          <div className="footer2-social">
            <FaFacebook className="social2-icon" />
            <FaInstagram className="social2-icon" />
            <FaWhatsapp className="social2-icon whatsapp" />
          </div>
        </div>

        {/* Important Links Section */}
        <div className="footer2-right">
          <h3 className="footer2-title">Important Links</h3>
          <div className="footer2-line"></div>
          <ul className="footer2-content">
            <li><a href="/" className="footer2-link">Home</a></li>
            <li><a href="/about" className="footer2-link">AboutUs</a></li>
            <li><a href="/medical" className="footer2-link">Medical Service</a></li>
            <li><a href="/cardiology" className="footer2-link">Cardiology</a></li>
            <li><a href="/neurology" className="footer2-link">Neurology</a></li>
            <li><a href="/pulmonology" className="footer2-link">Pulmonology</a></li>
            <li><a href="/orthopedics" className="footer2-link">Orthopedics</a></li>
            <li><a href="/general-surgery" className="footer2-link">General Surgery</a></li>
            <li><a href="/health-package" className="footer2-link">Healthpackage</a></li>
          </ul>
        </div>
      </div>
      {/* Bottom Footer Section */}
      <div className="footer2-bottom">
        <p>© 2025 Priya's Hospital. All rights reserved.</p>
        <a href="/disclaimer" className="footer2-link">Disclaimer</a>
      </div>
    </footer>
  );
}
