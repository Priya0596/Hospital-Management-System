import React, { useState } from "react";
import Footer2 from "../Footer2";

export default function HealthPackages() {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [showAppointmentForm, setShowAppointmentForm] = useState(false);
  const [appointmentSuccess, setAppointmentSuccess] = useState(false);

  const packages = [
    {
      id: 1,
      tests: "11+ test",
      title: "Whole Body Checkup",
      price: "Rs.2025/-",
      offer: "Package Offer extended up to 10.03.2025",
      contacts: ["8220013330", "8754022880"],
      testList: [
        "Complete Hemogram",
        "Post Prandial Blood Sugar (Glucostick)",
        "Lipid Profile",
        "Thyroid",
        "Serum Creatinine",
        "Chest X-Ray",
        "OG Consultation",
      ],
    },
    {
      id: 2,
      tests: "10+ test",
      title: "Master Health Checkup",
      price: "Rs.3730/-",
      offer: null,
      contacts: [],
      testList: [
        "Complete Blood Count, ESR",
        "Post Prandial Blood Sugar (Glucostick)",
        "Lipid Profile",
        "Serum Creatinine",
        "Serum Protein",
        "Chest X-Ray",
        "Ophthalmic Consultation",
        "Diet Counselling",
      ],
    },
    {
      id: 2,
      tests: "15+ test",
      title: "Well women Checkup",
      price: "Rs.3000/-",
      offer: null,
      contacts: [],
      testList: [
        "Complete Blood Count, ESR",
        "Post Prandial Blood Sugar (Glucostick)",
        "Lipid Profile",
        "Serum Creatinine",
        "Serum Protein",
        "Chest X-Ray",
        "Ophthalmic Consultation",
        "Diet Counselling",
      ],
    },
    {
      id: 2,
      tests: "27+ test",
      title: "Comprehensive Health Chechup",
      price: "Rs.6700/-",
      offer: null,
      contacts: [],
      testList: [
        "Complete Blood Count, ESR",
        "Post Prandial Blood Sugar (Glucostick)",
        "Lipid Profile",
        "Serum Creatinine",
        "Serum Protein",
        "Chest X-Ray",
        "Ophthalmic Consultation",
        "Diet Counselling",
      ],
    },
    {
      id: 2,
      tests: "23+ test",
      title: "Senior Citizen Health Checkup for Women",
      price: "Rs.6700/-",
      contacts: [],
      testList: [
        "Complete Blood Count, ESR",
        "Post Prandial Blood Sugar (Glucostick)",
        "Lipid Profile",
        "Serum Creatinine",
        "Serum Protein",
        "Chest X-Ray",
        "Ophthalmic Consultation",
        "Diet Counselling",
      ],
    },
    {
      id: 2,
      tests: "23+ test",
      title: "Senior Citizen Health Checkup for Men",
      price: "Rs.5700/-",
      offer: "Package Offer extended up to 15.03.2025",
      contacts: [],
      testList: [
        "Complete Blood Count, ESR",
        "Post Prandial Blood Sugar (Glucostick)",
        "Lipid Profile",
        "Serum Creatinine",
        "Serum Protein",
        "Chest X-Ray",
        "Ophthalmic Consultation",
        "Diet Counselling",
      ],
    }
  ];

  const openModal = (pkg) => {
    setSelectedPackage(pkg);
    setShowAppointmentForm(false);
    setAppointmentSuccess(false);
  };

  const closeModal = () => {
    setSelectedPackage(null);
    setShowAppointmentForm(false);
    setAppointmentSuccess(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAppointmentSuccess(true);
  };

  return (
    <>
      <div className="health-packages">
        <h2>List of Health Checkup Packages</h2>
        <div className="packages-container">
          {packages.map((pkg) => (
            <div key={pkg.id} className="package-card">
              <p className="test-count">{pkg.tests}</p>
              <h3 className="package-title">{pkg.title}</h3>
              <p className="package-price">{pkg.price}</p>
              {pkg.offer && <p className="offer">{pkg.offer}</p>}
              <button className="book-now-btn" onClick={() => openModal(pkg)}>
                Book Now
              </button>
            </div>
          ))}
        </div>

        {selectedPackage && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={closeModal}>×</button>
              
              {!showAppointmentForm && !appointmentSuccess ? (
                <>
                  <h2>{selectedPackage.title}</h2>
                  <p className="modal-price">{selectedPackage.price} - {selectedPackage.tests}</p>
                  <div className="test-list">
                    {selectedPackage.testList.map((test, index) => (
                      <p key={index} className="test-item">➤ {test}</p>
                    ))}
                  </div>
                  <button
                    className="appointment-btn"
                    onClick={() => setShowAppointmentForm(true)}
                  >
                    REQUEST AN APPOINTMENT
                  </button>
                </>
              ) : showAppointmentForm && !appointmentSuccess ? (
                <>
                  <h2>Request an Appointment</h2>
                  <form onSubmit={handleSubmit}>
                    <label>Patient Name *</label>
                    <input type="text" required />
                    <label>Mobile No. *</label>
                    <input type="tel" required />
                    <label>Appointment Date *</label>
                    <input type="date" required />
                    <label>Email ID *</label>
                    <input type="email" required />
                    <label>Address *</label>
                    <textarea required></textarea>
                    <div className="modal-buttons">
                      <button type="submit" className="send-btn">Get an Appointment</button>
                      <button
                        type="button"
                        onClick={() => setShowAppointmentForm(false)}
                        className="go-back-btn"
                      >
                        Go Back
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <>
                  <h2>✅ Your appointment was successful!</h2>
                  <p>We will contact you soon with more details.</p>
                </>
              )}
            </div>
          </div>
        )}
      </div>
      <Footer2 />
    </>
  );
}
