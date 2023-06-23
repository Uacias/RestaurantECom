import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as ReactCarousel } from "react-responsive-carousel";
import {
  Box,
  useMediaQuery,
  Avatar,
  Typography,
  IconButton,
} from "@mui/material";
import avatar1 from "../../img/portrait/avatar1.jpg";
import avatar2 from "../../img/portrait/avatar2.jpg";
import avatar3 from "../../img/portrait/avatar3.jpg";
import avatar4 from "../../img/portrait/avatar4.jpg";
import avatar5 from "../../img/portrait/avatar5.jpg";
import avatar6 from "../../img/portrait/avatar6.jpg";
import avatar7 from "../../img/portrait/avatar7.jpg";
import ArrowLefttIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { useTranslation } from "react-i18next";
const Ratings = () => {
  const isTablet = useMediaQuery("(max-width: 769px)");
  const isSmallTablet = useMediaQuery("(max-width:715px)");
  const centerSlidePercentage = isTablet ? 100 / 1 : 100 / 3;
  const boxStyles = {
    width: isTablet ? "100%" : "98%",
    height: "300px",
    background: "rgba(190, 202, 196, 0.66)",
    borderRadius: "16px",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(7.4px)",
    WebkitBackdropFilter: "blur(7.4px)",
  };
  const { t } = useTranslation();

  return (
    <Box sx={{ textAlign: "center", m: "0 auto" }}>
      <Typography
        variant="h1"
        sx={{ mb: 3, textAlign: "center", fontWeight: "bold" }}
      >
        {t("pages.about.tabs.famousGuests.title")}
      </Typography>
      <Typography
        variant="h3"
        sx={{ textAlign: "center", marginBlock: "16px" }}
      >
        {t("pages.about.tabs.famousGuests.subtitle")}
      </Typography>
      <ReactCarousel
        centerMode
        centerSlidePercentage={centerSlidePercentage}
        infiniteLoop={true}
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        renderArrowPrev={(onClickHandler, hasPrev, label) => (
          <IconButton
            onClick={onClickHandler}
            sx={{
              position: "absolute",
              top: "40%",
              left: "0",
              zIndex: "1",
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
              top: "40%",
              right: "10px",
              zIndex: "1",
            }}
          >
            <ArrowRightIcon sx={{ fontSize: "48px", fill: "white" }} />
          </IconButton>
        )}
      >
        <Box
          sx={{
            ...boxStyles,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              alt="Amy Sharp"
              src={avatar1}
              sx={{ width: 150, height: 150, mt: "16px" }}
            />
            <Typography variant="h4" sx={{ mt: "16px", fontWeight: "bold" }}>
              Amy Sharp
            </Typography>
            <Typography variant="h5" sx={{ mt: "8px" }}>
              {t("pages.about.tabs.famousGuests.firstOpinion")}{" "}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            ...boxStyles,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              alt="John Bowe"
              src={avatar2}
              sx={{ width: 150, height: 150, mt: "16px" }}
            />
            <Typography variant="h4" sx={{ mt: "16px", fontWeight: "bold" }}>
              John Bowe
            </Typography>
            <Typography variant="h5" sx={{ mt: "8px" }}>
              {t("pages.about.tabs.famousGuests.secondOpinion")}{" "}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            ...boxStyles,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              alt="Andre Schultz"
              src={avatar3}
              sx={{ width: 150, height: 150, mt: "16px" }}
            />
            <Typography variant="h4" sx={{ mt: "16px", fontWeight: "bold" }}>
              Andre Schultz
            </Typography>
            <Typography variant="h5" sx={{ mt: "8px" }}>
              {t("pages.about.tabs.famousGuests.thirdOpinion")}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            ...boxStyles,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              alt="Adam Smith"
              src={avatar4}
              sx={{ width: 150, height: 150, mt: "16px" }}
            />
            <Typography variant="h4" sx={{ mt: "16px", fontWeight: "bold" }}>
              Adam Smith
            </Typography>
            <Typography variant="h5" sx={{ mt: "8px" }}>
              {t("pages.about.tabs.famousGuests.fourthOpinion")}{" "}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            ...boxStyles,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              alt="Dana White"
              src={avatar5}
              sx={{ width: 150, height: 150, mt: "16px" }}
            />
            <Typography variant="h4" sx={{ mt: "16px", fontWeight: "bold" }}>
              Dana White
            </Typography>
            <Typography variant="h5" sx={{ mt: "8px" }}>
              {t("pages.about.tabs.famousGuests.fifthOpinion")}
            </Typography>
          </Box>
        </Box>
      </ReactCarousel>
      <Box
        sx={{
          display: "flex",
          justifyContent: useMediaQuery("(max-width: 1025px)")
            ? "center"
            : "space-evenly",
          flexDirection: useMediaQuery("(max-width: 1025px)")
            ? "column-reverse"
            : "row",
          alignItems: "center",
          marginBlock: "36px",
          background: "rgba(190, 202, 196, 0.66)",
          borderRadius: "16px",
          padding: "16px",
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
          backdropFilter: "blur(7.4px)",
          WebkitBackdropFilter: "blur(7.4px)",
        }}
      >
        <Box sx={{ maxWidth: "600px" }}>
          <Typography variant="h5" sx={{ paddingTop: "64px" }}>
            {t("pages.about.tabs.famousGuests.longerOpinions.first")}
            <br />
            <strong>
              {t("pages.about.tabs.famousGuests.longerOpinions.firstPerson")}
            </strong>
          </Typography>
        </Box>
        <Box>
          <Avatar
            alt="Akon Young"
            src={avatar6}
            sx={{
              width: isSmallTablet ? "175px" : "500px",
              height: isSmallTablet ? "175px" : "500px",
              mt: "16px",
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: useMediaQuery("(max-width: 1025px)")
            ? "center"
            : "space-evenly",
          flexDirection: useMediaQuery("(max-width: 1025px)")
            ? "column-reverse"
            : "row",
          alignItems: "center",
          marginBlock: "36px",
          background: "rgba(190, 202, 196, 0.66)",
          borderRadius: "16px",
          padding: "16px",
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
          backdropFilter: "blur(7.4px)",
          WebkitBackdropFilter: "blur(7.4px)",
        }}
      >
        <Box sx={{ maxWidth: "600px" }}>
          <Typography variant="h5" sx={{ paddingTop: "64px" }}>
            {t("pages.about.tabs.famousGuests.longerOpinions.second")}
            <br />
            <strong>
              {t("pages.about.tabs.famousGuests.longerOpinions.secondPerson")}
            </strong>
          </Typography>
        </Box>
        <Box>
          <Avatar
            alt="Ashley White"
            src={avatar7}
            sx={{
              width: isSmallTablet ? "175px" : "500px",
              height: isSmallTablet ? "175px" : "500px",
              mt: "16px",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Ratings;
