import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const QuickFacts = () => {
  return (
    <section className="container text-center my-5">
      <h2 className="quick-title">Quick Fact<span className="dot">.</span></h2>
      <div className="row mt-4">
        {/* First Row */}
        <div className="col-md-4">
          <h3 className="quick-number">1400++</h3>
          <p>Bedded and Multi-specialty Facilities</p>
        </div>
        <div className="col-md-4">
          <h3 className="quick-number">No.1</h3>
          <p>One of the best Multi-specialty Hospitals in India</p>
        </div>
        <div className="col-md-4">
          <h3 className="quick-number">20K+</h3>
          <p>Covid-19 Treatment</p>
        </div>

        {/* Second Row */}
        <div className="col-md-4 mt-4">
          <h3 className="quick-number">32 <span className="small-text">/yrs</span></h3>
          <p>Years of Experience</p>
        </div>
        <div className="col-md-4 mt-4">
          <h3 className="quick-number">450+</h3>
          <p>Highly Professional Doctors</p>
        </div>
        <div className="col-md-4 mt-4">
          <h3 className="quick-number">900K+</h3>
          <p>Happy Patients per Year</p>
        </div>
      </div>
    </section>
  );
};

export default QuickFacts;
