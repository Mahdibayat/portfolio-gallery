import { Box, Stack } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

export default function Paintings() {
  return (
    <Stack
      gap={3}
    >
      <Box sx={{
        width:1,
      }}>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <img src={"/images/"} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={"/images/"} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={"/images/"} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={"/images/"} alt="" />
          </SwiperSlide>
        </Swiper>
      </Box>


    </Stack>
  )
}
