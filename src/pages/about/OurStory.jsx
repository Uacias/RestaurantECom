import React, { useEffect, useRef } from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import imgTwo from "../../img/other/josh-hild-v4LQkXJPK0o-unsplash.jpg";
import imgOne from "../../img/other/stefan-c-asafti-9p6pFEwq-wI-unsplash.jpg";
import imgThree from "../../img/other/sebastian-coman-photography-cQbOSRpElxw-unsplash.jpg";
import { useTranslation } from "react-i18next";

const OurStory = () => {
  const isMobile = useMediaQuery("(max-width: 500px)");
  const { t } = useTranslation();
  const imgWrapperStyle = {
    minHeight: "100vh",
    display: "grid",
    alignContent: "center",
    placeItems: "center",
    opacity: "0",
    transition: "opacity 1s",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const boxRef1 = useRef(null);
  const boxRef2 = useRef(null);
  const boxRef3 = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
        } else {
          entry.target.style.opacity = "0";
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    if (boxRef1.current) observer.observe(boxRef1.current);
    if (boxRef2.current) observer.observe(boxRef2.current);
    if (boxRef3.current) observer.observe(boxRef3.current);

    return () => {
      if (boxRef1.current) observer.unobserve(boxRef1.current);
      if (boxRef2.current) observer.unobserve(boxRef2.current);
      if (boxRef3.current) observer.unobserve(boxRef3.current);
    };
  }, []);

  return (
    <Box>
      <Typography
        variant="h1"
        sx={{ fontWeight: "bold", mb: 3, textAlign: "center" }}
      >
        {t("pages.about.tabs.ourStory.title")}
      </Typography>
      <Box
        ref={boxRef1}
        className="hidden slide-left"
        sx={{ ...imgWrapperStyle, backgroundImage: `url(${imgOne})` }}
      >
        <Box
          sx={{
            width: isMobile ? "90%" : "60%",
            textAlign: "center",
            background: "rgba(255,255,255,.7)",
            paddingBlock: 10,
            paddingInline: "6.25%",
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            marginBottom={{ lg: "8px", xl: "16px" }}
          >
            {t("pages.about.tabs.ourStory.history")}
          </Typography>
          <Typography variant="h5">
            {t("pages.about.tabs.ourStory.historyText")}
          </Typography>
        </Box>
      </Box>
      <Box
        ref={boxRef2}
        sx={{ ...imgWrapperStyle, backgroundImage: `url(${imgTwo})` }}
      >
        <Box
          sx={{
            width: isMobile ? "90%" : "60%",
            textAlign: "center",
            background: "rgba(255,255,255,.7)",
            paddingBlock: 10,
            paddingInline: "6.25%",
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            marginBottom={{ lg: "8px", xl: "16px" }}
          >
            {t("pages.about.tabs.ourStory.flavors")}
          </Typography>
          <Typography variant="h5" textAlign={"left"}>
            {t("pages.about.tabs.ourStory.flavorsText")}
          </Typography>
        </Box>
      </Box>
      <Box
        ref={boxRef3}
        className="hidden slide-left"
        sx={{ ...imgWrapperStyle, backgroundImage: `url(${imgThree})` }}
      >
        <Box
          sx={{
            width: isMobile ? "90%" : "60%",
            textAlign: "center",
            background: "rgba(255,255,255,.7)",
            paddingBlock: 10,
            paddingInline: "6.25%",
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            marginBottom={{ lg: "8px", xl: "16px" }}
          >
            {t("pages.about.tabs.ourStory.staff")}
          </Typography>
          <Typography variant="h5" textAlign={"left"}>
            {t("pages.about.tabs.ourStory.staffText")}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default OurStory;
