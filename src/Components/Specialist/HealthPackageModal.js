import React from 'react';

export default function HealthPackageModal({ pkg, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{pkg.name}</h2>
        <p className="price">{pkg.price}</p>
        <h3>Tests Included:</h3>
        <ul>
          {pkg.testsList.map((test, index) => (
            <li key={index}>{test}</li>
          ))}
        </ul>
        <div className="modal-buttons">
          <a href={`tel:${pkg.contact1 || '8220013330'}`} className="call-btn">📞 Call</a>
          <button className="book-btn">Book Now</button>
        </div>
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
