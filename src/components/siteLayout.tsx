import { Box, Container, Drawer, Fade, IconButton, Stack, Tab, Tabs, Typography, useMediaQuery } from "@mui/material";
import { Link, Navigate, Outlet } from "react-router-dom";
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import {useNavigate} from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import { pagesSignal } from "../state/pageSignal";
import { Theme } from "@emotion/react";
import { menuDrawerSignal } from "../state/menuDrawerSignal";

export default function SiteLayout() {
  const navigate = useNavigate();
  const isMobile = useMediaQuery((t: any) => t.breakpoints.down("md"));

  function handleChangeRoute(_:any,value: any) {
    pagesSignal.value = value
    navigate(value)
  }

  return (
    <>
      <Stack component={'header'}
        direction={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
        sx={{
          bgcolor:'secondary.main',
          pt:1,
          px: isMobile ? 2 : 10,
          borderRadius: '0 0 30px 30px',
          boxShadow: t => `0 -1px 6px 0 ${t.palette.primary.main}`,
          position:'sticky',
          top: 0,
          zIndex: 100
        }}
      >
        <Link to={'/app'} onClick={()=> pagesSignal.value = null}>
          <Typography className="font-pacifico" sx={{
            fontFamily:'Pacifico', 
            fontSize:'1.5rem',
            color: !pagesSignal.value ? 'primary.main' : undefined,
            transition: 'color 500ms'
        }}>Samaneh Sarchami</Typography>
        </Link>

        {
          isMobile ?
            <IconButton onClick={() => menuDrawerSignal.value = true}>
              <MenuIcon />
            </IconButton>
            :
            <Stack component='nav' alignItems={'center'}>
              <Tabs onChange={handleChangeRoute} value={pagesSignal.value}>
                <Tab value='paintings' label="Paintings" />
                <Tab value='poems' label="Poems" />
                <Tab value='designs' label="Designs" />
                <Tab value='CV' label="CV" />
                <Tab value='contact' label="Contact" />
              </Tabs>
            </Stack>
        }
      </Stack>

      <Container component={'main'}
        sx={{
          height:'calc(100vh - 56px - 40px)'
        }}
      >
        <Outlet />
      </Container>

      <Stack 
        component={'footer'}
        direction='row'
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          borderTopRightRadius: 30,
          bgcolor: 'rgba(0,0,0,0.3)',
          backdropFilter: 'blur(7px)',
          p: 1,
          pr: 2,
          gap: 2
        }}
      >
        <IconButton>
          <InstagramIcon />
        </IconButton>

        <Link to={'mailto:samaneh.sarchami777@gmail.com'}>
          <IconButton>
            <EmailIcon />
          </IconButton>
        </Link>

        <Link to={'tel:+989373725256'}>
          <IconButton>
            <LocalPhoneIcon />
          </IconButton>
        </Link>
      </Stack>

      <Drawer
        open={menuDrawerSignal.value}
        onClose={() => menuDrawerSignal.value = false}
        anchor="right"
      >
      <Stack component='nav' alignItems={'center'}
        sx={{
          minWidth:'200px'
        }}
        gap={3}
      >
        <Typography className="font-pacifico" sx={{mt:3, fontSize:'1.5rem', fontWeight:"800", fontFamily:'Pacifico', }}>Menu</Typography>
        <Tabs onChange={(e,v)=> {
            handleChangeRoute(e,v);
            setTimeout(()=>{
              menuDrawerSignal.value = false
            }, 500)
        }} value={pagesSignal.value} orientation="vertical"
          sx={{ml:'auto'}}
        >
          <Tab value='paintings' label="Paintings" />
          <Tab value='poems' label="Poems" />
          <Tab value='designs' label="Designs" />
          <Tab value='CV' label="CV" />
          <Tab value='contact' label="Contact" />
        </Tabs>
      </Stack>
      </Drawer>
    </>
  )
}
