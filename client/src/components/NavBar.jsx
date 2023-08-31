import * as React from 'react';
import {NavLink} from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar elevation={0} position="static" color='' sx={{ height: '50px', display: 'flex'}}>
        <Toolbar variant="dense" sx={{ minHeight: '50px', mx:"25%"}}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
            Emerald
          </Typography>
          <Button color="inherit"><NavLink to="/" style={{ textDecoration: 'none' }}>Home</NavLink></Button>
          <Button color="inherit"><NavLink to="/portfolio" style={{ textDecoration: 'none' }}>Portfolio</NavLink></Button>
          <Button color="inherit"><NavLink to="/about" style={{ textDecoration: 'none' }}>About</NavLink></Button>
          <Button color="inherit"><NavLink to="/contact" style={{ textDecoration: 'none' }}>Contact</NavLink></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
