
import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import { Box, Stack, Typography, useTheme } from '@mui/material';
import BackButton from '../../../components/BackButton';
import { Masonry } from '@mui/lab';
import MasonItem from '../../../components/masonItem';
import Lightbox from 'yet-another-react-lightbox';
import { useState } from 'react';
import { Thumbnails } from 'yet-another-react-lightbox/plugins';

export default function MiddleEve() {
  const [open, setOpen] = useState(false);
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
        Middle Eve (2007)
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
          imgUrl="/images/46.jpg"
          aspectRatio="0.88 / 1"
          onClick={()=>setOpen(true)}
        />

        <MasonItem
          imgUrl="/images/47.jpg"
          aspectRatio="0.67 / 1"
          onClick={()=>setOpen(true)}
        />

        <MasonItem
          imgUrl="/images/15.png"
          aspectRatio="0.73 / 1"
          onClick={()=>setOpen(true)}
        />

        <MasonItem
          imgUrl="/images/8.png"
          aspectRatio="0.73 / 1"
          onClick={()=>setOpen(true)}
        />

      </Masonry>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        plugins={[Thumbnails]}
        slides={[
          { src: "/images/15.png" },
          { src: "/images/8.png" },
          { src: "/images/46.jpg" },
          { src: "/images/47.jpg" },
        ]}
      />
    </Box>
  )
}
