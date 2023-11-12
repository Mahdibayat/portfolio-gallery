import { Box, Typography } from '@mui/material'

import { Link } from 'react-router-dom'

interface MasonItemType {
  imgUrl: string
  aspectRatio: string
  title?: string
  link?: string
  onClick?: () => void
}

export default function MasonItem({imgUrl, title, aspectRatio, link, onClick}: MasonItemType) {
  return (
    <Link to={link || "#"} onClick={onClick}>
      <Box
        sx={{
          position: 'relative',
          borderRadius: '5px',
          width: 1,
          bgcolor: 'secondary.main',
          cursor:'pointer',
          ":hover": {
            ">h3": {
              color: 'secondary.light'
            },
          },
          boxShadow: 1
        }}
      >
        <img src={imgUrl} alt=""
          style={{
            width: '100%',
            aspectRatio: aspectRatio,
            transition: 'all 7000ms'
          }}
        />
      </Box>
    </Link>
  )
}
