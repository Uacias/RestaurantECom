import ArrowLefttIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { IconButton } from "@mui/material";
import { Carousel as ReactCarousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useTranslation } from "react-i18next";
import carousel1 from "../img/carousel/carousel_1.jpg";
import carousel2 from "../img/carousel/carousel_2.jpg";
import carousel3 from "../img/carousel/carousel_3.jpg";
import carousel4 from "../img/carousel/carousel_4.jpg";

const Carousel = () => {
  const isMobile = useMediaQuery("(max-width:582px)");
  const { t } = useTranslation();
  const slides = [
    {
      image: carousel1,
      description: t("carousel.firstSlideDescription"),
    },
    {
      image: carousel2,
      description: t("carousel.secondSlideDescription"),
    },
    {
      image: carousel3,
      description: t("carousel.thirdSlideDescription"),
    },
    {
      image: carousel4,
      description: t("carousel.fourthSlideDescription"),
    },
  ];
  return (
    <ReactCarousel
      infiniteLoop={true}
      showStatus={false}
      showThumbs={false}
      renderArrowPrev={(onClickHandler, hasPrev, label) => (
        <IconButton
          onClick={onClickHandler}
          sx={{
            position: "absolute",
            top: "50%",
            left: "0",
            zIndex: "11",
          }}
        >
          <ArrowLefttIcon sx={{ fontSize: "48px", fill: "white" }} />
        </IconButton>
      )}
      renderArrowNext={(onClickHandler, hasNext, label) => (
        <IconButton
          onClick={onClickHandler}
          sx={{
            position: "absolute",
            top: "50%",
            right: "10px",
            zIndex: "11",
          }}
        >
          <ArrowRightIcon sx={{ fontSize: "48px", fill: "white" }} />
        </IconButton>
      )}
    >
      {slides.map((slide, index) => (
        <Box
          key={`img_carousel_${index}`}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "450px",
            position: "relative",
          }}
        >
          <img
            src={slide.image}
            alt={`img_carousel_${index}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          <Box
            sx={{
              width: isMobile ? "80%" : "40%",
              borderRadius: "16px",
              textAlign: "center",
              background: "rgba(255,255,255,.5)",
              paddingBlock: 4,

              position: "absolute",
              color: "black",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: "1",
            }}
          >
            <Typography
              variant="h2"
              fontWeight="bold"
              marginBottom={{ lg: "8px", xl: "16px" }}
            >
              {slide.description}
            </Typography>
          </Box>
        </Box>
      ))}
    </ReactCarousel>
  );
};

export default Carousel;

// sx={{
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   color: "white",
//   zIndex: "1",
// }}
