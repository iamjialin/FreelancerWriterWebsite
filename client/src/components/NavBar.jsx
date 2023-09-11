import * as React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import DrawerComponent from './DrawerComponent';


export default function NavBar({color = [255, 255, 255], textColor='black'}) {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
        elevation={0} 
        position="static" 
        style={{ backgroundColor: `rgb(${color[0]}, ${color[1]}, ${color[2]})`,
                 color:`${textColor}` }} 
        sx={{ height: '50px', display: 'flex'}}
      >
        <Toolbar variant="dense" sx={{ minHeight: '50px', mx: "20%" }}>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1, fontFamily: 'TravelingTypewriter' }}>
            Emerald
          </Typography>
          
          {isMobile ? (<DrawerComponent />):(
            <div>
              <Button color="inherit" href="/" style={{ textTransform: "none", fontFamily: "Lato", fontSize: "1em" }}>Home</Button>
              <Button color="inherit" href="/portfolio" style={{ textTransform: "none", fontFamily: "Lato", fontSize: "1em" }}>Portfolio</Button>
              <Button color="inherit" href="/about" style={{ textTransform: "none", fontFamily: "Lato", fontSize: "1em" }}>About</Button>
              <Button color="inherit" href="/contact" style={{ textTransform: "none", fontFamily: "Lato", fontSize: "1em" }}>Contact</Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

