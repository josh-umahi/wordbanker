import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppBar, Button, Drawer, IconButton, Link, List, ListItem, Toolbar, Typography } from '@material-ui/core'
import MenuIcon from '@mui/icons-material/Menu';
import decode from 'jwt-decode';

import logo from "../../assets/logo.svg"
import useStyles from './styles';
import CreatePostModalForm from '../Forms/CreatePostModalForm';
import * as actionType from '../../constants/actionTypes';
import { useAppContext } from '../../context/AppContext';

const Spacer = <div style={{ margin: "0.45em" }} />

const Navbar = ({ window }) => {
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);
  const [createPostModalIsOpen, setCreatePostModalIsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user, handleSetUser } = useAppContext()
  const classes = useStyles();
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setUserIsLoggedIn(user !== null)
  }, [user])

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    handleSetUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    navigate('/auth');

    handleSetUser(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const openCreateModal = () => setCreatePostModalIsOpen(true);
  const closeCreateModal = () => setCreatePostModalIsOpen(false);

  // I made this a function because the value only needs to be known if userIsLoggedIn is true
  const Username = () => (
    <Typography className={classes.username} variant="h6">{user?.result.username}</Typography>
  )

  const CreatePostButton = (
    <Button className={classes.button1} variant="contained" size="medium" onClick={openCreateModal}>create post</Button>
  )

  const SignInButton = (
    <Button className={classes.button1} variant="contained" size="medium" href="/auth">sign in</Button>
  )

  const LogoutButton = (
    <Button className={classes.button2} variant="contained" size="medium" onClick={logout}>logout</Button>
  )

  const drawer = (
    <div onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      {
        userIsLoggedIn ?
          <List>
            <ListItem>
              <Username />
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
      <CreatePostModalForm createPostModalIsOpen={createPostModalIsOpen} closeCreateModal={closeCreateModal} />
      <AppBar component="nav" style={{ backgroundColor: "white" }} position='sticky'>
        <Toolbar className={classes.toolbar}>
          <Link to="/">
            <img className={classes.logo} src={logo} alt="" />
          </Link>

          {userIsLoggedIn ?
            <div className={classes.navRight}>
              <Username />
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