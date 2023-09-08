import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


export default function NavBar({color = [255, 255, 255], textColor='black'}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar elevation={0} position="static" style={{ backgroundColor: `rgb(${color[0]}, ${color[1]}, ${color[2]})`, color:`${textColor}` }} sx={{ height: '50px', display: 'flex'}}>
        <Toolbar variant="dense" sx={{ minHeight: '50px', mx: "20%" }}>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1, fontFamily: 'TravelingTypewriter' }}>
            Emerald
          </Typography>
          <Button color="inherit" href="/" style={{ textTransform: "none", fontFamily: "Lato", fontSize: "1em" }}>Home</Button>
          <Button color="inherit" href="/portfolio" style={{ textTransform: "none", fontFamily: "Lato", fontSize: "1em" }}>Portfolio</Button>
          <Button color="inherit" href="/about" style={{ textTransform: "none", fontFamily: "Lato", fontSize: "1em" }}>About</Button>
          <Button color="inherit" href="/contact" style={{ textTransform: "none", fontFamily: "Lato", fontSize: "1em" }}>Contact</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

