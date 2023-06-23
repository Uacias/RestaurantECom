import ArrowLefttIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Box } from "@mui/material";
import { IconButton } from "@mui/material";
import { Carousel as ReactCarousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const importAll = (require) =>
  require.keys().reduce((acc, next) => {
    acc[next.replace("./", "")] = require(next);
    return acc;
  }, {});

const images = importAll(
  require.context("../img/carousel", false, /\.(png|jpe?g|svg)$/)
);

const Carousel = () => {
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
      {Object.values(images).map((_src, index) => (
        <Box key={`img_carousel_${index}`}>
          <img
            src={_src}
            alt={`img_carousel_${index}`}
            style={{
              width: "100%",
              height: "450px",
              objectFit: "cover",
            }}
          />
        </Box>
      ))}
    </ReactCarousel>
  );
};

export default Carousel;
