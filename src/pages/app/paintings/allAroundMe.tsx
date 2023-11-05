import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";




export default function AllAroundMe() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Box sx={{
        px:{xs:1, sm:2, md: 10},
        mt:{xs:1, sm:2, md: 4},
        ".swiper": {
          width: 1,
          height: 1,
        },
        ".swiper-slide": {
          textAlign: 'center',
          fontSize: '18px',
          background: '#fff',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: {xs:'300px', md:'500px'},
          width: 1,
          maxWidth: '500px',
          "> img": {
            display: 'block',
            width:1,
            height: 1,
            objectFit: 'cover',
          }
          }
        }}
      >
        <Stack alignItems={'center'}>
          <Typography  component={'h1'} variant={'h2'} sx={{mb: 2, mt:1}}>All Around Me</Typography>
        </Stack>

        
        
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          onClick={() => setOpen(true)}
        >
          <SwiperSlide>
            <img src="/images/16.jpg" alt=''  />
          </SwiperSlide>

          <SwiperSlide>
            <img src="/images/17.jpg" alt=''  />
          </SwiperSlide>

          <SwiperSlide>
            <img src="/images/18.jpg" alt=''  />
          </SwiperSlide>

          <SwiperSlide>
            <img src="/images/19.jpg" alt=''  />
          </SwiperSlide>
          
        </Swiper>

      </Box>

      
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        plugins={[Thumbnails]}
        slides={[
          { src: "/images/16.jpg" },
          { src: "/images/17.jpg" },
          { src: "/images/18.jpg" },
          { src: "/images/19.jpg" },
        ]}
      />
    </>
  )
}
