import React from 'react';
import ReactDOM from 'react-dom/client';
import 'swiper/css';
// import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";
import './index.css';

import { ThemeProvider } from '@emotion/react';
import { CssBaseline, createTheme } from '@mui/material';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes
} from "react-router-dom";
import SiteLayout from './components/siteLayout.tsx';
import ARoomForOnesOwn from './pages/app/aRoomForOnesOwn.tsx';
import Contact from './pages/app/contact.tsx';
import CVPage from './pages/app/cv.tsx';
import Paintings from './pages/app/paintings.tsx';
import AestheticsOfSuffering from './pages/app/paintings/aestheticsOfSuffering.tsx';
import AllAroundMe from './pages/app/paintings/allAroundMe.tsx';
import AnAfternoonInHiroshima from './pages/app/paintings/anAfternoonInHiroshima.tsx';
import MiddleEve from './pages/app/paintings/middleEve.tsx';
import ThatDay from './pages/app/paintings/thatDay.tsx';
import Poems from './pages/app/poems.tsx';
import PageOne from './pages/pageOne.tsx';
import StartPage from './pages/startPage.tsx';
import Stigmata from './pages/app/stigmata.tsx';
import TheWindow from './pages/app/paintings/theWindow.tsx';
import ScrollToTop from './components/scrollToTop.tsx';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1000,
      lg: 1500,
      xl: 2000,
    },
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#5a5c5a',
      light: '#757575',
      dark: '#212121',
      contrastText: '#fff',
    },
    secondary: {
      main: '#99928e',
      light: '#ededed',
      dark: "#000",
      contrastText: '#fff',
    },
    background: {
      default: "#e6dcd5",
      paper: '#99928e'
    },

  },
  typography: {
    fontFamily: 'Roboto Condensed',
    fontSize: 13,
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<StartPage />} />

          <Route path='/app' element={<SiteLayout />}>
            <Route index element={<PageOne />} />
            <Route path='/app/paintings'>
              <Route index element={<Paintings />} />
              <Route path='/app/paintings/all-around-me' element={<AllAroundMe />} />
              <Route path='/app/paintings/middle-eve' element={<MiddleEve />} />
              <Route path='/app/paintings/an-afternoon-in-hiroshima' element={<AnAfternoonInHiroshima />} />
              <Route path='/app/paintings/aesthetics-of-suffering' element={<AestheticsOfSuffering />} />
              <Route path='/app/paintings/that-day' element={<ThatDay />} />
            </Route>
            <Route path='/app/poems'>
              <Route index element={<Poems />} />
              <Route path="/app/poems/A-room-for-one's-won" element={<ARoomForOnesOwn />} />
            </Route>
            <Route path='/app/stigmata' element={<Stigmata />} />
            <Route path='/app/the-window' element={<TheWindow />} />
            <Route path='/app/CV' element={<CVPage />} />
            <Route path='/app/contact' element={<Contact />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
