import React, { useState } from 'react';
import {
  AccountBox,
  Email,
  Key,
  Person,
  Send,
  Visibility,
} from '@mui/icons-material';
import { Avatar, Button, Grid, TextField } from '@mui/material';

const initialUserAcount = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUp = () => {
  const [newAccountData, setNewAccountData] = useState(initialUserAcount);
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

  // useEffect(() => {
  //   first

  //   return () => {
  //     second
  //   }
  // }, [third])

  console.log(newAccountData);

  return (
    <Grid
      container
      sx={{ border: '1px solid blue' }}
      display={'flex'}
      justifyContent={'center'}
    >
      {/* <div>SignUp</div> */}
      <Avatar>
        <Person fontSize="large" />
      </Avatar>

      {/* <Icon>arrow</Icon> */}
      <form onSubmit={handleSubmit}>
        <Grid
          container
          sx={{ border: '1px solid red' }}
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
              onChange={(e) =>
                setNewAccountData({
                  ...newAccountData,
                  username: e.target.value
                    .replace(/[^a-zA-Z ]/g, '')
                    .split(' ')
                    .join('')
                    .toLowerCase(),
                })
              }
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
              onChange={
                (e) => {}
                // setNewAccountData({
                //   ...newAccountData,
                //   email: e.target.value.match(
                //     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                //   ),
                // })
              }
              value={newAccountData.email || ''}
              fullWidth
              required
              InputProps={{ startAdornment: <Email /> }}
              placeholder=" Please enter a valid email."
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              id="password"
              type={'password'}
              name="password"
              onChange={handleUserData}
              value={newAccountData.password || ''}
              fullWidth
              required
              InputProps={{ startAdornment: <Key /> }}
              placeholder=" Should have at lease 8 characteres, capitals and special characters. "
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Confirm Password"
              id="confirmPassword"
              type={'password'}
              name="confirmPassword"
              onChange={handleUserData}
              value={newAccountData.confirmPassword || ''}
              fullWidth
              required
              InputProps={{
                startAdornment: <Key />,
                endAdornment: <Visibility />,
              }}
              placeholder=" Should have at lease 8 characteres, capitals and special characters. "
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
