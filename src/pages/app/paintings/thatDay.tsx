import { Box, Typography, useTheme } from '@mui/material';
import React from 'react';

import { Masonry } from '@mui/lab';
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import BackButton from '../../../components/backButton';
import MasonItem from '../../../components/masonItem';

export default function ThatDay() {
  const [open, setOpen] = React.useState(false);
  const t = useTheme();

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
          That day (2013)
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
            imgUrl="/images/34.jpg"
            aspectRatio="1.22 / 1"
            onClick={()=>setOpen(true)}
          />

          <MasonItem
            imgUrl="/images/35.jpg"
            aspectRatio="1.1 / 1"
            onClick={()=>setOpen(true)}
          />

          <MasonItem
            imgUrl="/images/36.jpg"
            aspectRatio="1.45 / 1"
            onClick={()=>setOpen(true)}
          />

          <MasonItem
            imgUrl="/images/37.jpg"
            aspectRatio="1.48 / 1"
            onClick={()=>setOpen(true)}
          />
        </Masonry>
      </Box>
      
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        plugins={[Thumbnails]}
        slides={[
          { src: "/images/34.jpg" },
          { src: "/images/35.jpg" },
          { src: "/images/36.jpg" },
          { src: "/images/37.jpg" },
        ]}
      />
    </>
  )
}
