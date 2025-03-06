import React from 'react';
import { Dialog, DialogTitle, DialogContent, Typography } from '@mui/material';

export default function Emergency({ open, handleClose }) {
  const emergencyContacts = [
    { place: "KRISHNAGIRI", phone: "9876543210" },
    { place: "BARGUR", phone: "8765432109" },
    { place: "HOSUR", phone: "7654321098" },
    { place: "KAVERIPATINAM", phone: "6543210987" }
  ];

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle>Emergency Contacts</DialogTitle>
      <DialogContent>
        {emergencyContacts.map((contact, index) => (
          <Typography key={index} variant="body1" sx={{ mb: 1 }}>
            <strong>{contact.place}:</strong> {contact.phone}
          </Typography>
        ))}
      </DialogContent>
    </Dialog>
  );
}
