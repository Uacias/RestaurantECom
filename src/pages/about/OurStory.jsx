import { Box, Typography, useMediaQuery } from "@mui/material";
import imgTwo from "../../img/other/josh-hild-v4LQkXJPK0o-unsplash.jpg";
import imgOne from "../../img/other/stefan-c-asafti-9p6pFEwq-wI-unsplash.jpg";
import imgThree from "../../img/other/sebastian-coman-photography-cQbOSRpElxw-unsplash.jpg";
import { useTranslation } from "react-i18next";

const OurStory = () => {
  const isMobile = useMediaQuery("(max-width: 425px)");
  const { t } = useTranslation();

  return (
    <Box
      margin="40px auto"
      sx={{ textAlign: "center", width: isMobile ? "100%" : "75%" }}
    >
      <Typography variant="h2" sx={{ fontWeight: "bold", mb: 3 }}>
        {t("pages.about.tabs.ourStory.title")}
      </Typography>
      <Box margin="0 auto" width="100%" padding={2}>
        <Box
          display="grid"
          gridTemplateColumns={{ lg: "100%", xl: "70% 30%" }}
          gap="8px 0"
        >
          <Box>
            <img src={imgOne} alt="test" width="90%" />
          </Box>
          <Box
            marginY={{
              lg: "16px",
              xl: "0",
              maxWidth: isMobile ? "100%" : "90%",
            }}
            marginX="auto"
          >
            <Typography
              variant="h4"
              fontWeight="bold"
              marginBottom={{ lg: "8px", xl: "16px" }}
            >
              {t("pages.about.tabs.ourStory.history")}
            </Typography>
            <Typography variant="h5" textAlign={"left"}>
              {t("pages.about.tabs.ourStory.historyText")}
            </Typography>
          </Box>

          <Box>
            <img src={imgTwo} alt="test" width="90%" />
          </Box>
          <Box marginY={{ lg: "16px", xl: "0" }} maxWidth="90%" marginX="auto">
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
          <Box>
            <img src={imgThree} alt="test" width="90%" />
          </Box>
          <Box marginY={{ lg: "16px", xl: "0" }} maxWidth="90%" marginX="auto">
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
    </Box>
  );
};

export default OurStory;
