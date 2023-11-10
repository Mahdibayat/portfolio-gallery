import { Box, Typography, useTheme } from '@mui/material';
import React from 'react';

import { Masonry } from '@mui/lab';
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import MasonItem from '../../components/masonItem';
import BackButton from '../../components/backButton';

export default function ARoomForOnesOwn() {
  const [open, setOpen] = React.useState<false | number>(false);
  const t = useTheme()

  return (
    
    <>
    <BackButton />
    <Box sx={{ mt: 2 }}>
      <Typography
        component={"h1"}
        sx={{
          textAlign: "center",
          fontSize: "2rem",
          color: "primary.main",
          pb: 3,
          pt: {xs:5, md:0},
        }}
      >
        A room for one's won (2018- 2020)
      </Typography>
      <Masonry
        columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}
        spacing={6}
        sx={{
          [t.breakpoints.down("md")]: {
            m: "0",
          },
        }}
      >
        <MasonItem
          imgUrl="/images/38.jpeg"
          aspectRatio="0.56 / 1"
          onClick={()=>setOpen(0)}
        />
        <MasonItem
          imgUrl="/images/39.jpeg"
          aspectRatio="1.33 / 1"
          onClick={()=>setOpen(1)}
        />
        <MasonItem
          imgUrl="/images/40.jpeg"
          aspectRatio="1.78 / 1"
          onClick={()=>setOpen(2)}
        />
        <MasonItem
          imgUrl="/images/41.jpeg"
          aspectRatio="1.48 / 1"
          onClick={()=>setOpen(3)}
        />
        <MasonItem
          imgUrl="/images/42.jpeg"
          aspectRatio="1.33 / 1"
          onClick={()=>setOpen(4)}
        />
      </Masonry>
    </Box>

      
      <Lightbox
        open={open !== false}
        index={open? open : 0}
        close={() => setOpen(false)}
        plugins={[Thumbnails]}
        slides={[
          { src: "/images/38.jpeg" },
          { src: "/images/39.jpeg" },
          { src: "/images/40.jpeg" },
          { src: "/images/41.jpeg" },
          { src: "/images/42.jpeg" },
        ]}
      />
    </>
  )
}