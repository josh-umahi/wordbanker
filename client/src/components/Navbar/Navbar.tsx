import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { jwtDecode } from 'jwt-decode';
import { styled } from '@mui/system';

import { getLocalStorageProfile } from '../../utils/localStorage';
import logo from '../../assets/logo.svg';
import CreatePostModalForm from '../Forms/CreatePostModalForm';
import * as actionType from '../../constants/actionTypes';
import { useAppContext } from '../../context/AppContext';

type NavbarProps = {
  window?: Window;
};

const Spacer = styled('div')({
  margin: '0.45em',
});

const ToolbarStyled = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const Logo = styled('img')({
  height: '40px',
});

const NavRight = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  '@media (max-width: 850px)': {
    display: 'none',
  },
});

const MenuIconButtonDiv = styled('div')({
  display: 'block',
  color: 'black',
  '@media (min-width: 850px)': {
    display: 'none',
  },
});

const Username = styled(Typography)({
  fontSize: '18px',
  letterSpacing: 0.5,
  fontWeight: 400,
  color: 'black',
});

const Button1 = styled(Button)({
  fontWeight: 500,
  paddingLeft: '2em',
  paddingRight: '2em',
  textTransform: 'uppercase',
  backgroundColor: 'black',
  color: 'white',
  '&:hover': {
    backgroundColor: 'black',
    color: 'white',
  },
});

const Button2 = styled(Button)({
  fontWeight: 500,
  paddingLeft: '2em',
  paddingRight: '2em',
  textTransform: 'uppercase',
  backgroundColor: '#E7E7E8',
  color: 'black',
  '&:hover': {
    backgroundColor: '#E7E7E8',
    color: 'black',
  },
});

const Navbar: React.FC<NavbarProps> = ({ window }) => {
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);
  const [createPostModalIsOpen, setCreatePostModalIsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user, handleSetUser } = useAppContext()! || {}; // Use an empty object here because context can be null
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setUserIsLoggedIn(user !== null);
  }, [user]);

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = jwtDecode(token) as unknown as { [x: string]: any };

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    handleSetUser(getLocalStorageProfile());
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
  const UsernameDisplay = () => (
    <Username variant='h6'>{user?.result.username}</Username>
  );

  const CreatePostButton = (
    <Button1 variant='contained' size='medium' onClick={openCreateModal}>
      create post
    </Button1>
  );

  const SignInButton = (
    <Button1 variant='contained' size='medium' href='/auth'>
      sign in
    </Button1>
  );

  const LogoutButton = (
    <Button2 variant='contained' size='medium' onClick={logout}>
      logout
    </Button2>
  );

  const drawer = (
    <div onClick={handleDrawerToggle} style={{ textAlign: 'center' }}>
      {userIsLoggedIn ? (
        <List>
          <ListItem>
            <UsernameDisplay />
          </ListItem>
          <ListItem>{CreatePostButton}</ListItem>
          <ListItem>{LogoutButton}</ListItem>
        </List>
      ) : (
        <List>
          <ListItem>{SignInButton}</ListItem>
        </List>
      )}
    </div>
  );

  const container =
    window !== undefined ? () => window.document.body : undefined;

  return (
    <div>
      <CreatePostModalForm
        createPostModalIsOpen={createPostModalIsOpen}
        closeCreateModal={closeCreateModal}
      />
      <AppBar
        component='nav'
        style={{ backgroundColor: 'white' }}
        position='sticky'
      >
        <ToolbarStyled>
          <Link href='/'>
            <Logo src={logo} alt='' />
          </Link>

          {userIsLoggedIn ? (
            <NavRight>
              <UsernameDisplay />
              <Spacer />
              {CreatePostButton}
              <Spacer />
              {LogoutButton}
            </NavRight>
          ) : (
            <NavRight>{SignInButton}</NavRight>
          )}

          <MenuIconButtonDiv>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              edge='start'
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </MenuIconButtonDiv>
        </ToolbarStyled>
      </AppBar>
      <div>
        <Drawer
          anchor='right'
          container={container}
          variant='temporary'
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
  );
};

export default Navbar;
