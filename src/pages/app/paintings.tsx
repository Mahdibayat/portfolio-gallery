import { Masonry } from "@mui/lab";
import { Box, Grid, Stack, Typography, useTheme } from "@mui/material";
import MasonItem from "../../components/masonItem";
import { Link } from "react-router-dom";

const data : {
  imgUrl: string
  aspectRatio: string
  link: string
  title: string
}[]  = [
  {
    imgUrl : "/images/21.jpg",
    aspectRatio : "0.72 / 1",
    link : "/app/paintings/an-afternoon-in-hiroshima",
    title : "an afternoon in hiroshima (2006)",
  },
  {
    imgUrl : "/images/15.png",
    aspectRatio : "0.85 / 1",
    link : "/app/paintings/middle-eve",
    title : "Middle Eve (2007)",
  },
  {
    imgUrl : "/images/16.jpg",
    aspectRatio : "1.04 / 1",
    link : "/app/paintings/all-around-me",
    title : "All Around Me (2012)",
  },
  {
    imgUrl : "/images/33.jpg",
    aspectRatio : "1 / 1",
    link : "/app/paintings/aesthetics-of-suffering",
    title : "Aesthetics of suffering (2014)",
  },
  {
    imgUrl : "/images/51.jpg",
    aspectRatio : "1.01 / 1",
    link : "/app/stigmata",
    title : "Stigmata (2023)",
  },
]

export default function Paintings() {
  const t = useTheme()

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
                <Typography sx={{color:'#0f0f0f'}}>{item.title}</Typography>
              </Stack>
            </Link>
          </Grid>
        ))
      }
    </Grid>
  );
}
