import React from 'react';
import { Button, Typography, Link } from '@mui/material';
import { styled } from '@mui/system';

const Container = styled('div')(({ theme }) => ({
  margin: '150px 2em',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'black',
  textAlign: 'center',
}));

const FirstText = styled(Typography)({
  fontFamily: "'Avenir', 'Nunito', 'sans-serif'",
  fontSize: '100px',
  fontWeight: 600,
  background: '-webkit-linear-gradient(#000, #0071f0)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
});

const MiddleText = styled(Typography)({
  fontFamily: "'Avenir', 'Nunito', 'sans-serif'",
  fontSize: '23px',
  fontWeight: 600,
  textTransform: 'uppercase',
});

const LastText = styled(Typography)({
  fontSize: '18px',
  margin: '0.5em 0 1em',
});

const StyledButton = styled(Button)({
  textTransform: 'uppercase',
  backgroundColor: '#000',
  padding: '0.5em 1.5em',
  color: 'white',
  borderRadius: '50px',
  boxShadow:
    'rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px',

  '&:hover': {
    backgroundColor: '#000',
    color: 'white',
    boxShadow: 'none',
  },
});

const PageNotFound = () => {
  return (
    <Container>
      <FirstText color='inherit'>Oops!</FirstText>
      <MiddleText color='inherit'>404 - page not found</MiddleText>
      <LastText color='inherit'>
        The page you are looking for may have been removed or does not exist
      </LastText>
      <Link href='/' underline='none'>
        <StyledButton variant='contained' size='medium'>
          go to homepage
        </StyledButton>
      </Link>
    </Container>
  );
};

export default PageNotFound;
