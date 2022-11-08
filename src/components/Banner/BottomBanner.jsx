import React from 'react';
import { Card, CardMedia, Grid } from '@mui/material';
import BannerImage from '../../static/images/social-media-g9e20d1f84_1920.png';

const BottomBanner = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{
        height: '20vh',
      }}
    >
      <Grid item xs={12}>
        <Card elevation={5}>
          <CardMedia component="img" sx={{ width: 350 }} image={BannerImage} />
        </Card>
      </Grid>
    </Grid>
  );
};

export default BottomBanner;
