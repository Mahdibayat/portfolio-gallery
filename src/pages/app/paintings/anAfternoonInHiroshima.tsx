import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";


export default function AnAfternoonInHiroshima() {
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
        <Typography  component={'h1'} variant={'h2'} sx={{mb: 2, mt:1}}>An Afternoon In Hiroshima</Typography>
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
          <img src="/images/20.jpg" alt=''  />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/images/21.jpg" alt=''  />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/images/22.jpg" alt=''  />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/images/23.jpg" alt=''  />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/images/24.jpg" alt=''  />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/images/25.jpg" alt=''  />
        </SwiperSlide>
        
        <SwiperSlide>
          <img src="/images/26.jpg" alt=''  />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/images/27.jpg" alt=''  />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/images/28.jpg" alt=''  />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/images/29.jpg" alt=''  />
        </SwiperSlide>
        
      </Swiper>

    </Box>

    
    <Lightbox
      open={open}
      close={() => setOpen(false)}
      plugins={[Thumbnails]}
      slides={[
        { src: "/images/20.jpg" },
        { src: "/images/21.jpg" },
        { src: "/images/22.jpg" },
        { src: "/images/23.jpg" },
        { src: "/images/24.jpg" },
        { src: "/images/25.jpg" },
        { src: "/images/26.jpg" },
        { src: "/images/27.jpg" },
        { src: "/images/28.jpg" },
      ]}
    />
  </>
  )
}
