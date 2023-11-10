import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import BackButton from "../../components/BackButton";
import { Masonry } from "@mui/lab";
import MasonItem from "../../components/masonItem";
import Lightbox from "yet-another-react-lightbox";
import { Thumbnails } from "yet-another-react-lightbox/plugins";

export default function Stigmata() {
  const [open, setOpen] = React.useState(false);
  const t = useTheme()
  return (
    
    <Box sx={{ mt: 2 }}>
      <BackButton />
      <Typography
        component={"h1"}
        sx={{
          textAlign: "center",
          fontSize: "2rem",
          color: "primary.main",
          pb: 3,
          pt: {xs:5, md:0},
        }}
      >
        Stigmata (2023)
      </Typography>
      <Masonry
        columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}
        spacing={6}
        sx={{
          [t.breakpoints.down("md")]: {
            m: "0",
          },
        }}
      >
        <MasonItem
          imgUrl="/images/51.jpg"
          aspectRatio="1 / 1"
          onClick={()=>setOpen(true)}
        />
        <MasonItem
          imgUrl="/images/52.jpg"
          aspectRatio="1 / 1"
          onClick={()=>setOpen(true)}
        />
        <MasonItem
          imgUrl="/images/53.jpg"
          aspectRatio="2 / 1"
          onClick={()=>setOpen(true)}
        />
        </Masonry>

        
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        plugins={[Thumbnails]}
        slides={[
          { src: "/images/51.jpg" },
          { src: "/images/52.jpg" },
          { src: "/images/53.jpg" },
        ]}
      />
      </Box>
  )
}
