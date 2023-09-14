import React, { useState, useRef } from 'react';
import { Button, TextField } from '@mui/material';
import axios from 'axios';
import NavBar from '../components/NavBar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Footer from '../components/Footer';
import Alert from '@mui/material/Alert';

const Contact = () => {
  const [formData, setFormData] = useState({
    customerName: '',
    customerEmail: '',
    message: '',
  });

  const [showPopupSent, setShowPopupSent] = useState(false);
  const [showPopupSending, setShowPopupSending] = useState(false);
  const formRef = useRef(null);

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
      setShowPopupSending(true);
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/send-email`, formData);
      setShowPopupSending(false);
      console.log('Email sent successfully:', response.data);

      // Show the popup
      setShowPopupSent(true);

      // Hide the popup after 1 seconds
      setTimeout(() => {
        setShowPopupSent(false);
      }, 3000);

      // Reset the form data
      setFormData({
        customerName: '',
        customerEmail: '',
        message: '',
      });

      // Reset the form inputs
      if (formRef.current) {
        formRef.current.reset();
      }

    } catch (error) {
      console.log('Error sending email:', error);
    }
  };

  return (
    <div>
      <NavBar />
      {showPopupSending && <Alert severity="info">Form sending......Please Wait</Alert>}
      {showPopupSent && <Alert severity="success">Form submitted successfully!</Alert>}
      <Grid container marginTop={"10vh"} marginBottom={"30vh"}>
        <Grid item xs={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
          <h1 style={{ fontFamily: "TravelingTypewriter" }}>Contact</h1>
        </Grid>
        <Grid item xs={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
          <Box width={"600px"}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} ref={formRef}>
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
                rows={6}
                onChange={handleChange}
              />
              <Button
                type='submit'
                color="primary"
                style={{
                  textTransform: "none",
                  fontFamily: "Lato",
                  fontSize: "20px",
                  width: "160px",
                  height: "60px",
                  marginTop: "5%"
                }}
                sx={{
                  ':hover': {
                    color: "white",
                    backgroundColor: "#2196f3"
                  }
                }}
                size="large"
                variant="outlined">
                Submit
              </Button>
            </form>
          </Box>
        </Grid>
      </Grid>
      <Footer />

    </div>
  );
};

export default Contact;
