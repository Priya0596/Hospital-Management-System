import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHeartbeat, FaBrain, FaLungs, FaBone, FaUserMd } from 'react-icons/fa';

export default function Specialist() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const specialists = [
    {
      name: 'Cardiology',
      icon: <FaHeartbeat />,
      path: '/cardiology',
      subDepartments: ['Cardiac Surgery', 'Heart Checkup', 'Pediatric Cardiology'],
    },
    {
      name: 'Neurology',
      icon: <FaBrain />,
      path: '/neurology',
      subDepartments: ['Stroke Treatment', 'Neuro Surgery', 'Brain Scans'],
    },
    {
      name: 'Pulmonology',
      icon: <FaLungs />,
      path: '/pulmonology',
      subDepartments: ['Asthma Care', 'Lung Cancer Treatment', 'Allergy Testing'],
    },
    {
      name: 'Orthopedics',
      icon: <FaBone />,
      path: '/orthopedics',
      subDepartments: ['Joint Replacement', 'Spinal Surgery', 'Sports Injuries'],
    },
    {
      name: 'General Surgery',
      icon: <FaUserMd />,
      path: '/general-surgery',
      subDepartments: ['Appendix Surgery', 'Gallbladder Surgery', 'Hernia Treatment'],
    },
  ];

  return (
    <div className="specialist-container">
      <h2 className="specialist-title">Our Specialists</h2>
      <div className="specialist-buttons">
        {specialists.map((spec, index) => (
          <div
            key={index}
            className="dropdown"
            onMouseEnter={() => setOpenDropdown(index)}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="dropdown-btn">
              <div className="icon">{spec.icon}</div>
              <span className="specialist-name">{spec.name}</span>
            </button>
            {openDropdown === index && (
              <div className="dropdown-menu">
                {spec.subDepartments.map((sub, subIndex) => (
                  <Link to={`${spec.path}/${sub.toLowerCase().replace(/\s+/g, '-')}`} key={subIndex} className="dropdown-item">
                    {sub}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
