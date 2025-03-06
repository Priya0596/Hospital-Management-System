import { useParams } from "react-router-dom";

const doctors = {
  Cardiology: [
    { name: "Dr. John Doe", experience: "15 years", languages: "English, French" },
    { name: "Dr. Sarah Smith", experience: "10 years", languages: "English, Spanish" },
  ],
  Neurology: [{ name: "Dr. Emily White", experience: "12 years", languages: "English" }],
  Pulmonology: [{ name: "Dr. Alex Brown", experience: "8 years", languages: "English, German" }],
  Pathology: [{ name: "Dr. Lisa Green", experience: "14 years", languages: "English, Hindi" }],
  Orthopedics: [{ name: "Dr. Kevin Blue", experience: "11 years", languages: "English, Italian" }],
  "General Surgery": [{ name: "Dr. Robert Black", experience: "20 years", languages: "English" }],
};

function DoctorList() {
  const { specialty } = useParams();
  console.log("Specialty from URL:", specialty); 
  const formattedSpecialty = Object.keys(doctors).find(
    (key) => key.toLowerCase() === specialty.toLowerCase()
  );

  const doctorList = formattedSpecialty ? doctors[formattedSpecialty] : [];

  return (
    <div>
      <h2>{formattedSpecialty} Specialists</h2>
      {doctorList.length > 0 ? (
        <ul>
          {doctorList.map((doc, index) => (
            <li key={index}>
              <strong>{doc.name}</strong> - {doc.experience} - Speaks: {doc.languages}
            </li>
          ))}
        </ul>
      ) : (
        <p>No doctors available.</p>
      )}
    </div>
  );
}

export default DoctorList;
