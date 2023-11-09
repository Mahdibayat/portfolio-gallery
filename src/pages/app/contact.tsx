import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import CallIcon from '@mui/icons-material/Call';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
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
        <Stack justifyContent={'space-around'} gap={6} >
            <Typography component={'h1'} variant='h4' className='font-pacifico'
              sx={{
                fontFamily: "Pacifico",
                color:'secondary.dark',
              }}
            >
            Contact Us
            </Typography>

            <Stack gap={1}>
              <Link to={"#"}>
                <Stack direction={'row'} gap={1}>
                  <InstagramIcon />
                  <Typography sx={{textDecoration:'underline', color:'primary.main'}}>Instagram</Typography>
                </Stack>
              </Link>

              <Link to={"mailto:samaneh.sarchami777@gmail.com"}>
                <Stack direction={'row'} gap={1}>
                  <AlternateEmailIcon />
                  <Typography sx={{textDecoration:'underline', color:'primary.main'}}>E-mail</Typography>
                </Stack>
              </Link>

              <Link to={"mailto:samaneh.sarchami777@gmail.com"}>
                <Stack direction={'row'} gap={1}>
                  <CallIcon />
                  <Typography sx={{textDecoration:'underline', color:'primary.main'}}>+98 937 372 5256</Typography>
                </Stack>
              </Link>
            </Stack>
        </Stack>

        
        <ConnectWithoutContactIcon sx={{
          fontSize:'6rem',
          color:'secondary.dark'
        }} />

            
        <img src={"/images/13.jpg"} alt='' style={{height:'300px', width:'100%', maxWidth:'300px', objectFit:'contain'}} />  
      </Stack>
    </Box>
  )
}
