import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';


export default function BackButton({top = "70px"}: {top?: string}) {
  const navigate = useNavigate();
  return (
    
    <Box onClick={() => navigate(-1)}
      sx={{
        position: 'absolute',
        top: top,
        left: '10px',
        cursor:'pointer'
      }}
    >
      <ArrowCircleLeftOutlinedIcon
        sx={{
          color: 'secondary.main',
          fontSize:'2.5rem'
        }}
      />
    </Box>
  )
}
