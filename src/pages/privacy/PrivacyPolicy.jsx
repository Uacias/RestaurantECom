import { Box, Typography, useMediaQuery } from "@mui/material";
import termsPolicy from "../../img/terms-policy/bg-policy.jpg";
const PrivacyPolicy = () => {
  const isMobile = useMediaQuery("(max-width:425px)");
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
          Privacy Policy
        </Typography>
        <Typography variant={isMobile ? "h6" : "h5"} sx={{ mt: 8 }}>
          Welcome to our service! Before using our website, please read the
          following terms and conditions:
        </Typography>
        <Typography variant={isMobile ? "h6" : "h5"} sx={{ mt: 7 }}>
          <ol>
            <li>
              <strong>Collection of Personal Data:</strong>
              <ul>
                <li>
                  We may collect certain personal data, such as name, email
                  address, phone number, etc., in order to provide our services
                  and customize them to user needs.
                </li>
                <li>
                  The legal basis for processing personal data is user consent
                  or legitimate interest related to the functioning of our
                  service.
                </li>
              </ul>
            </li>
            <li>
              <strong>Use of Collected Data:</strong>
              <ul>
                <li>
                  The collected personal data is used to provide our services,
                  grant access to relevant features, and personalize content.
                </li>
                <li>
                  We may also use data for analysis and improvement of our
                  service, as well as for marketing purposes, if the user has
                  given consent.
                </li>
              </ul>
            </li>
            <li>
              <strong>Sharing of Personal Data:</strong>
              <ul>
                <li>
                  We commit to not share user personal data with third parties
                  without their consent, unless necessary for providing our
                  services (e.g., payment service providers or hosting
                  services).
                </li>
                <li>
                  If personal data is shared with third parties, we ensure that
                  they are subject to appropriate agreements and safeguards to
                  protect user privacy.
                </li>
              </ul>
            </li>
            <li>
              <strong>Data Security:</strong>
              <ul>
                <li>
                  We prioritize the security of collected personal data and
                  implement appropriate security measures to protect against
                  loss, unauthorized access, theft, or manipulation.
                </li>
                <li>
                  We have implemented technical and organizational security
                  measures, such as data encryption, access control, regular
                  security audits, and training for our employees.
                </li>
              </ul>
            </li>
            <li>
              <strong>User Rights:</strong>

              <ul>
                <li>
                  You have certain rights regarding the processing of your
                  personal data. You have the right to request access to your
                  data, correction, deletion, restriction of processing, and
                  data portability.
                </li>
                <li>
                  if you have any questions regarding the processing of personal
                  data or want to exercise the above rights, please contact us
                  using the available contact information.
                </li>
              </ul>
            </li>
          </ol>
          Thank you for using our service. If you have any questions or
          concerns, please contact us.
        </Typography>
      </Box>
    </Box>
  );
};

export default PrivacyPolicy;
