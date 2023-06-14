import { Box, Typography, useMediaQuery } from "@mui/material";
import termsPolicy from "../../img/terms-policy/bg-policy.jpg";
import { useTranslation } from "react-i18next";

const PrivacyPolicy = () => {
  const isMobile = useMediaQuery("(max-width:425px)");
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        width: "100%",
        mt: "64px",
        backgroundSize: "cover",
        backgroundPosition: "top right",
        backgroundImage: `url(${termsPolicy})`,
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
          variant="h2"
          sx={{ textAlign: "center", fontWeight: "bold" }}
        >
          {t("navigation.privacyPolicy")}
        </Typography>
        <Typography variant={isMobile ? "h6" : "h5"} sx={{ mt: 8 }}>
          {t("pages.privacyPolicy.subtitle")}
        </Typography>
        <Typography variant={isMobile ? "h6" : "h5"} sx={{ mt: 7 }}>
          <ol>
            <li>
              <strong>{t("pages.privacyPolicy.firstRule.rule")}</strong>
              <ul>
                <li>{t("pages.privacyPolicy.firstRule.firstPoint")}</li>
                <li>{t("pages.privacyPolicy.firstRule.secondPoint")}</li>
              </ul>
            </li>
            <li>
              <strong>{t("pages.privacyPolicy.secondRule.rule")}</strong>
              <ul>
                <li>{t("pages.privacyPolicy.secondRule.firstPoint")}</li>
                <li>{t("pages.privacyPolicy.secondRule.secondPoint")}</li>
              </ul>
            </li>
            <li>
              <strong>{t("pages.privacyPolicy.thirdRule.rule")}</strong>
              <ul>
                <li>{t("pages.privacyPolicy.thirdRule.firstPoint")}</li>
                <li>{t("pages.privacyPolicy.thirdRule.secondPoint")}</li>
              </ul>
            </li>
            <li>
              <strong>{t("pages.privacyPolicy.fourthRule.rule")}</strong>
              <ul>
                <li>{t("pages.privacyPolicy.fourthRule.firstPoint")}</li>
                <li>{t("pages.privacyPolicy.fourthRule.secondPoint")}</li>
              </ul>
            </li>
            <li>
              <strong>{t("pages.privacyPolicy.fifthRule.rule")}</strong>

              <ul>
                <li>{t("pages.privacyPolicy.fifthRule.firstPoint")}</li>
                <li>{t("pages.privacyPolicy.fifthRule.secondPoint")}</li>
              </ul>
            </li>
          </ol>
          {t("pages.termsConditions.appreciation")}
        </Typography>
      </Box>
    </Box>
  );
};

export default PrivacyPolicy;
