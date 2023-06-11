import { Box, Typography, useMediaQuery } from "@mui/material";
import termsBackground from "../../img/terms-policy/bg-terms.jpg";

const TermsConditions = () => {
  const isMobile = useMediaQuery("(max-width:425px)");

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
          background: "rgba(255,255,255,.6)",
          paddingBlock: 10,
          paddingInline: "12.5%",
        }}
      >
        <Typography
          variant="h2"
          sx={{ textAlign: "center", fontWeight: "bold" }}
        >
          Terms & Conditions
        </Typography>
        <Typography variant={isMobile ? "h5" : "h4"} sx={{ mt: 8 }}>
          <strong>Welcome</strong> to our service!
          <br /> Before using our website, please read the following{" "}
          <strong>terms and conditions:</strong>
        </Typography>
        <Typography
          variant={isMobile ? "h5" : "h4"}
          component="ol"
          sx={{ mt: 7 }}
        >
          <li>
            By using our service, you agree to our terms of use and privacy
            policy.
          </li>
          <li>
            It is prohibited to use our service in violation of applicable laws.
          </li>
          <li>
            We reserve the right to make changes to our service at any time.
            Information about the changes will be provided to users in an
            appropriate manner, such as through announcements on the website or
            email notifications. Continued use of our service after the changes
            have been made indicates acceptance of the new terms.
          </li>
          <li>
            All copyrights and intellectual property rights belong to our
            company.
          </li>
        </Typography>
        <Typography variant={isMobile ? "h5" : "h4"} sx={{ mt: 7 }}>
          Thank you for using our service. If you have any questions or
          concerns, please contact us.
        </Typography>s
      </Box>
    </Box>
  );
};

export default TermsConditions;
