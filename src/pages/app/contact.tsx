import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import CallIcon from '@mui/icons-material/Call';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Box, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <Box
      sx={{
        width:1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight:'80vh',
        my:{xs:5, md:1}
      }}
    >
      <Stack direction={{xs:'column', md:'row'}} gap={3} justifyContent={'space-between'} alignItems={'center'}
        sx={{
          bgcolor:'secondary.main',
          p: 3,
          borderRadius: 3,
          boxShadow:3,
          width: 1,
          m: 1,
          maxWidth:'900px'
        }}
      >
        <Stack justifyContent={'space-around'} gap={6} pl={{xs:2,md:5}} >
            <Typography component={'h1'} variant='h4'
              sx={{
                color:'secondary.light',
              }}
            >
            Contact Us
            </Typography>

            <Stack gap={1}>
              <Link to={"#"}>
                <Stack direction={'row'} gap={1}>
                  <InstagramIcon sx={{color:'secondary.light'}} />
                  <Typography sx={{textDecoration:'underline', color:'secondary.light'}}>Instagram</Typography>
                </Stack>
              </Link>

              <Link to={"mailto:samaneh.sarchami777@gmail.com"}>
                <Stack direction={'row'} gap={1}>
                  <AlternateEmailIcon  sx={{color:'secondary.light'}} />
                  <Typography sx={{textDecoration:'underline', color:'secondary.light'}}>E-mail</Typography>
                </Stack>
              </Link>

              <Link to={"mailto:samaneh.sarchami777@gmail.com"}>
                <Stack direction={'row'} gap={1}>
                  <CallIcon  sx={{color:'secondary.light'}} />
                  <Typography sx={{textDecoration:'underline', color:'secondary.light'}}>+98 937 372 5256</Typography>
                </Stack>
              </Link>
            </Stack>
        </Stack>


            
        <img src={"/images/13.jpg"} alt='' style={{height:'300px', width:'100%', maxWidth:'300px', objectFit:'contain'}} />  
      </Stack>
    </Box>
  )
}
