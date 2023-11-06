import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";

export default function ARoomForOnesWon() {
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
          <Typography  component={'h1'} variant={'h2'} className='font-pacifico' sx={{mb: 2, mt:1, fontSize:'2rem', fontFamily:'Pacifico', color:'secondary.dark', pb: 2}}>A room for one's won</Typography>
        </Stack>

        
        
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{
            delay: 6500,
            disableOnInteraction: false,
          }}
          navigation={true}
          onClick={() => setOpen(true)}
        >
          <SwiperSlide >
            <img src="/images/38.jpeg" alt='' style={{}}  />
          </SwiperSlide>

          <SwiperSlide>
            <img src="/images/39.jpeg" alt=''  />
          </SwiperSlide>

          <SwiperSlide>
            <img src="/images/40.jpeg" alt=''  />
          </SwiperSlide>

          <SwiperSlide>
            <img src="/images/41.jpeg" alt=''  />
          </SwiperSlide>

          <SwiperSlide>
            <img src="/images/42.jpeg" alt=''  />
          </SwiperSlide>

          <SwiperSlide>
            <img src="/images/44.jpeg" alt=''  />
          </SwiperSlide>

          <SwiperSlide>
            <img src="/images/45.jpeg" alt=''  />
          </SwiperSlide>
          
        </Swiper>

      </Box>

      
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        plugins={[Thumbnails]}
        slides={[
          { src: "/images/38.jpeg" },
          { src: "/images/39.jpeg" },
          { src: "/images/40.jpeg" },
          { src: "/images/41.jpeg" },
          { src: "/images/42.jpeg" },
          { src: "/images/44.jpeg" },
          { src: "/images/45.jpeg" },
        ]}
      />
    </>
  )
}