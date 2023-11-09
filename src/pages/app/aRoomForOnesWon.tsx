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
        mt:{xs:6, sm:10, md: 3},
        ".swiper": {
          width: 1,
          height: {xs:"300px", md:'500px'},
        },
        ".swiper-slide": {
          textAlign: 'center',
          fontSize: '18px',
          background: '#fff',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 1,
          ">img" : {
            display: 'block',
            width: '100%',
            height: '100%',
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
          rewind={true}
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{
            delay: 6500,
            disableOnInteraction: false,
          }}
          navigation={true}
          onClick={() => setOpen(true)}
        >
          <SwiperSlide style={{width: '100%', maxWidth:'240px'}} >
            <img src="/images/38.jpeg" alt=''  />
          </SwiperSlide>

          <SwiperSlide style={{width:'100%', maxWidth: '700px'}}>
            <img src="/images/39.jpeg" alt=''  />
          </SwiperSlide>

          <SwiperSlide style={{width:'100%', maxWidth: '900px'}}>
            <img src="/images/40.jpeg" alt=''  />
          </SwiperSlide>

          <SwiperSlide style={{width:'100%', maxWidth: '750px'}}>
            <img src="/images/41.jpeg" alt=''  />
          </SwiperSlide>

          <SwiperSlide  style={{width:'100%', maxWidth: '460px'}}>
            <img src="/images/42.jpeg" alt=''  />
          </SwiperSlide>

          <SwiperSlide  style={{width:'100%', maxWidth: '380px'}}>
            <img src="/images/44.jpeg" alt=''  />
          </SwiperSlide>

          <SwiperSlide  style={{width:'100%', maxWidth: '680px'}}>
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