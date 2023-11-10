import { Box, Typography, useTheme } from '@mui/material';
import React from 'react'
import BackButton from '../../../components/backButton';
import { Masonry } from '@mui/lab';
import MasonItem from '../../../components/masonItem';
import Lightbox from 'yet-another-react-lightbox';
import { Thumbnails } from 'yet-another-react-lightbox/plugins';

export default function TheWindow() {
  const [open, setOpen] = React.useState<false | number>(false);
  const t = useTheme();

  return (
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
        The Window (2013)
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
          imgUrl="/images/48.jpg"
          aspectRatio="4 / 3"
          onClick={()=>setOpen(0)}
        />

        <MasonItem
          imgUrl="/images/49.jpg"
          aspectRatio="1.42 / 1"
          onClick={()=>setOpen(1)}
        />

        <MasonItem
          imgUrl="/images/50.jpg"
          aspectRatio="1.5 / 1"
          onClick={()=>setOpen(2)}
        />
      </Masonry>

      <Lightbox
        open={open !== false}
        index={open ? open : 0}
        close={() => setOpen(false)}
        plugins={[Thumbnails]}
        slides={[
          { src: "/images/48.jpg" },
          { src: "/images/49.jpg" },
          { src: "/images/50.jpg" },
        ]}
      />
    </Box>
  );
}
