import { Box, Grid, Stack, Typography, useTheme } from "@mui/material";
import React, { useEffect } from "react";

import { Masonry } from "@mui/lab";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import BackButton from "../../../components/backButton";
import MasonItem from "../../../components/masonItem";

export type ProjectDataType = {
  imgUrl:string
  aspectRatio: string
  onClick: number
}

const data: ProjectDataType[] = [
  {
    imgUrl:"/images/20.jpg",
    aspectRatio:"0.73 / 1",
    onClick: 0,
  },
  {
    imgUrl: "/images/1.jpg",
    aspectRatio: "0.83 / 1",
    onClick:  1
  },
  {
    imgUrl: "/images/26.jpg",
    aspectRatio: "0.87 / 1",
    onClick:  2
  },
  {
    imgUrl: "/images/22.jpg",
    aspectRatio: "0.73 / 1",
    onClick:  3
  },
  {
    imgUrl: "/images/27.jpg",
    aspectRatio: "0.8 / 1",
    onClick:  4
  },
  {
    imgUrl: "/images/23.jpg",
    aspectRatio: "0.75 / 1",
    onClick:  5
  },
  {
    imgUrl: "/images/24.jpg",
    aspectRatio: "0.73 / 1",
    onClick:  6
  },
  {
    imgUrl : "/images/29.jpg",
    aspectRatio : "0.81 / 1",
    onClick :  7
  },
  {
    imgUrl : "/images/25.jpg",
    aspectRatio : "0.8 / 1",
    onClick :  8
  },
  {
    imgUrl : "/images/21.jpg",
    aspectRatio : "0.72 / 1",
    onClick :  9
  },
  {
    imgUrl: "/images/28.jpg",
    aspectRatio: "0.89 / 1",
    onClick:  10
  }
]

export default function AnAfternoonInHiroshima() {
  const [open, setOpen] = React.useState<false | number>(false);
  const t = useTheme();

  useEffect(()=>{
    return () =>{
      setOpen(false)
    }
  }, [])

  return (
    <Box sx={{ mt: 2 }}>
      {/* <BackButton /> */}
      <Typography
        component={"h1"}
        sx={{
          textAlign: "center",
          fontSize: "1.3rem",
          pb: 3,
          pt: {xs:5, md:0},
        }}
      >
        an afternoon in hiroshima (2006)
      </Typography>
      
      
      <Masonry
        columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}
        spacing={2.5}
        sx={{
          [t.breakpoints.down("md")]: {
            m: "0",
          },
        }}
      >
        {
          data.map(item =>(
            <Box key={item.imgUrl} sx={{
              width:1,
              "> img": {
                width: 1, 
                aspectRatio: item.aspectRatio,
                objectFit:'cover', 
                transition: 'opacity .3s ease-out',
              }
            }}>
              <img src={item.imgUrl} alt={""} />
            </Box>
          ))
        }
      </Masonry>
      

      <Lightbox
        open={open !== false}
        close={() => setOpen(false)}
        plugins={[Thumbnails]}
        index={open ? open : 0}
        slides={[
          { src: "/images/20.jpg" },
          { src: "/images/1.jpg" },
          { src: "/images/26.jpg" },
          { src: "/images/22.jpg" },
          { src: "/images/27.jpg" },
          { src: "/images/23.jpg" },
          { src: "/images/24.jpg" },
          { src: "/images/25.jpg" },
          { src: "/images/29.jpg" },
          { src: "/images/21.jpg" },
          { src: "/images/28.jpg" },
        ]}
      />
    </Box>
  );
}
