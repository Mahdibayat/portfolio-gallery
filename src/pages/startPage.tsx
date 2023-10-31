import { Box, Button, Fade, IconButton, Stack, Typography, Zoom } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useMediaQuery from '@mui/material/useMediaQuery';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function StartPage() {
  const [mounted, setMounted] = useState<boolean>(false);
  const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down('md'));

  useEffect(() => {
    setMounted(true);
  }, []);

  if(isMobile) {
    return (
      <Fade in={mounted} timeout={1000}>
        <Box
          sx={{
            width:1,
            height: '100vh',
            backgroundImage: 'url(/images/1.jpg)',
            backgroundSize:'contain',
            backgroundPosition:'bottom',
            backgroundRepeat:'no-repeat'
          }}
        >

        <Stack gap={2} justifyContent={'center'} alignItems={'center'} sx={{width: 'inherit', pt: '7vh'}}>
          
          <Fade in={mounted} timeout={4000}>
            <Typography component={'h1'} variant="h3" sx={{fontWeight: '700', color:'secondary.dark'}} >Portfolio</Typography>
          </Fade>

          
          <Fade in={mounted} timeout={5000}>
            <Typography component={'h3'} variant="h5">Samaneh Sarchami</Typography>
          </Fade>

          <Zoom in={mounted} timeout={5000}>
          <Link to={'/one'}>
            <Button
              variant="outlined"
              sx={{minWidth: '300px', mt:1}}
            >
              ENTER
            </Button>
          </Link>
          </Zoom>
        </Stack>

        </Box>
      </Fade>
    )
  }

  return (
    <Fade in={mounted} timeout={1000}>
      <Stack sx={{
          width: 1,
          height: '100vh'
        }}
        direction={'row'}
        justifyContent={'space-between'}
      >
        <Box
          sx={{
            filter: t => `drop-shadow(10px 0 20px ${t.palette.secondary.dark})`
          }}
        >
          <img src={'/images/1.jpg'} alt='' style={{
            height: '99vh',
            width: "auto",
            borderRadius: '0 30px 30px 0'
          }} />
        </Box>

        <Stack gap={2} justifyContent={'center'} alignItems={'center'} sx={{width: 'inherit', position:'relative'}}>
          
          <Fade in={mounted} timeout={4000}>
            <Typography component={'h1'} variant="h3" sx={{fontWeight: '700', color:'secondary.dark'}} >Portfolio</Typography>
          </Fade>

          
          <Fade in={mounted} timeout={5000}>
            <Typography component={'h3'} variant="h5">Samaneh Sarchami</Typography>
          </Fade>

          <Zoom in={mounted} timeout={5000}>
          <Link to={'/app'}>
            <Button
              variant="outlined"
              sx={{minWidth: '210px', mt:1}}
            >
              ENTER
            </Button>
          </Link>
          </Zoom>

          <Stack direction={'row'}
            justifyContent={'space-between'}
            alignItems={'flex-end'}
            sx={{
              position: 'absolute',
              bottom: 20,
              right: 20,
              left: 30,
            }}
          >
            <a href={"mailto:mahdibayat72@hotmail.com"}>
              <Typography fontSize={13}>design & develop by BYT</Typography>
            </a>

            <a href={"https://instagram.com"} target="_blank">
              <IconButton>
                <InstagramIcon sx={{fontSize:'2.2rem'}} />
              </IconButton>
            </a>

          </Stack>
        </Stack>

      </Stack>
    </Fade>
  )
}
