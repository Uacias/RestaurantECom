import Box from "@mui/material/Box";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TelegramIcon from "@mui/icons-material/Telegram";
import Zoom from "@mui/material/Zoom";
import {
  Button,
  IconButton,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";
import footerBackground from "../../img/footer/bg-footer.jpg";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width: 630px)");
  const buttonStyles = {
    color: "white",
    fontSize: "20px",
    m: isMobile ? 1 : 3,

    textShadow: " 2px 2px 5px green",
  };
  return (
    <Box
      sx={{
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(${footerBackground})`,
      }}
    >
      <Box
        sx={{
          background: "rgba(0,0,0,.5)",
          color: "white",
          p: 4,
        }}
      >
        <Box width="75%" margin="40px auto">
          {/* SOCIALS SECTION */}
          <Box>
            <Typography
              variant={"h1"}
              textAlign={"center"}
              sx={{
                fontSize: isMobile ? "48px" : "96px",
                textShadow: " 2px 2px 5px green",
              }}
            >
              Our Socials
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                flexDirection: isMobile ? "column" : "row",
              }}
            >
              <Tooltip
                title={<h2>Facebook</h2>}
                placement="top"
                TransitionComponent={Zoom}
              >
                <IconButton
                  aria-label="Facebook"
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FacebookIcon
                    sx={{
                      fontSize: isMobile ? 56 : 96,
                      color: "rgba(242, 238, 237, .77)",
                    }}
                  />
                </IconButton>
              </Tooltip>

              <Tooltip
                title={<h2>Instagram</h2>}
                placement="top"
                TransitionComponent={Zoom}
              >
                <IconButton
                  aria-label="Instagram"
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIcon
                    sx={{
                      fontSize: isMobile ? 56 : 96,
                      color: "rgba(242, 238, 237, .77)",
                    }}
                  />
                </IconButton>
              </Tooltip>
              <Tooltip
                title={<h2>Twitter</h2>}
                placement="top"
                TransitionComponent={Zoom}
              >
                <IconButton
                  aria-label="Twitter"
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TwitterIcon
                    sx={{
                      fontSize: isMobile ? 56 : 96,
                      color: "rgba(242, 238, 237, .77)",
                    }}
                  />
                </IconButton>
              </Tooltip>
              <Tooltip
                title={<h2>Telegram</h2>}
                placement="top"
                TransitionComponent={Zoom}
              >
                <IconButton
                  aria-label="Telegram"
                  href="https://www.telegram.org "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TelegramIcon
                    sx={{
                      fontSize: isMobile ? 56 : 96,
                      color: "rgba(242, 238, 237, .77)",
                    }}
                  />
                </IconButton>
              </Tooltip>
              <Tooltip
                title={<h2>Youtube</h2>}
                placement="top"
                TransitionComponent={Zoom}
              >
                <IconButton
                  aria-label="Youtube"
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <YouTubeIcon
                    sx={{
                      fontSize: isMobile ? 56 : 96,
                      color: "rgba(242, 238, 237, .77)",
                    }}
                  />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
          {/* BOX FOR NAVIGATION */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              flexDirection: isMobile ? "column" : "row",
              mt: 5,
              borderBottom: "1px solid white",
            }}
          >
            <Button
              variant="text"
              sx={{
                ...buttonStyles,
              }}
              onClick={() => {
                navigate("/About");
              }}
            >
              About
            </Button>
            <Button
              variant="text"
              sx={{
                ...buttonStyles,
              }}
              onClick={() => {
                navigate("/Contact");
              }}
            >
              Contact
            </Button>

            <Button
              variant="text"
              sx={{
                ...buttonStyles,
              }}
              onClick={() => {
                navigate("/PrivacyPolicy");
              }}
            >
              Privacy Policy
            </Button>
            <Button
              variant="text"
              sx={{
                ...buttonStyles,
              }}
              onClick={() => {
                navigate("/TermsAndConditions");
              }}
            >
              Terms & Conditions
            </Button>
          </Box>
          <Box>
            <Typography
              variant={isMobile ? "h6" : "h5"}
              sx={{ textAlign: "center", mt: 3 }}
            >
              © Le Nemours - 2023, All Rights Reserved
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
