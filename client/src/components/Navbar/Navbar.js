import React, { useState } from 'react'
import { AppBar, Button, Drawer, IconButton, Link, List, ListItem, Toolbar, Typography } from '@material-ui/core'
import MenuIcon from '@mui/icons-material/Menu';

import logo from "../../assets/logo.svg"
import useStyles from './styles';

const Spacer = <div style={{ margin: "0.45em" }} />

// TODO: change font family
const Navbar = ({ window }) => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List>
        <ListItem>
          <Typography className={classes.username} variant="h6">@josh_umahi </Typography>
        </ListItem>
        <ListItem>
          <Button className={classes.button1} variant="contained" size="medium">create post</Button>
        </ListItem>
        <ListItem>
          <Button className={classes.button2} variant="contained" size="medium">logout</Button>
        </ListItem>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div>
      <AppBar component="nav" color='white'>
        <Toolbar className={classes.toolbar}>
          <Link to="/"  >
            <img className={classes.logo} src={logo} alt="" />
          </Link>

          <div className={classes.navRight}>
            <Typography className={classes.username} variant="h6">@josh_umahi </Typography>
            {Spacer}
            <Button className={classes.button1} variant="contained" size="medium">create post</Button>
            {Spacer}
            <Button className={classes.button2} variant="contained" size="medium">logout</Button>
          </div>
          <div className={classes.menuIconButtonDiv}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <div>
        <Drawer
          anchor='right'
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </div>
    </div>
  )
}

export default Navbar