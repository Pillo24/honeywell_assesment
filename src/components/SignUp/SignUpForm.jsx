import React, { useState } from 'react';
import {
  AccountBox,
  Email,
  Key,
  Visibility,
  VisibilityOff,
} from '@mui/icons-material';
import { Button, Grid, IconButton } from '@mui/material';

import signUpSchema, {
  emailSchema,
  passwordSchema,
  usernameSchema,
} from '../../schemas/signUpSchema';
import Input from '../../ui/Input/Input';
import SignUpHeader from './SignUpHeader';
import SignUpFooter from './SignUpFooter';

const initialUserAcount = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const [newAccountData, setNewAccountData] = useState(initialUserAcount);
  const [dirtys, setDirtys] = useState([]);
  const [visiblePasswd, setVisiblePasswd] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(newAccountData, null, 2));
    setNewAccountData(initialUserAcount); // Clean form
  };

  const handleInputChange = (e) => {
    setNewAccountData({
      ...newAccountData,
      [e.currentTarget.name]: e.target.value,
    });
    setDirtys([...dirtys, e.currentTarget.name]);
  };

  const buttonIsDisabled = () => {
    if (dirtys.length === 0) return true;

    if (newAccountData.password !== newAccountData.confirmPassword) {
      return true;
    }

    if (!!signUpSchema.validate(newAccountData).error) {
      return true;
    }

    return false;
  };

  return (
    <Grid container display={'flex'} justifyContent={'center'}>
      <SignUpHeader />

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} display="felx" justifyContent="center">
          <Grid item xs={12}>
            <Input
              label="Username"
              id="username"
              placeholder="Please enter your username"
              onChange={handleInputChange}
              value={newAccountData.username}
              schema={usernameSchema}
              startAdornment={<AccountBox />}
              isDirty={dirtys.includes('username')}
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              label="Email"
              id="email"
              type="email"
              placeholder="Please enter your email"
              onChange={handleInputChange}
              value={newAccountData.email}
              schema={emailSchema}
              startAdornment={<Email />}
              isDirty={dirtys.includes('email')}
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              label="Password"
              id="password"
              type={visiblePasswd ? 'text' : 'password'}
              placeholder="Please enter your password"
              onChange={handleInputChange}
              value={newAccountData.password}
              schema={passwordSchema}
              startAdornment={<Key />}
              endAdornment={
                <IconButton onClick={() => setVisiblePasswd(!visiblePasswd)}>
                  {visiblePasswd ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              }
              isDirty={dirtys.includes('password')}
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              label="Confirm Password"
              id="confirmPassword"
              type={visiblePasswd ? 'text' : 'password'}
              placeholder="Please Confirm Password"
              onChange={handleInputChange}
              value={newAccountData.confirmPassword}
              schema={passwordSchema}
              startAdornment={<Key />}
              endAdornment={
                <IconButton onClick={() => setVisiblePasswd(!visiblePasswd)}>
                  {visiblePasswd ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              }
              isDirty={dirtys.includes('confirmPassword')}
              customMessage={
                newAccountData.password !== newAccountData.confirmPassword &&
                `Password doesn't match`
              }
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              onClick={handleSubmit}
              fullWidth
              disabled={buttonIsDisabled()}
            >
              Create Account
            </Button>
          </Grid>
        </Grid>
      </form>
      <SignUpFooter />
    </Grid>
  );
};

export default SignUpForm;
