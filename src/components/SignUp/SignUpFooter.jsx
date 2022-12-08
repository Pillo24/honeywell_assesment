import { Grid, Typography } from '@mui/material';
import React from 'react';

const SignUpFooter = () => {
  return (
    <Grid container sx={{ marginTop: 4 }}>
      <Grid item xs={3}>
        <Typography variant="subtitle2">Have an account? </Typography>
      </Grid>
      <Grid item xs={9}>
        <Typography variant="subtitle2" color={'blue'}>
          Login{' '}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SignUpFooter;
