import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  BrowserRouter,
  createBrowserRouter,
  Navigate,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import StartPage from './pages/startPage.tsx';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import PageOne from './pages/pageOne.tsx';
import SiteLayout from './components/siteLayout.tsx';
import Paintings from './pages/app/paintings.tsx';
import Poems from './pages/app/poems.tsx';
import CVPage from './pages/app/cv.tsx';
import Designs from './pages/app/designs.tsx';
import Contact from './pages/app/contact.tsx';

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
            <Route path='/app/paintings' element={<Paintings />} />
            <Route path='/app/poems' element={<Poems />} />
            <Route path='/app/CV' element={<CVPage />} />
            <Route path='/app/designs' element={<Designs />} />
            <Route path='/app/contact' element={<Contact />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
