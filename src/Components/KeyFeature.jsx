import React from 'react';
import bed from '../Pictures/bed.webp';
import doc from '../Pictures/doc.avif';
import modern from '../Pictures/modern.jpg';
import patient from '../Pictures/patient.jpg';
import emergency from '../Pictures/emergency.jpg';

const keyFeatures = [
  { id: 1, title: "24-Hour Bed Facility", description: "Round-the-clock availability of beds ensuring immediate care.", image: bed },
  { id: 2, title: "Expert Doctors", description: "Highly skilled and experienced doctors across various specialties.", image: doc},
  { id: 3, title: "Modern Equipment", description: "State-of-the-art medical equipment for accurate diagnosis and treatment.", image: modern },
  { id: 4, title: "Patient-Centered Care", description: "Compassionate and personalized care for every patient.", image: patient },
  { id: 5, title: "Emergency Services", description: "24/7 emergency services to handle critical situations.", image: emergency},
];

export default function KeyFeatures() {
  return (
    <div className="key-features">
      <h2>Our Key Features</h2>
      {keyFeatures.map((feature) => (
        <div key={feature.id} className="feature-item">
          <div className="feature-content">
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
          <img src={feature.image} alt={feature.title} className="feature-image" />
        </div>
      ))}
    </div>
  );
}
