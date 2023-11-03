import { Box, Typography } from '@mui/material'

import { pagesSignal } from '../state/pageSignal'
import { Link } from 'react-router-dom'

interface MasonItemType {
  imgUrl: string
  title: string
  titleSide: 'top' | 'bottom'
  aspectRatio: string
  link: string
}

export default function MasonItem({imgUrl, title, titleSide, aspectRatio, link}: MasonItemType) {
  return (
    <Link to={link}>
      <Box
        sx={{
          position: 'relative',
          borderRadius: 2,
          width: 1,
          aspectRatio: aspectRatio,
          overflow: 'hidden',
          bgcolor: 'background.paper',
          cursor:'pointer',
          ":hover": {
            ">h3": {
              color: '#fff'
            },
            ">img": {
              transform: 'scale(1.2)'
            }
          },
          boxShadow: t => `0 0 6px 0px ${t.palette.primary.main}`
        }}
      >
        <img src={imgUrl} alt="" onClick={() => pagesSignal.value = "paintings"}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            transition: 'all 7000ms'
          }}
        />
        <Typography
          sx={{
            position: 'absolute', 
            color:'secondary.main',
            left: '50%',
            [titleSide]: '10px',
            transform: 'translateX(-50%)',
            bgcolor: "rgba(0, 0 , 0, 0.5)",
            borderRadius: 2,
            px:1,
            textShadow: '0 0 5px #f00',
            fontFamily:'Pacifico'
          }}
          component={'h3'}
          variant="h4"
        >{title}</Typography>
      </Box>
    </Link>
  )
}
