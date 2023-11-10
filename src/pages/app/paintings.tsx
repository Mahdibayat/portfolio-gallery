import { Masonry } from "@mui/lab";
import { Box, useTheme } from "@mui/material";
import GalleryMasonItem from "../../components/galleryMasonItem";
import MasonItem from "../../components/masonItem";

export default function Paintings() {
  const t = useTheme()

  return (
    <Box
      sx={{
        width: 1,
        p: 2,
        pt: {xs: 4, md: 6},
        px: {xs:1, sm:2, md: 15, lg: 3}
      }}
    >
      <Masonry 
        spacing={4}
        columns={{xs:1,sm:2,md:3, lg:4}}
        sx={{
          [t.breakpoints.down('md')]: {
            m: '0'
          }
        }}
      >
          <MasonItem
            imgUrl="/images/7.jpg"
            aspectRatio="0.33 / 1"
            link="/app/paintings/scattered"
            title="Scattered"
          />
          
          <MasonItem
            imgUrl="/images/16.jpg"
            aspectRatio="1.04 / 1"
            link="/app/paintings/all-around-me"
            title="All Around Me"
          />
          
          <MasonItem
            imgUrl="/images/21.jpg"
            aspectRatio="0.72 / 1"
            link="/app/paintings/an-afternoon-in-hiroshima"
            title="an afternoon in hiroshima"
          />
          
          <MasonItem
            imgUrl="/images/26.jpg"
            aspectRatio="0.87 / 1"
            link="/app/paintings/an-afternoon-in-hiroshima"
            title="an afternoon in hiroshima"
          />
          
          <MasonItem
            imgUrl="/images/33.jpg"
            aspectRatio="1 / 1"
            link="/app/paintings/aesthetics-of-suffering"
            title="Aesthetics of suffering"
          />
          
          <MasonItem
            imgUrl="/images/34.jpg"
            aspectRatio="1.22 / 1"
            link="/app/paintings/that-day"
            title="That Day"
          />
      </Masonry>
    </Box>
  );
}
