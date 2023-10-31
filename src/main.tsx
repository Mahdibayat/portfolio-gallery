import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import StartPage from './pages/startPage.tsx';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import PageOne from './pages/pageOne.tsx';
import SiteLayout from './components/siteLayout.tsx';

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
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
