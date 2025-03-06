import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Card, CardContent, Typography, Avatar, Grid } from '@mui/material';

const doctorsData = {
  cardiology: [
    { name: 'Dr. John Doe', experience: '15 years', languages: ['English', 'Spanish'], image: 'https://randomuser.me/api/portraits/men/1.jpg', details: 'Expert in heart surgeries and cardiovascular diseases.' },
    { name: 'Dr. Jane Smith', experience: '10 years', languages: ['English', 'French'], image: 'https://randomuser.me/api/portraits/women/1.jpg', details: 'Specialist in treating hypertension and heart failure.' }
  ],
  neurology: [
    { name: 'Dr. Mark Wilson', experience: '12 years', languages: ['English', 'German'], image: 'https://randomuser.me/api/portraits/men/2.jpg', details: 'Expert in brain and nervous system disorders.' }
  ],
  orthopedics: [
    { name: 'Dr. Susan Brown', experience: '20 years', languages: ['English'], image: 'https://randomuser.me/api/portraits/women/2.jpg', details: 'Specialist in knee replacements and sports injuries.' }
  ]
};

export default function DoctorDetails() {
  const { specialty } = useParams();
  const doctors = doctorsData[specialty] || [];

  return (
    <Box sx={{ p: 5, maxWidth: '1200px', mx: 'auto', bgcolor: '#f9f9f9', borderRadius: 4, boxShadow: 5 }}>
      <Typography variant="h3" gutterBottom sx={{ textAlign: 'center', color: '#003C71', fontWeight: 'bold', mb: 4 }}>
        {specialty.toUpperCase()} Specialists
      </Typography>

      {doctors.length === 0 ? (
        <Typography variant="h6" sx={{ textAlign: 'center', color: 'red' }}>
          No doctors available for this specialty.
        </Typography>
      ) : (
        doctors.map((doctor, index) => (
          <Card key={index} sx={{ display: 'flex', alignItems: 'center', mb: 4, p: 4, borderRadius: 3, boxShadow: 6 }}>
            <Grid container spacing={3} alignItems="center">
              {/* Doctor Image on the Left */}
              <Grid item xs={4} sm={3} md={2}>
                <Avatar src={doctor.image} sx={{ width: 140, height: 140, border: '4px solid #003C71' }} />
              </Grid>

              {/* Doctor Details on the Right */}
              <Grid item xs={8} sm={9} md={10}>
                <CardContent>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#003C71' }}>{doctor.name}</Typography>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333', mt: 1 }}>Experience: {doctor.experience}</Typography>
                  <Typography variant="body1" sx={{ mt: 1, fontWeight: 'bold', color: '#0077B6' }}>
                    Languages: {doctor.languages.join(', ')}
                  </Typography>
                  <Typography variant="body1" sx={{ mt: 2, color: '#555' }}>{doctor.details}</Typography>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        ))
      )}
    </Box>
  );
}
