import { Box, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";


const data : {
  imgUrl: string
  aspectRatio: string
  link: string
  title: string
  time: string
}[]  = [
  {
    imgUrl : "/images/26.jpg",
    aspectRatio : "0.87 / 1",
    link : "/app/paintings/an-afternoon-in-hiroshima",
    title : "an afternoon in hiroshima",
    time : "(2006)",
  },
  {
    imgUrl : "/images/15.png",
    aspectRatio : "0.85 / 1",
    link : "/app/paintings/middle-eve",
    title : "Middle Eve",
    time : "(2007)",
  },
  {
    imgUrl : "/images/34.jpg",
    aspectRatio : "1.22 / 1",
    link : "/app/paintings/that-day",
    title : "That Day",
    time : "(2013)",
  },
  {
    imgUrl : "/images/48.jpg",
    aspectRatio : "1.33 / 1",
    link : "/app/the-window",
    title : "The Window",
    time : "(2013)",
  },
  {

    imgUrl : "/images/12.jpg",
    aspectRatio : "1.79 / 1",
    link : "/app/paintings/aesthetics-of-suffering",
    title : "Aesthetics of suffering",
    time : "(2014)",
  },
  {
    imgUrl : "/images/42.jpeg",
    aspectRatio : "1.33 / 1",
    link : "/app/poems/A-room-for-one's-won",
    title : "A room for one's own",
    time : "2018 2020",
  },
  {
    imgUrl : "/images/51.jpg",
    aspectRatio : "1.01 / 1",
    link : "/app/stigmata",
    title : "Stigmata",
    time : "(2023)",
  }
]

export default function PageOne() {
  const isMobile = useMediaQuery((t: any) => t.breakpoints.down('md'))
  
  return (
    <Grid
      container
      spacing={1.5}
      sx={{py: '35px'}}
    >
      {
        data.map(item =>(
          <Grid key={item.imgUrl} item xs={6} md={4}>
            <Link to={item.link}>
              <Stack gap={1} alignItems={'center'}
                sx={{
                  cursor: 'pointer',
                  ":hover": {
                    "> img": {
                      opacity:'.5',
                    },
                    "> p": {
                      color:'gray'
                    }
                  }
                }}
              >
                <Box sx={{
                  width:1,
                  "> img": {
                    width: 1, aspectRatio: '1/1', objectFit:'cover', 
                      transition: 'opacity .3s ease-out',
                  }
                }}>
                  <img src={item.imgUrl} alt={item.title} />
                </Box>
                <Typography sx={{color:'#0f0f0f'}}>{item.title} <Typography component={'small'}>{item.time}</Typography></Typography>
              </Stack>
            </Link>
          </Grid>
        ))
      }
    </Grid>
  );
}
