import { Box, Typography, useTheme } from '@mui/material';
import React from 'react';

import { Masonry } from '@mui/lab';
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import BackButton from '../../../components/backButton';
import MasonItem from '../../../components/masonItem';




export default function AllAroundMe() {
  const [open, setOpen] = React.useState<false | number>(false);
  const t = useTheme();

  return (
    <>
      <BackButton />

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
          All Around Me (2012)
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
            imgUrl="/images/11.jpg"
            aspectRatio="1.2 / 1"
            onClick={()=>setOpen(0)}
          />

          <MasonItem
            imgUrl="/images/16.jpg"
            aspectRatio="1.04 / 1"
            onClick={()=>setOpen(1)}
          />
          
          <MasonItem
            imgUrl="/images/17.jpg"
            aspectRatio="1.04 / 1"
            onClick={()=>setOpen(2)}
          />
          
          <MasonItem
            imgUrl="/images/18.jpg"
            aspectRatio="1.3 / 1"
            onClick={()=>setOpen(3)}
          />
          
          <MasonItem
            imgUrl="/images/19.jpg"
            aspectRatio="1.19 / 1"
            onClick={()=>setOpen(4)}
          />

          </Masonry>
        </Box>

      
      <Lightbox
        open={open !== false}
        close={() => setOpen(false)}
        plugins={[Thumbnails]}
        index={open? open : 0}
        slides={[
          { src: "/images/11.jpg" },
          { src: "/images/16.jpg" },
          { src: "/images/17.jpg" },
          { src: "/images/18.jpg" },
          { src: "/images/19.jpg" },
        ]}
      />
    </>
  )
}
