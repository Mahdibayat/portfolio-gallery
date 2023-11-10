import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import CallIcon from '@mui/icons-material/Call';
import DownloadIcon from '@mui/icons-material/Download';
import { Box, Grid, Paper, Stack, Typography, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';

export default function CVPage() {
  const isMobile = useMediaQuery((t:any) => t.breakpoints.down('md'));
  return (
    <Stack gap={3} sx={{mt:5}}>

      <Grid 
        container 
        spacing={1} 
        component={Paper}
        sx={{
          borderRadius: 3,
          p:2,
          px: isMobile ? 1 : 4,
          maxWidth: '1000px',
          margin: 'auto'
        }}
      >
        <Grid item xs={12} md={6} order={{xs:2, md:1}}>
          <Typography sx={{fontSize:'1.2rem' }}>Samaneh Sarchame</Typography>
            <Stack gap={1} sx={{mt:2}}>
              <Link to={'mailto:samaneh.sarchami777@gmail.com'}>
                <Stack direction={'row'} gap={1}>
                  <AlternateEmailIcon />
                  <Typography sx={{textDecoration:'underline', color:'primary.main', overflow:'clip'}}>samaneh.sarchami777@gmail.com</Typography>
                </Stack>
              </Link>

              <Link to={'tel:+989373725256'}>
                <Stack direction={'row'} gap={1}>
                  <CallIcon />
                  <Typography sx={{textDecoration:'underline', color:'primary.main'}}>+98 937 372 5256</Typography>
                </Stack>
              </Link>

              <a download={true} href={"/cv-Sarchami.pdf"} >
                <Stack direction={'row'} gap={1}>
                  <DownloadIcon />
                  <Typography sx={{textDecoration:'underline', color:'primary.main'}}>DownLoad CV</Typography>
                </Stack>
              </a>
            </Stack>
            
        </Grid>

        <Grid item xs={12} md={6} order={{xs:1, md:2}}>
          <Box sx={{
            width: '130px',
            height: '140px',
            border: '5px solid #fff',
            borderRadius: '5px',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            ml: 'auto',
          }}>
            <img src={"/images/14.jpg"} alt='samaneh sarchami' style={{
              width:'100%',
              height: '100%',
              objectFit: 'cover'
            }} />
          </Box>
        </Grid>
      </Grid>

      <Grid
        component={Paper}
        sx={{
          borderRadius: 3,
          p:2,
          px: isMobile ? 1 : 4,
          my: 2,
          mb: 6,
        }}
      >
        <Typography component={'h3'} variant='h4'>EDUCATION</Typography>
        <Typography>MFA in Painting, Azad University, Tehran, (2011-2014) Thesis: Aesthetics of suffering, Iranian contemporary painting in social context</Typography>
        <Typography>BFA in Painting, University of Art, Tehran, (2003-2007) Thesis: Imaginary of Nuclear Weapons in Asia</Typography>
        <Typography>Associate Degree in Graphic Design, Alzahra Institute, Mashhad, (1995-1998) Thesis: Investigating the role of mythology on Iranian kilims</Typography>
        <Typography>Diploma, Ra’fati Art School, Mashhad, (1993-1995)</Typography>

        <br />

        <Typography component={'h3'} variant='h4'>EDITOR</Typography>
        <Typography>Asre Ertebat Newspaper, Tehran, (2016-2017)</Typography>
        <Typography>Shahrvand Newspaper, Tehran, (2015-2016)</Typography>
        <Typography>Art and Media Magazine, Tehran, (2015)</Typography>
        <Typography>Bahar Newspaper, Tehran, (2013-2015)</Typography>
        <Typography>On the Other Side of the Camera (book), Pargar publication, Tehran, (2013)</Typography>
        <Typography>Shargh Newspaper, Tehran, (2010-2013)</Typography>
        <Typography>Yas-e-No Newspaper, Tehran, (2009-2010)</Typography>
        <Typography>Art Tomorrow Magazine, Tehran, (2009)</Typography>
        <Typography>Shabakeh Magazine, Tehran, (2008-2009)</Typography>

        <br />
        
        <Typography component={'h3'} variant='h4'>PUBLISHED REVIEW</Typography>
        <Typography>Honar Agah Magazine, (2018) For Aleppo, a review of Javad Modarresi’s artworks, Artin Art Gallery, Mashhad</Typography>
        <Typography>Honar Agah Magazine, (2016) Mahta Mashayeki Exhibition, a review of Mahta Mashayekhi’s exhibition, Radin Art Gallery, Mashhad</Typography>
        <Typography>Art and Media Magazine, (2015) Life, a review of Reza Lavasani’s installation, Asar Art Gallery, Tehran</Typography>
        <Typography>Shargh Newspaper, (2013) Beyond the Media; an interview with Hamid Severi, the curator of Beibabeiniat exhibition, Mahe Mehr Gallery, Tehran</Typography>
        <Typography>Tandis Magazine, (2006) The first party in front of The Last Supper; a critique about The Dinner Party by Judy Chicago</Typography>

        <br />

        <Typography component={'h3'} variant='h4'>EXHIBITION</Typography>
        <Typography>The beauty of Suffering, Ravand Art Gallery, Mashhad, (2021)</Typography>
        <Typography>The Beauty of Suffering, Azad University Gallery, Tehran, (2014)</Typography>
        <Typography>The Windows, Performance, Azad University Gallery, Tehran, (2013)</Typography>
        <Typography>An Afternoon in Hiroshima, Art University Gallery, Tehran, (2007)</Typography>

        <br />
        
        <Typography component={'h3'} variant='h4'>TEACHING EXPERIENCE</Typography>
        <Typography>Radin Art Gallery, Mashhad, (2022-Present) Courses: Painting, Drawing, Photography</Typography>
        <Typography>University of Art and Culture, Mashhad, (2020-2022) Courses: Aesthetics, Photography</Typography>
        <Typography>Art History, Radin Art Gallery, Mashhad, (2019-2020) Courses: The evolution of European art from ancient times to realism</Typography>
        <Typography>Private teaching, Tehran/Mashhad, (2001-Present) Courses: Drawing, painting</Typography>
        <Typography>Alborz High School, Mashhad, (2018-2019) Courses: Photography </Typography>
        <Typography>Soroosh High School, Mashhad, (2000-2001) Courses: Painting</Typography>

        <br />
        
        <Typography component={'h3'} variant='h4'>PUBLICATION</Typography>
        <Typography>On the other side of camera, Pargar publication, Tehran, 2013 Editing the book</Typography>
        <Typography>Hamin Farda Bood magazine, Tehran, 2008 A multi-poet (19 poets) for one poetry (the first 19 poets for Ghazal (a style of Persian poetry)</Typography>
        <Typography>Aghaze Enhena, Mashhad, 2002 A Poem</Typography>
        <Typography>Shamim magazine, Mashhad, 1997-2001 Series of poems during time</Typography>

        <br />

        
        <Typography component={'h3'} variant='h4'>GRAPHIC DESIGN</Typography>
        <Typography>Forsat-e-Emrooz Newspaper, Tehran, 2014 Designer</Typography>
        <Typography>Singer Company, Tehran, 2009-2010 Advertising expert</Typography>
        <Typography>Honare Farda Company, Mashhad, 1999-2000 Graphic designer</Typography>
        <Typography>Aghaze Enhena magazine, Mashhad, 1999 Designer</Typography>

        <br />

        <Typography component={'h3'} variant='h4'>Computer SKILLS</Typography>
        <ul>
          <li>InDesign</li>
          <li>Photoshop</li>
          <li>Lightroom</li>
          <li>Premier</li>
          <li>Office (Word – Excel)</li>
        </ul>

        <br />
        
        <Typography component={'h3'} variant='h4'>LANGUAGES</Typography>
        <ul>
          <li>Farsi (Native)</li>
          <li>English (Advanced)</li>
          <li>Arabic (Basic)</li>
          <li>French (Basic)</li>
        </ul>
      </Grid>
      
    </Stack>
  )
}
