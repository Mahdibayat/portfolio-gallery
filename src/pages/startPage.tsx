import {
  Box,
  Button,
  Fade,
  IconButton,
  Stack,
  Typography,
  Zoom,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function StartPage() {
  const [mounted, setMounted] = useState<boolean>(false);
  const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("md"));

  useEffect(() => {
    setMounted(true);
  }, []);

  if (isMobile) {
    return (
      <Fade
        in={mounted}
        timeout={1000}
      >
        <Box
          sx={{
            width: 1,
            height: "100vh",
            backgroundImage: "url(/images/1.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            backgroundRepeat: "no-repeat",
            bgcolor: "background.default",
          }}
        >
          <Stack
            gap={2}
            justifyContent={"center"}
            alignItems={"center"}
            sx={{ width: "inherit", pt: "7vh" }}
          >
            <Fade
              in={mounted}
              timeout={4000}
            >
              <Typography
                component={"h1"}
                variant="h3"
                sx={{ fontWeight: "700", color: "primary.main" }}
              >
                Portfolio
              </Typography>
            </Fade>

            <Fade
              in={mounted}
              timeout={5000}
            >
              <Typography
                component={"h3"}
                variant="h5"
                sx={{ color: "primary.main" }}
              >
                Samaneh Sarchami
              </Typography>
            </Fade>

            <Zoom
              in={mounted}
              timeout={5000}
            >
              <Link to={"/app"}>
                <Button
                  variant="outlined"
                  sx={{ minWidth: "300px", mt: 1 }}
                >
                  ENTER
                </Button>
              </Link>
            </Zoom>
          </Stack>
        </Box>
      </Fade>
    );
  }

  return (
    <Fade
      in={mounted}
      timeout={1000}
    >
      <Stack
        sx={{
          width: 1,
          height: "100vh",
          bgcolor: "background.default",
          backgroundSize: "cover",
          backgroundImage: "url(/images/1.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          position:'relative'
        }}
        direction={"row"}
        justifyContent={"space-between"}
      >
        <Fade
          in={mounted}
          timeout={5000}
        >
          <Link to={"/app"} style={{zIndex:'1'}}>
            <Typography
              component={"h3"}
              variant="h5"
              sx={{
                transition: "all 300ms",
                color: "#00152c",
                backgroundColor: "rgba(0,0,0,0.1)",
                padding: "2px 8px",
                borderRadius: "2px",
                position: 'absolute',
                left: '20px',
                top: '50%',
                transform: 'translateY(-50%)',
                borderBottom: "2px solid transparent",
                ":hover": {
                  borderColor: "#00152c",
                },
                letterSpacing: '7px'
              }}
            >
              HOME
            </Typography>
          </Link>
        </Fade>

        <Stack
          gap={2}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ width: "inherit", position: "relative" }}
        >
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"flex-end"}
            sx={{
              position: "absolute",
              bottom: 20,
              right: 20,
              left: 30,
            }}
          >
            <a href={"mailto:mahdibayat72@hotmail.com"}>
              <Typography fontSize={13}>design & develop by BYT</Typography>
            </a>
          </Stack>
        </Stack>
      </Stack>
    </Fade>
  );
}
