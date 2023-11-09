import Masonry from "@mui/lab/Masonry";
import { Box, Typography, useTheme } from "@mui/material";

import MasonItem from "../components/masonItem";
import { pagesSignal } from "../state/pageSignal";

export default function PageOne() {
  
  const t = useTheme()
  return (
    <Box
      sx={{
        width: 1,
        maxWidth: '1200px',
        m:'30px auto 20px'
      }}
    >
      <Typography className="font-pacifico"
        component={'h1'} 
        sx={{textAlign:'center', fontFamily: "Pacifico", fontSize: '2rem', color:'secondary.dark', pb:3}}
      >in this website you will see</Typography>
      <Masonry
        columns={{xs:1, sm:2, md:3}}
        spacing={3}
        sx={{
          [t.breakpoints.down('md')]: {
            m: '0'
          }
        }}
      >
        <MasonItem
          imgUrl="/images/8.png"
          aspectRatio='0.79 / 1'
          title="Paintings"
          titleSide="bottom"
          link={'/app/paintings'}
          onClick={() => pagesSignal.value = "paintings" }
        />
        
        <MasonItem
          imgUrl="/images/9.jpg"
          aspectRatio='1.41 / 1'
          title="Poems"
          titleSide="top"
          link={'/app/poems'}
          onClick={() => pagesSignal.value = "poems" }
        />
        
        <MasonItem
          imgUrl="/images/11.jpg"
          aspectRatio='1.2 / 1'
          title="CV"
          titleSide="top"
          link={'/app/CV'}
          onClick={() => pagesSignal.value = "CV" }
        />

        {/* <MasonItem
          imgUrl="/images/10.jpg"
          aspectRatio='0.73 / 1'
          title="Designs"
          titleSide="top"
          link={'/app/designs'}
          onClick={() => pagesSignal.value = "designs" }
        /> */}
        
        <MasonItem
          imgUrl="/images/12.jpg"
          aspectRatio='1.79 / 1'
          title="Contact"
          titleSide="bottom"
          link={'/app/contact'}
          onClick={() => pagesSignal.value = "contact" }
        />

      </Masonry>
    </Box>
  );
}
