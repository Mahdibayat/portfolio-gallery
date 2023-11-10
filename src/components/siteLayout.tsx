import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MenuIcon from '@mui/icons-material/Menu';
import { Container, Drawer, IconButton, Stack, Tab, Tabs, Typography, useMediaQuery } from "@mui/material";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { menuDrawerSignal } from "../state/menuDrawerSignal";
import { pagesSignal } from "../state/pageSignal";

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
          boxShadow: t => `0 -1px 6px 0 ${t.palette.primary.main}`,
          position:'sticky',
          top: 0,
          zIndex: 100,
        }}
      >
        <Link to={'/app'} onClick={()=> pagesSignal.value = null}>
          <Typography sx={{
            fontSize:'1.5rem',
            color: !pagesSignal.value ? 'primary.dark' : undefined,
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
          borderTopRightRadius: 5,
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
        sx={{
        }}
      >
      <Stack component='nav' alignItems={'center'}
        sx={{
          minWidth:'200px',
          bgcolor:'background.paper',
          height:1
        }}
        gap={3}
      >
        <Tabs onChange={(e,v)=> {
            handleChangeRoute(e,v);
            setTimeout(()=>{
              menuDrawerSignal.value = false
            }, 500)
        }} value={pagesSignal.value} orientation="vertical"
          sx={{ml:'auto', textAlign:'center', width:1, mt: '20vh' }}
        >
          <Tab sx={{color:'white'}} value='paintings' label="Paintings" />
          <Tab sx={{color:'white'}} value='poems' label="Poems" />
          <Tab sx={{color:'white'}} value='CV' label="CV" />
          <Tab sx={{color:'white'}} value='contact' label="Contact" />
        </Tabs>
      </Stack>
      </Drawer>
    </>
  )
}
