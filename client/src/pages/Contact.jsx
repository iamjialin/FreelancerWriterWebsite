import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import NavBar from '../components/NavBar';

const Contact = () => {
  const [formData, setFormData] = useState({
    customerName: '',
    customerEmail: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/send-email', formData);
      console.log('Email sent successfully:', response.data);
    } catch (error) {
      console.log('Error sending email:', error);
    }
  };

  return (
    <div>
      <NavBar />
      <Typography variant="h4" style={{ textAlign: 'center', margin: '20px 0' }}>
        Contact Us
      </Typography>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="customerName"
          label="Name"
          name="customerName"
          autoComplete="name"
          autoFocus
          onChange={handleChange}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="customerEmail"
          label="Email Address"
          name="customerEmail"
          autoComplete="email"
          onChange={handleChange}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="message"
          label="Message"
          name="message"
          multiline
          rows={4}
          onChange={handleChange}
        />
        <Button
          type="submit"
          
          variant="contained"
          color="primary"
          style={{ margin: '20px 0' }}
        >
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default Contact;
