import React, { SyntheticEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import { signin, signup } from '../../actions/auth';
import useStyles from './styles';
import Input from './Input';

const initialState = { email: '', password: '', confirmPassword: '' };

const Auth = () => {
  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errorOnSubmit, setErrorOnSubmit] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = useStyles();

  const handleShowPassword = () => setShowPassword(!showPassword);

  const switchMode = () => {
    setErrorOnSubmit(false)
    setForm(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };
// const handleSubmit = async (e: any) 
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (isSignup) {
      if (form.password === form.confirmPassword) {
        await dispatch(signup(form, navigate));
      }
    } else {
      await dispatch(signin(form, navigate));
    }

    // If our code reaches this line, it means an error was caught in one of the above functions
    setErrorOnSubmit(true)
  };
//const handleChange = (e: React.FormEvent<EventTarget>)
  const handleChange = (e: React.FormEvent<EventTarget>) => {
    let target = e.target as HTMLInputElement;
    setForm({ ...form, [target.name]: target.value });
  }

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={6}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">{isSignup ? 'Sign up' : 'Sign in'}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Input name="email" inputValue={form.email} label="Email Address" handleChange={handleChange} type="email" />
          <Input name="password" inputValue={form.password} label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
          {isSignup && <Input inputValue={form.confirmPassword} name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />}
          {errorOnSubmit && <Typography variant="button" className={classes.errorText}>** Error in Entry</Typography>}
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            {isSignup ? 'Sign Up' : 'Sign In'}
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
