import { Grid, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export default function Poems() {
  return (
    <Grid container spacing={5} sx={{justifyContent:'center', mt:5}} >
      <Grid item xs={12} md={6}>
        <Link to={'/app/poems/poems'}>
          <Stack
            sx={{
              position: 'relative',
              width: 1,
              maxWidth: '700px',
              height:1,
              justifyContent: 'space-between',
              ":hover": {
                ">h3": {
                  color: 'primary.main'
                }
              }
            }}
          >
            <img src={'/images/39.jpeg'} alt="" style={{ width:"100%", height:'100%', aspectRatio:"1.33 / 1", objectFit: 'contain',
              filter: 'contrast(339%)',
              WebkitFilter: 'contrast(339%)'      
          }} />
            <Typography component={'h3'} sx={{fontSize: '2rem', color: 'secondary.dark', textAlign: 'center', pt:2, transition: '500ms'}}>Poems Store</Typography>
          </Stack>
        </Link>
      </Grid>

      <Grid item xs={12} md={6} sx={{display:'flex', justifyContent:'center'}}>
        <Link to={"/app/poems/A-room-for-one's-won"}>
          <Stack
            sx={{
              position: 'relative',
              width: 1,
              height:1,
              maxWidth: '400px',
              marginLeft: 'auto',
              justifyContent: 'space-between',
              pb: {xs: 10, md: 0},
              ":hover": {
                ">h3": {
                  color: 'primary.main'
                }
              }
            }}
            gap={3}
          >
            <img src={'/images/43.jpeg'} alt="" style={{ width:"100%", height:"100%", aspectRatio:"1.33 / 1", objectFit: 'contain'}} />
            <Typography component={'h3'} sx={{fontSize: '2rem', color: 'secondary.dark', textAlign: 'center', pt:2, transition: '500ms'}}>A room for one's won</Typography>
          </Stack>
        </Link>
      </Grid>
    </Grid>
  )
}
