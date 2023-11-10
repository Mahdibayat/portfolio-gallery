import { Box, Typography, useTheme } from '@mui/material';
import React from 'react';

import { Masonry } from '@mui/lab';
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import BackButton from '../../../components/backButton';
import MasonItem from '../../../components/masonItem';

export default function AestheticsOfSuffering() {
  
  const [open, setOpen] = React.useState(false);
  const t = useTheme()
  
  return (
    
    <>
    
    <Box sx={{ mt: 2 }}>
      <BackButton />
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
        aesthetics of suffering (2014)
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
          imgUrl="/images/30.jpg"
          aspectRatio="1 / 1"
          onClick={()=>setOpen(true)}
        />
        <MasonItem
          imgUrl="/images/12.jpg"
          aspectRatio="1.79 / 1"
          onClick={()=>setOpen(true)}
        />
        <MasonItem
          imgUrl="/images/31.jpg"
          aspectRatio="1 / 1"
          onClick={()=>setOpen(true)}
        />
        <MasonItem
          imgUrl="/images/13.jpg"
          aspectRatio="1 / 1"
          onClick={()=>setOpen(true)}
        />

        <MasonItem
          imgUrl="/images/32.jpg"
          aspectRatio="1 / 1"
          onClick={()=>setOpen(true)}
        />
        <MasonItem
          imgUrl="/images/33.jpg"
          aspectRatio="1 / 1"
          onClick={()=>setOpen(true)}
        />
      </Masonry>
    </Box>

      
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        plugins={[Thumbnails]}
        slides={[
          { src: "/images/30.jpg" },
          { src: "/images/31.jpg" },
          { src: "/images/32.jpg" },
          { src: "/images/33.jpg" },
        ]}
      />
    </>
  )
}
