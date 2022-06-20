import React, { useState } from 'react'
import { AppBar, Button, Drawer, IconButton, Link, List, ListItem, Toolbar, Typography } from '@material-ui/core'
import MenuIcon from '@mui/icons-material/Menu';

import logo from "../../assets/logo.svg"
import useStyles from './styles';
import { useAppContext } from '../../context/AppContext';

const Spacer = <div style={{ margin: "0.45em" }} />

// TODO: change font family
// TODO: why is there stuff under the navbar
// TODO: implement button functionality 
// TODO: implement setUserIsLoggedIn functionality 
const Navbar = ({ window }) => {
  const classes = useStyles();
  const { openCreateModal } = useAppContext()
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(true);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const Username = (
    <Typography className={classes.username} variant="h6">@josh_umahi</Typography>
  )

  const CreatePostButton = (
    <Button className={classes.button1} variant="contained" size="medium" onClick={openCreateModal}>create post</Button>
  )

  const SignInButton = (
    <Button className={classes.button1} variant="contained" size="medium">sign in</Button>
  )

  const LogoutButton = (
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
              {CreatePostButton}
            </ListItem>
            <ListItem>
              {LogoutButton}
            </ListItem>
          </List> :
          <List>
            <ListItem>
              {SignInButton}
            </ListItem>
          </List>
      }
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div>
      <AppBar component="nav" style={{backgroundColor: "white"}} position='sticky'>
        <Toolbar className={classes.toolbar}>
          <Link to="/"  >
            <img className={classes.logo} src={logo} alt="" />
          </Link>

          {userIsLoggedIn ?
            <div className={classes.navRight}>
              {Username}
              {Spacer}
              {CreatePostButton}
              {Spacer}
              {LogoutButton}
            </div> :
            <div className={classes.navRight}>
              {SignInButton}
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