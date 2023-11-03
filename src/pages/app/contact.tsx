import { Box, Grid, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import InstagramIcon from '@mui/icons-material/Instagram';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import CallIcon from '@mui/icons-material/Call';

export default function Contact() {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        height: "80vh",
      }}
    >
      <Grid item xs={12} sm={6} md={6}  sx={{alignSelf: 'center'}}>
        <Stack
          component={Paper}
          gap={5}
          sx={{
            maxWidth: '400px',
            minHeight: '332px',
            ml: 'auto',
            borderRadius: 3,
            p:2
          }}
        >
          <Typography
            sx={{
              textAlign:'center',
              fontWeight: 'bold',
              fontSize: '1.3rem'
            }}
          >Contact Samaneh Sarchame</Typography>

          <Stack gap={2} pl={2}>
            <Link to={"#"}>
              <Stack direction={'row'} gap={1}>
                <InstagramIcon />
                <Typography>Instagram</Typography>
              </Stack>
            </Link>

            <Link to={"mailto:samaneh.sarchami777@gmail.com"}>
              <Stack direction={'row'} gap={1}>
                <AlternateEmailIcon />
                <Typography>E-mail</Typography>
              </Stack>
            </Link>

            <Link to={"mailto:samaneh.sarchami777@gmail.com"}>
              <Stack direction={'row'} gap={1}>
                <CallIcon />
                <Typography>+98 937 372 5256</Typography>
              </Stack>
            </Link>
          </Stack>
        </Stack>
      </Grid>

      <Grid item xs={12} sm={6} md={6} sx={{alignSelf: 'center'}}>
        <Paper
          sx={{
            p:1,
            width:1,
            maxWidth:'400px',
            borderRadius: 3,
          }}
        >
          <img src={"/images/13.jpg"} alt='' style={{width:'100%'}} />
        </Paper>
      </Grid>
    </Grid>
  )
}
