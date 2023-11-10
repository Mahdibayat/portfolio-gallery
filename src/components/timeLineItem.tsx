import { TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@mui/lab'
import { Box, Typography } from '@mui/material'

import { Link } from 'react-router-dom'

interface GalleryMasonItemType {
  imgUrl: string
  title: string
  aspectRatio: string
  link: string
  time: string
}

export default function TimeLineItem({imgUrl, title, aspectRatio, link, time}: GalleryMasonItemType) {
  return (
      <TimelineItem>
      <TimelineOppositeContent color="background.paper" sx={{fontSize:'2.5rem'}}>
        {time}
      </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Link to={link}>
            <Box
              sx={{
                bgcolor: 'background.paper',   
                borderRadius: '5px',
              }}
            >
            <Typography
              variant='h3'
              fontSize={'2rem'}
              textAlign={'center'}
              sx={{color:'background.default',
              py:1
            }}
            >{title}</Typography>
                <img
                  src={imgUrl} 
                  alt=""
                  style={{
                    width: '100%',
                    aspectRatio,
                  }}
                />
            </Box>
          </Link>
        </TimelineContent>
      </TimelineItem>
  )
}
