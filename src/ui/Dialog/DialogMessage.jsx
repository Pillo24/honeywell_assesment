import React from 'react';
import { Button, DialogContent, Typography } from '@mui/material';
import { Celebration, Check } from '@mui/icons-material';

const DialogMessage = ({ newAccuntData, onClick }) => {
  return (
    <>
      <DialogContent>
        <Typography variant="h4" fontWeight={700} align="center" gutterBottom>
          Congrats {newAccuntData.username} !
        </Typography>
        <Typography variant="h4" fontWeight={700} align="center" gutterBottom>
          Your account was created successfully !
        </Typography>
        <Typography align="center">
          <Celebration sx={{ fontSize: 100 }} />
        </Typography>
        <Typography
          variant="h6"
          fontWeight={700}
          align="center"
          gutterBottom
          color={'GrayText'}
        >
          Thank you for choosing us as your trusted source!
        </Typography>
        <Typography
          variant="h6"
          fontWeight={700}
          align="center"
          gutterBottom
          color={'GrayText'}
        >
          We have your back!
        </Typography>
      </DialogContent>

      <Button
        startIcon={<Check />}
        onClick={onClick}
        variant="outlined"
        sx={{ m: 4, fontWeight: 700 }}
      >
        Thank you
      </Button>
    </>
  );
};

export default DialogMessage;
