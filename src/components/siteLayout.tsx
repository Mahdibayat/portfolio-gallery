import { Box, Container, Stack, Tab, Tabs } from "@mui/material";
import { Outlet } from "react-router-dom";

import { pagesSignal } from "../state/pageSignal";

export default function SiteLayout() {
  return (
    <>
      <Box component={'header'}
        sx={{
          bgcolor:'secondary.main',
          pt:1
        }}
      >
        <Stack component='nav' alignItems={'center'}>
          <Tabs onChange={(_,value) => pagesSignal.value = value} value={pagesSignal.value}>
            <Tab value='paintings' label="Paintings" />
            <Tab value='poems' label="Poems" />
            <Tab value='CV' label="CV" />
            <Tab value='designs' label="Designs" />
            {/* <Tab value='contact' label="contact" /> */}
          </Tabs>
        </Stack>
      </Box>

      <Container component={'main'}
        sx={{
          height:'calc(100vh - 56px - 40px)'
        }}
      >
        <Outlet />
      </Container>

      <footer>
        <h1>footer</h1>

      </footer>
    </>
  )
}
