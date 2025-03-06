import React, { useState } from 'react';
import { 
  Dialog, DialogTitle, DialogContent, DialogActions, Button, 
  FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, 
  TextField, Typography 
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; 

export default function Appointment({ open, handleClose }) {
  const [showSpecialty, setShowSpecialty] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [doctor, setDoctor] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Mapping specialties to doctors
  const doctorOptions = {
    Cardiology: ['Dr. Priyasagi', 'Dr. Aadhithiya','Dr. Shalini'],
    Neurology: ['Dr. Mithunaa', 'Dr. Yazhan', 'Dr. Mahalakshmi'],
    Pulmonology: ['Dr. Purnima', 'Dr. Rithu', 'Dr. Aadhav'],
    Orthopedics:['Dr. Kesavardhini','Dr.Sangavi', 'Dr. Venkat'],
    GeneralSurgery:['Dr. Arun', 'Dr. Bhanu', 'Dr. Joseph'] 
  };

  const handleSpecialtyChange = (e) => {
    setSpecialty(e.target.value);
    setDoctor(''); // Reset doctor selection when specialty changes
  };

  const handleSubmit = () => {
    if (name && phone && date && doctor && specialty) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        resetForm(); // Reset form after success message
      }, 2000); // Show success message for 2 seconds
    }
  };

  // Function to reset the form for a new user
  const resetForm = () => {
    setName('');
    setPhone('');
    setDate('');
    setSpecialty('');
    setDoctor('');
    setShowSpecialty(false);
  };

  return (
    <Dialog open={open} onClose={() => { handleClose(); resetForm(); }} fullWidth maxWidth="sm">
      <DialogTitle>Book an Appointment</DialogTitle>
      <DialogContent className="dialog-content">
        {!submitted ? (
          <>
            {/* Name Input */}
            <TextField 
              label="Your Name" 
              variant="outlined" 
              fullWidth 
              margin="dense" 
              className="text-field"
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />

            {/* Phone Number Input */}
            <TextField 
              label="Phone Number" 
              variant="outlined" 
              fullWidth 
              margin="dense" 
              type="tel"
              className="text-field"
              value={phone} 
              onChange={(e) => setPhone(e.target.value)} 
            />

            {/* Appointment Date Input */}
            <TextField 
              label="Appointment Date" 
              type="date" 
              variant="outlined" 
              fullWidth 
              margin="dense" 
              className="text-field"
              InputLabelProps={{ shrink: true }} 
              value={date} 
              onChange={(e) => setDate(e.target.value)} 
            />

            {/* Button to show specialty selection */}
            {!showSpecialty && (
              <Button 
                variant="contained" 
                color="primary" 
                fullWidth 
                sx={{ mt: 2 }}
                onClick={() => setShowSpecialty(true)}
              >
                Select Specialty
              </Button>
            )}

            {/* Specialty Selection */}
            {showSpecialty && (
              <FormControl component="fieldset" fullWidth margin="dense" className="radio-group">
                <FormLabel component="legend">Select Specialty</FormLabel>
                <RadioGroup value={specialty} onChange={handleSpecialtyChange}>
                  {Object.keys(doctorOptions).map((specialtyName) => (
                    <FormControlLabel key={specialtyName} value={specialtyName} control={<Radio />} label={specialtyName} />
                  ))}
                </RadioGroup>
              </FormControl>
            )}

            {/* Doctor Selection */}
            {specialty && (
              <FormControl component="fieldset" fullWidth margin="dense" className="radio-group">
                <FormLabel component="legend">Select Doctor</FormLabel>
                <RadioGroup value={doctor} onChange={(e) => setDoctor(e.target.value)}>
                  {doctorOptions[specialty].map((doctorName) => (
                    <FormControlLabel key={doctorName} value={doctorName} control={<Radio />} label={doctorName} />
                  ))}
                </RadioGroup>
              </FormControl>
            )}
          </>
        ) : (
          <div className="success-message">
            <CheckCircleIcon className="success-icon" color="success" fontSize="large" />
            <Typography variant="h5" align="center" color="primary">
              Your appointment was successful!
            </Typography>
          </div>
        )}
      </DialogContent>
      
      {!submitted && (
        <DialogActions className="button-container">
          <Button onClick={() => { handleClose(); resetForm(); }} color="secondary">Cancel</Button>
          <Button 
            onClick={handleSubmit} 
            variant="contained" 
            color="primary" 
            className="submit-button"
            disabled={!name || !phone || !date || !doctor || !specialty}
          >
            Submit
          </Button>
        </DialogActions>
      )}
    </Dialog>
  );
}
