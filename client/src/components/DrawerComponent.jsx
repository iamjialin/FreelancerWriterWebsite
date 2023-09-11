import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import {
  Drawer,
  IconButton,
  Button,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { Link } from "react-router-dom";

function DrawerComponent() {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={()=>setOpenDrawer(false)}
      >
        <List>
         <ListItem onClick={()=>setOpenDrawer(false)}>
            <ListItemText>
              <Button color="inherit" href="/" style={{ textTransform: "none", fontFamily: "Lato", fontSize: "1em"}}>Home</Button>
            </ListItemText>
          </ListItem>
          <ListItem onClick={()=>setOpenDrawer(false)}>
            <ListItemText>
              <Button color="inherit" href="/portfolio" style={{ textTransform: "none", fontFamily: "Lato", fontSize: "1em" }}>Portfolio</Button>
            </ListItemText>
          </ListItem>
          <ListItem onClick={()=>setOpenDrawer(false)}>
            <ListItemText>
              <Button color="inherit" href="/about" style={{ textTransform: "none", fontFamily: "Lato", fontSize: "1em" }}>About</Button>
            </ListItemText>
          </ListItem>
          <ListItem onClick={()=>setOpenDrawer(false)}>
            <ListItemText>
              <Button color="inherit" href="/contact" style={{ textTransform: "none", fontFamily: "Lato", fontSize: "1em" }}>Contact</Button>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <IconButton onClick={()=>setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>

    </>
  );
}
export default DrawerComponent;
