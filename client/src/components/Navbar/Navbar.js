import React, { useState } from 'react'
import { AppBar, Button, Drawer, IconButton, Link, List, ListItem, Toolbar, Typography } from '@material-ui/core'
import MenuIcon from '@mui/icons-material/Menu';

import logo from "../../assets/logo.svg"
import useStyles from './styles';

const Spacer = <div style={{ margin: "0.45em" }} />

// TODO: change font family
// TODO: why is there stuff under the navbar
const Navbar = ({ window }) => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(true);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const Username = (
    <Typography className={classes.username} variant="h6">@josh_umahi </Typography>
  )

  const Button1 = (title, onClick) => (
    <Button className={classes.button1} variant="contained" size="medium" onClick={onClick}>{title}</Button>
  )

  const Button2 = (
    <Button className={classes.button2} variant="contained" size="medium">logout</Button>
  )

  const drawer = (
    <div onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      {
        userIsLoggedIn ?
          <List>
            <ListItem>
              {Username}
            </ListItem>
            <ListItem>
              {Button1("create post", () => { })}
            </ListItem>
            <ListItem>
              {Button2}
            </ListItem>
          </List> :
          <List>
            <ListItem>
              {Button1("sign in", () => { })}
            </ListItem>
          </List>
      }
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div>
      <AppBar component="nav" color='white' position='sticky'>
        <Toolbar className={classes.toolbar}>
          <Link to="/"  >
            <img className={classes.logo} src={logo} alt="" />
          </Link>

          {userIsLoggedIn ?
            <div className={classes.navRight}>
              {Username}
              {Spacer}
              {Button1("create post", () => { })}
              {Spacer}
              {Button2}
            </div> :
            <div className={classes.navRight}>
              {Button1("sign in", () => { })}
            </div>
          }

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