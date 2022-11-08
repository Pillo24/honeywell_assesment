import React from 'react';
import { Grid, Paper } from '@mui/material';
import SignUpForm from './SignUpForm';
import BannerInfo from '../Banner/BannerInfo';

const SignUpLayout = () => {
  return (
    <Paper elevation={3} sx={{ padding: 3, borderRadius: 4 }}>
      <Grid container>
        <Grid item xs={6}>
          <BannerInfo />
        </Grid>
        <Grid item xs={6}>
          <SignUpForm />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default SignUpLayout;
