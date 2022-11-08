import { Person } from '@mui/icons-material';
import { Avatar, Divider, Grid, Typography } from '@mui/material';
import React from 'react';

const SignUpHeader = () => {
  return (
    <Grid item xs={12}>
      <Typography variant="h3" fontWeight={700} align="center" gutterBottom>
        Create your account
      </Typography>
      <Divider sx={{ marginBottom: 5 }}>
        <Avatar>
          <Person fontSize="large" />
        </Avatar>
      </Divider>

      <Typography variant="h5" fontWeight={700}>
        Sign Up
      </Typography>
      <Typography
        variant="body1"
        align="center"
        color={'GrayText'}
        sx={{ marginBottom: 4 }}
      >
        Enter the fields below to get started
      </Typography>
    </Grid>
  );
};

export default SignUpHeader;
