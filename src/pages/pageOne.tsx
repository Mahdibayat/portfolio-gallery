import Masonry from "@mui/lab/Masonry";
import { Box, Paper, Typography } from "@mui/material";

import MasonItem from "../components/masonItem";

export default function PageOne() {
  return (
    <Box
      sx={{
        width: 1,
        maxWidth: '1200px',
        m:'30px auto 20px'
      }}
    >
      <Masonry
        columns={{xs:1, sm:2, md:3}}
        spacing={3}
        sx={{
          
        }}
      >
        <MasonItem
          imgUrl="/images/8.png"
          aspectRatio='0.79 / 1'
          title="Paintings"
          titleSide="bottom"
          link={'/app/paintings'}
        />
        
        <MasonItem
          imgUrl="/images/9.jpg"
          aspectRatio='1.41 / 1'
          title="Poems"
          titleSide="top"
          link={'/app/poems'}
        />
        
        <MasonItem
          imgUrl="/images/11.jpg"
          aspectRatio='1.2 / 1'
          title="CV"
          titleSide="top"
          link={'/app/CV'}
        />

        <MasonItem
          imgUrl="/images/10.jpg"
          aspectRatio='0.73 / 1'
          title="Designs"
          titleSide="top"
          link={'/app/designs'}
        />
        
        <MasonItem
          imgUrl="/images/12.jpg"
          aspectRatio='1.79 / 1'
          title="Contact"
          titleSide="bottom"
          link={'/app/contact'}
        />

      </Masonry>
    </Box>
  );
}
