import React from 'react';
import './Login.Components.css';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { Typography } from '@mui/material';
import DataObjectIcon from '@mui/icons-material/DataObject';
import TwitterIcon from '@mui/icons-material/Twitter';
import LoginInput from './LoginInput.Components';

export default function Login() {
  const theme = createTheme({
    spacing:10,
    typography: {
      spacing:20,
      margin:10
    },
  });


  return (

    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid item xs={12} md={7} lg={7} sm={12}>
          <Paper  sx={{bgcolor:'#50b7f5', color:'white', borderRadius:0, p:18}}>
          <TwitterIcon/>
              <ThemeProvider theme={theme}>
                <Typography variant='h4'>You're one step away from the shiny new Twitter.com</Typography>
                <Typography variant='h6'>We've added tons of cool features, including ...</Typography>
              </ThemeProvider>
              <ThemeProvider theme={theme} sx={{m:5}}>
                <Typography variant='h4'># Explore</Typography>
                <Typography variant='h6'>Get the latest Tweets, news, and videos in one place</Typography>
              </ThemeProvider>
              <ThemeProvider theme={theme}>
                <Typography variant='h4'><DataObjectIcon/> Bookmarks</Typography>
                <Typography variant='h6'>Save that interesting Tweet for later.</Typography>
              </ThemeProvider>
              <ThemeProvider theme={theme}>
                <Typography variant='h4'>@ Personalize</Typography>
                <Typography variant='h6'>Choose from new themes and more dark mode options</Typography>
              </ThemeProvider>
          </Paper>
          
        </Grid>
        <Grid item xs={12} md={5} lg={5} sm={12}>
          <Paper sx={{bgcolor:'white', color:'black', borderRadius:0  }}>
            <LoginInput/>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
