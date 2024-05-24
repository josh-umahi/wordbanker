import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import logo from '../../assets/logo_white.png';

const Container = styled('div')({
  height: '152px',
  backgroundColor: 'black',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0 1em',

  '& p': {
    color: 'white',
    fontFamily: "'Avenir', 'Nunito', 'sans-serif'",
    fontSize: '14px',
  },
});

const InnerContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginTop: '1em',
});

const Logo = styled('img')({
  height: '40px',
});

const Divider = styled('div')({
  height: '27px',
  borderLeft: '1px solid white',
  display: 'flex',
  margin: '0 1em',
});

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Container>
      <Link to='/'>
        <Logo src={logo} alt='' />
      </Link>
      <InnerContainer>
        <p>&copy; {currentYear} The Wordbanker</p>
        <Divider />
        <p>Created by Joshua Umahi</p>
      </InnerContainer>
    </Container>
  );
};

export default Footer;
