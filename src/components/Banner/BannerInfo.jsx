import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import BottomBanner from './BottomBanner';

const BannerInfo = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        marginRight: 2,
        padding: 3,
        backgroundColor: '#0288d1',
      }}
    >
      <Grid
        container
        direction="column"
        justifyContent="space-evenly"
        alignItems="center"
        sx={{ height: '70vh' }}
      >
        <Grid item>
          <Typography align="left" variant="h5" color="white">
            Banner Info
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="h3"
            color={'whitesmoke'}
            fontWeight={700}
            align="center"
          >
            Start your jurney with us.
          </Typography>
        </Grid>
        <Grid item>
          <BottomBanner />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default BannerInfo;
