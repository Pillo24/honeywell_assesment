import React, { useState } from 'react';
import {
  AccountBox,
  Email,
  Key,
  Person,
  Visibility,
  VisibilityOff,
} from '@mui/icons-material';
import { Avatar, Button, Grid, IconButton, TextField } from '@mui/material';

const initialUserAcount = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUp = () => {
  const [newAccountData, setNewAccountData] = useState(initialUserAcount);
  const [dirtys, setDirtys] = useState([]);
  const [visiblePasswd, setVisiblePasswd] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(newAccountData, null, 2));
    setNewAccountData(initialUserAcount); // Clean form
  };

  const handleUserData = (e) => {
    // setNewAccountData({
    //   ...newAccountData,
    //   [e.currentTarget.name]: e.target.value,
    // });
  };

  return (
    <Grid container display={'flex'} justifyContent={'center'}>
      <Avatar>
        <Person fontSize="large" />
      </Avatar>

      <form onSubmit={handleSubmit}>
        <Grid
          container
          spacing={2}
          display={'felx'}
          //   justifyItems="center"
          justifyContent="center"
        >
          <Grid item xs={12}>
            <TextField
              label="Username"
              id="username"
              type={'text'}
              name="username"
              //   onChange={handleUserData}
              onChange={(e) => {
                setNewAccountData({
                  ...newAccountData,
                  username: e.target.value
                    .replace(/[^a-zA-Z0-9 ]/g, '')
                    .split(' ')
                    .join('')
                    .toLowerCase(),
                });
                setDirtys([...dirtys, 'username']);
              }}
              value={newAccountData.username || ''}
              fullWidth
              required
              InputProps={{ startAdornment: <AccountBox /> }}
              placeholder=" Please enter your username"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              id="email"
              type={'email'}
              name="email"
              onChange={(e) => {
                setNewAccountData({
                  ...newAccountData,
                  email: e.target.value.toLowerCase(),
                });
                setDirtys([...dirtys, 'email']);
              }}
              value={newAccountData.email || ''}
              fullWidth
              required
              InputProps={{ startAdornment: <Email /> }}
              placeholder=" Please enter a valid email."
              helperText={
                dirtys.includes('email') &&
                !newAccountData.email.match(
                  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
                ) &&
                'Invalid Email'
              }
              error={
                dirtys.includes('email') &&
                !newAccountData.email.match(
                  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
                )
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              id="password"
              type={visiblePasswd ? 'text' : 'password'}
              name="password"
              onChange={(e) => {
                setNewAccountData({
                  ...newAccountData,
                  password: e.target.value,
                });
                setDirtys([...dirtys, 'password']);
              }}
              value={newAccountData.password || ''}
              fullWidth
              required
              InputProps={{
                startAdornment: <Key />,
                endAdornment: (
                  <IconButton onClick={() => setVisiblePasswd(!visiblePasswd)}>
                    {visiblePasswd ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                ),
              }}
              helperText={
                dirtys.includes('password') &&
                !newAccountData.password.match(
                  /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])$/
                ) &&
                'Should have at least 8 characteres, capitals and special characters.'
              }
              error={
                dirtys.includes('password') &&
                !newAccountData.password.match(
                  /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])$/
                )
              }
              placeholder=" Should have at least 8 characteres, capitals and special characters. "
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Confirm Password"
              id="confirmPassword"
              type={visiblePasswd ? 'text' : 'password'}
              name="confirmPassword"
              onChange={(e) => {
                setNewAccountData({
                  ...newAccountData,
                  confirmPassword: e.target.value,
                });
                setDirtys([...dirtys, 'confirmPassword']);
              }}
              value={newAccountData.confirmPassword || ''}
              fullWidth
              required
              InputProps={{ startAdornment: <Key /> }}
              placeholder=" Should have at least 8 characteres, capitals and special characters. "
              helperText={
                (dirtys.includes('confirmPassword') &&
                  newAccountData.confirmPassword.length < 8 &&
                  'Should have at least 8 characteres, capitals and special characters.') ||
                (newAccountData.password !== newAccountData.confirmPassword &&
                  'Password not match')
              }
              error={
                (dirtys.includes('confirmPassword') &&
                  newAccountData.password !== newAccountData.confirmPassword) ||
                newAccountData.confirmPassword.length < 8
              }
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" onClick={handleSubmit} fullWidth>
              Create Account
            </Button>
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
};

export default SignUp;
