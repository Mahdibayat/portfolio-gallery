
import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import { Box, Stack, Typography } from '@mui/material';

export default function ScatteredPaints() {

  return (
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
        height: {xs:'300px', md:'600px'},
        "> img": {
          display: 'block',
          width:1,
          height: 1,
          objectFit: 'contain',
        }
      }
    }}>
      <Stack alignItems={'center'}>
        <Typography  component={'h1'} variant={'h2'} sx={{mb: 2, mt:1, fontSize:{xs:'1.4rem', md:'3rem'}}}>Scattered</Typography>
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
        loop={true}
      >
        <SwiperSlide style={{width:'100%' ,maxWidth: '500px'}}>
          <img src="/images/15.png" alt='' />
        </SwiperSlide>
        <SwiperSlide style={{width:'100%' ,maxWidth: '250px'}}>
          <img src="/images/7.jpg" alt='' />
        </SwiperSlide>
        <SwiperSlide style={{width:'100%' ,maxWidth: '450px'}}>
          <img src="/images/8.png" alt='' />
        </SwiperSlide>
        <SwiperSlide style={{width:'100%' ,maxWidth: '850px'}}>
          <img src="/images/25.jpg" alt='' />
        </SwiperSlide>
      </Swiper>
    </Box>
  )
}
