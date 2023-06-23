import { Box, Typography, useMediaQuery } from "@mui/material";
import termsBackground from "../../img/terms-policy/bg-terms.jpg";
import { useTranslation } from "react-i18next";

const TermsConditions = () => {
  const isMobile = useMediaQuery("(max-width:425px)");
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        width: "100%",
        mt: "64px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(${termsBackground})`,
      }}
    >
      <Box
        sx={{
          background: "rgba(255,255,255,.7)",
          paddingBlock: 10,
          paddingInline: "12.5%",
        }}
      >
        <Typography
          variant="h1"
          sx={{ textAlign: "center", fontWeight: "bold" }}
        >
          {t("navigation.termsConditions")}
        </Typography>
        <Typography variant={isMobile ? "h6" : "h5"} sx={{ mt: 8 }}>
          {t("pages.termsConditions.subtitle")}
        </Typography>
        <Typography
          variant={isMobile ? "h6" : "h5"}
          component="ol"
          sx={{ mt: 7 }}
        >
          <li>{t("pages.termsConditions.firstRule")}</li>
          <li>{t("pages.termsConditions.secondRule")}</li>
          <li>{t("pages.termsConditions.thirdRule")}</li>
          <li>{t("pages.termsConditions.fourthRule")}</li>
        </Typography>
        <Typography variant={isMobile ? "h6" : "h5"} sx={{ mt: 7 }}>
          {t("pages.termsConditions.appreciation")}
        </Typography>
      </Box>
    </Box>
  );
};

export default TermsConditions;
