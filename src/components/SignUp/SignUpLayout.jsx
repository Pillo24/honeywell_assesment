import React, { useState } from 'react';
import { Dialog, Grid, Paper } from '@mui/material';
import SignUpForm from './SignUpForm';
import BannerInfo from '../Banner/BannerInfo';
import DialogMessage from '../../ui/Dialog/DialogMessage';

const SignUpLayout = () => {
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [newAccuntData, setNewAccuntData] = useState({});
  return (
    <Paper elevation={3} sx={{ padding: 3, borderRadius: 4 }}>
      <Grid container>
        <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'flex' } }}>
          <BannerInfo />
        </Grid>
        <Grid item xs={12} md={6}>
          <SignUpForm
            isOpenDialog={() => setIsOpenDialog(true)}
            accountData={(e) => setNewAccuntData(e)}
          />
        </Grid>
      </Grid>
      <Dialog open={isOpenDialog} maxWidth="md">
        <DialogMessage
          newAccuntData={newAccuntData}
          onClick={() => {
            setIsOpenDialog(false);
          }}
        />
      </Dialog>
    </Paper>
  );
};

export default SignUpLayout;
