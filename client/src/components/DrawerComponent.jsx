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

function DrawerComponent({color = [255, 255, 255], textColor='black'}) {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={()=>setOpenDrawer(false)}
        PaperProps={{
          sx:{backgroundColor: `rgb(${color[0]}, ${color[1]}, ${color[2]})`,
          color:`${textColor}`}
        }}
      >
        <List>
         <ListItem onClick={()=>setOpenDrawer(false)}>
            <ListItemText>
              <Button color="inherit" href="/" style={{ textTransform: "none", fontFamily: "QuiltedButterfly", fontSize: "1em"}}>Home</Button>
            </ListItemText>
          </ListItem>
          <ListItem onClick={()=>setOpenDrawer(false)}>
            <ListItemText>
              <Button color="inherit" href="/portfolio" style={{ textTransform: "none", fontFamily: "QuiltedButterfly", fontSize: "1em" }}>Portfolio</Button>
            </ListItemText>
          </ListItem>
          <ListItem onClick={()=>setOpenDrawer(false)}>
            <ListItemText>
              <Button color="inherit" href="/about" style={{ textTransform: "none", fontFamily: "QuiltedButterfly", fontSize: "1em" }}>About</Button>
            </ListItemText>
          </ListItem>
          <ListItem onClick={()=>setOpenDrawer(false)}>
            <ListItemText>
              <Button color="inherit" href="/contact" style={{ textTransform: "none", fontFamily: "QuiltedButterfly", fontSize: "1em" }}>Contact</Button>
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
