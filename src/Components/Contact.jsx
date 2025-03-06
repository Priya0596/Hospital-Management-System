import React, { useState } from 'react';
import Footer2 from './Footer2';
import { TextField, Button, Box, Typography, Grid } from '@mui/material';

export default function ContactUs() {
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [query, setQuery] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ firstName, middleName, lastName, email, phone, query });
    setSuccessMessage('Your message has been submitted successfully!');
    setFirstName('');
    setMiddleName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setQuery('');
    setTimeout(() => setSuccessMessage(''), 5000); // Hide message after 5 seconds
  };

  return (
    <>
      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          padding: 2
        }}
      >
        <Box 
          sx={{ 
            width: '80%', 
            maxWidth: '1000px', 
            backgroundColor: 'white', 
            p: 4, 
            boxShadow: 3, 
            borderRadius: 2, 
          }}
        >
          <Grid container spacing={2}>
            <Typography variant="h4" gutterBottom>
              Get in Touch With Us
            </Typography>
            {successMessage && (
              <Box sx={{ backgroundColor: '#d4edda', color: '#155724', padding: 2, borderRadius: 1, mb: 2, border: '1px solid #c3e6cb' }}>
                {successMessage}
              </Box>
            )}
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <TextField
                    label="Your First Name *"
                    variant="outlined"
                    fullWidth
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    label="Middle Name"
                    variant="outlined"
                    fullWidth
                    value={middleName}
                    onChange={(e) => setMiddleName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    label="Last Name *"
                    variant="outlined"
                    fullWidth
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Your Mobile Number *"
                    type="tel"
                    variant="outlined"
                    fullWidth
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Your Email *"
                    type="email"
                    variant="outlined"
                    fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Query"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary" fullWidth>
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Box>
      </Box>
      <Footer2/>
    </>
  );
}