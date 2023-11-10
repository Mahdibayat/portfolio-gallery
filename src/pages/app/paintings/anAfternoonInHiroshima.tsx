import { Box, Typography, useTheme } from "@mui/material";
import React from "react";

import { Masonry } from "@mui/lab";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import BackButton from "../../../components/BackButton";
import MasonItem from "../../../components/masonItem";

export default function AnAfternoonInHiroshima() {
  const [open, setOpen] = React.useState(false);
  const t = useTheme();

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
        an afternoon in hiroshima (2006)
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
          imgUrl="/images/20.jpg"
          aspectRatio="0.73 / 1"
          onClick={()=>setOpen(true)}
        />

        <MasonItem
          imgUrl="/images/1.jpg"
          aspectRatio="0.83 / 1"
          onClick={()=>setOpen(true)}
        />

        <MasonItem
          imgUrl="/images/26.jpg"
          aspectRatio="0.87 / 1"
          onClick={()=>setOpen(true)}
        />

        <MasonItem
          imgUrl="/images/22.jpg"
          aspectRatio="0.73 / 1"
          onClick={()=>setOpen(true)}
        />

        <MasonItem
          imgUrl="/images/27.jpg"
          aspectRatio="0.8 / 1"
          onClick={()=>setOpen(true)}
        />

        <MasonItem
          imgUrl="/images/23.jpg"
          aspectRatio="0.75 / 1"
          onClick={()=>setOpen(true)}
        />

        <MasonItem
          imgUrl="/images/24.jpg"
          aspectRatio="0.73 / 1"
          onClick={()=>setOpen(true)}
        />
        <MasonItem
          imgUrl="/images/29.jpg"
          aspectRatio="0.81 / 1"
          onClick={()=>setOpen(true)}
        />

        <MasonItem
          imgUrl="/images/25.jpg"
          aspectRatio="0.8 / 1"
          onClick={()=>setOpen(true)}
        />

        <MasonItem
          imgUrl="/images/21.jpg"
          aspectRatio="0.72 / 1"
          onClick={()=>setOpen(true)}
        />

        <MasonItem
          imgUrl="/images/28.jpg"
          aspectRatio="0.89 / 1"
          onClick={()=>setOpen(true)}
        />
      </Masonry>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        plugins={[Thumbnails]}
        slides={[
          { src: "/images/20.jpg" },
          { src: "/images/1.jpg" },
          { src: "/images/26.jpg" },
          { src: "/images/22.jpg" },
          { src: "/images/27.jpg" },
          { src: "/images/23.jpg" },
          { src: "/images/24.jpg" },
          { src: "/images/25.jpg" },
          { src: "/images/29.jpg" },
          { src: "/images/21.jpg" },
          { src: "/images/28.jpg" },
        ]}
      />
    </Box>
  );
}
