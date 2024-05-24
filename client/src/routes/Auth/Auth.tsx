import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { styled } from '@mui/system';

import { signin, signup } from '../../actions/auth';
import Input from './Input';

const initialState = { email: '', password: '', confirmPassword: '' };

const PaperStyled = styled(Paper)(({ theme }) => ({
  marginTop: theme.spacing(8),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(2),
}));

const AvatarStyled = styled(Avatar)(({ theme }) => ({
  margin: theme.spacing(1),
  backgroundColor: theme.palette.secondary.main,
}));

const FormStyled = styled('form')(({ theme }) => ({
  width: '100%', // Fix IE 11 issue.
  marginTop: theme.spacing(3),
  display: 'flex',
  flexDirection: 'column',
}));

const ErrorText = styled(Typography)({
  textAlign: 'center',
  color: '#FF114A',
  marginBottom: '10px',
});

const SubmitButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(0, 0, 2),
}));

const Auth = () => {
  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errorOnSubmit, setErrorOnSubmit] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleShowPassword = () => setShowPassword(!showPassword);

  const switchMode = () => {
    setErrorOnSubmit(false);
    setForm(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (isSignup) {
      if (form.password === form.confirmPassword) {
        // await dispatch(signup(form, navigate));
      }
    } else {
      // await dispatch(signin(form, navigate));
    }

    // If our code reaches this line, it means an error was caught in one of the above functions
    setErrorOnSubmit(true);
  };

  const handleChange = (e: React.FormEvent<EventTarget>) => {
    let target = e.target as HTMLInputElement;
    setForm({ ...form, [target.name]: target.value });
  };

  return (
    <Container component='main' maxWidth='xs'>
      <PaperStyled elevation={6}>
        <AvatarStyled>
          <LockOutlinedIcon />
        </AvatarStyled>
        <Typography component='h1' variant='h5'>
          {isSignup ? 'Sign up' : 'Sign in'}
        </Typography>
        <FormStyled onSubmit={handleSubmit}>
          <Input
            name='email'
            inputValue={form.email}
            label='Email Address'
            handleChange={handleChange}
            type='email'
          />
          <Input
            name='password'
            inputValue={form.password}
            label='Password'
            handleChange={handleChange}
            type={showPassword ? 'text' : 'password'}
            handleShowPassword={handleShowPassword}
          />
          {isSignup && (
            <Input
              inputValue={form.confirmPassword}
              name='confirmPassword'
              label='Repeat Password'
              handleChange={handleChange}
              type='password'
            />
          )}
          {errorOnSubmit && (
            <ErrorText variant='button'>** Error in Entry</ErrorText>
          )}
          <SubmitButton
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
          >
            {isSignup ? 'Sign Up' : 'Sign In'}
          </SubmitButton>
          <Grid container justifyContent='flex-end'>
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup
                  ? 'Already have an account? Sign in'
                  : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </FormStyled>
      </PaperStyled>
    </Container>
  );
};

export default Auth;
