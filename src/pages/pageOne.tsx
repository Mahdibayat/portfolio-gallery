import { Box, Typography, useMediaQuery } from "@mui/material";

import { Timeline } from "@mui/lab";
import TimeLineItem from "../components/timeLineItem";
import { Theme } from "@emotion/react";

export default function PageOne() {
  const isMobile = useMediaQuery((t: any) => t.breakpoints.down('md'))
  
  return (
    <Box
      sx={{
        width: 1,
        maxWidth: '1200px',
        m:'30px auto 20px',
        ".MuiTimeline-positionRight": {
          transform: 'translateX(-138px)',
          width: 'calc(100% + 150px)',
        }
      }}
    >
      <Typography
        component={'h1'} 
        sx={{textAlign:'center', fontSize: '2rem', color:'secondary.dark', pb:3}}
      >At a glance</Typography>


      <Timeline position={isMobile ? "right" : "alternate-reverse"}>
      <TimeLineItem
        imgUrl="/images/26.jpg"
        aspectRatio="0.87 / 1"
        link="/app/paintings/an-afternoon-in-hiroshima"
        title="an afternoon in hiroshima"
        time="(2006)"
      />
      <TimeLineItem
        imgUrl="/images/15.png"
        aspectRatio="0.85 / 1"
        link="/app/paintings/middle-eve"
        title="Middle Eve"
        time="(2007)"
      />
      <TimeLineItem
        imgUrl="/images/16.jpg"
        aspectRatio="1.04 / 1"
        link="/app/paintings/all-around-me"
        title="All Around Me"
        time="(2012)"
      />
      <TimeLineItem
        imgUrl="/images/34.jpg"
        aspectRatio="1.22 / 1"
        link="/app/paintings/that-day"
        title="That Day"
        time="(2013)"
      />
      <TimeLineItem
        imgUrl="/images/48.jpg"
        aspectRatio="1.33 / 1"
        link="/app/the-window"
        title="The Window"
        time="(2013)"
      />
      <TimeLineItem
        imgUrl="/images/12.jpg"
        aspectRatio="1.79 / 1"
        link="/app/paintings/aesthetics-of-suffering"
        title="Aesthetics of suffering"
        time="(2014)"
      />

      <TimeLineItem
        imgUrl="/images/42.jpeg"
        aspectRatio="1.33 / 1"
        link="/app/poems/A-room-for-one's-won"
        title="A room for one's own"
        time={<Typography>(2018 <br/> 2020)</Typography>}
      />

      <TimeLineItem
        imgUrl="/images/51.jpg"
        aspectRatio="1.01 / 1"
        link="/app/stigmata"
        title="Stigmata"
        time="(2023)"
      />
    </Timeline>
    </Box>
  );
}
