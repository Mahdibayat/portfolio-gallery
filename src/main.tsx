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
import { createTheme } from '@mui/material';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes
} from "react-router-dom";
import SiteLayout from './components/siteLayout.tsx';
import ARoomForOnesWon from './pages/app/aRoomForOnesWon.tsx';
import Contact from './pages/app/contact.tsx';
import CVPage from './pages/app/cv.tsx';
import Paintings from './pages/app/paintings.tsx';
import AestheticsOfSuffering from './pages/app/paintings/aestheticsOfSuffering.tsx';
import AllAroundMe from './pages/app/paintings/allAroundMe.tsx';
import AnAfternoonInHiroshima from './pages/app/paintings/anAfternoonInHiroshima.tsx';
import ScatteredPaints from './pages/app/paintings/scattered.tsx';
import ThatDay from './pages/app/paintings/thatDay.tsx';
import Poems from './pages/app/poems.tsx';
import PageOne from './pages/pageOne.tsx';
import StartPage from './pages/startPage.tsx';

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
    mode: 'light',
    primary: {
      main: '#9e2e03',
      light: '#ff6b04',
      dark: '#691e01',
      contrastText: '#fff',
    },
    secondary: {
      main: '#e6dcd5',
      light: '#fff2ec',
      dark: "#99928e",
      contrastText: '#000',
    },
    background: {
      default: "#fff",
      paper: '#e6dcd5'
    },

  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPage />} />

          <Route path='/app' element={<SiteLayout />}>
            <Route index element={<PageOne />} />
            <Route path='/app/paintings'>
              <Route index element={<Paintings />} />
              <Route path='/app/paintings/scattered' element={<ScatteredPaints />} />
              <Route path='/app/paintings/all-around-me' element={<AllAroundMe />} />
              <Route path='/app/paintings/an-afternoon-in-hiroshima' element={<AnAfternoonInHiroshima />} />
              <Route path='/app/paintings/aesthetics-of-suffering' element={<AestheticsOfSuffering />} />
              <Route path='/app/paintings/that-day' element={<ThatDay />} />
            </Route>
            <Route path='/app/poems'>
              <Route index element={<Poems />} />
              <Route path="/app/poems/A-room-for-one's-won" element={<ARoomForOnesWon />} />
            </Route>
            <Route path='/app/CV' element={<CVPage />} />
            <Route path='/app/contact' element={<Contact />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
