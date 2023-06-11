import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import InfoIcon from "@mui/icons-material/Info";
import CallIcon from "@mui/icons-material/Call";
import SecurityIcon from "@mui/icons-material/Security";
import ArticleIcon from "@mui/icons-material/Article";
import bgDrawer from "../../img/drawer/bg-drawer.jpg";

import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import {
  Badge,
  Box,
  Button,
  Drawer,
  IconButton,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { setIsBasketVisible } from "../../state";
import { useState } from "react";

const NavigationBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket.basket);
  const isMobile = useMediaQuery("(max-width:768px)");
  const isSmallMobile = useMediaQuery("(max-width:334px");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const menuItemStyle = {
    p: 1,
    mb: 2,
    borderBottom: "1px solid black",
    display: "flex",
    alignItems: "center",
  };

  const menuButtonStyle = {
    fontSize: "17px",
    fontWeight: "bold",
    color: "rgb(0,0,0)",
  };

  return (
    <>
      <Box
        width="100%"
        height="64px"
        margin="auto"
        paddingX="16px"
        backgroundColor="rgba(0, 0, 0,.8)"
        color="white"
        position="fixed"
        top="0"
        left="0"
        zIndex="1"
        display="flex"
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          columnGap="20px"
        >
          <Tooltip title="Menu">
            <IconButton
              size="large"
              color="inherit"
              aria-label="menu"
              sx={{ display: isMobile ? "block" : "none" }}
              onClick={() => setIsDrawerOpen(true)}
            >
              <MenuIcon sx={{ fontSize: "28px" }} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Home" display={isSmallMobile ? "none" : "block"}>
            <Typography
              variant="h5"
              sx={{ "&:hover": { cursor: "pointer" } }}
              onClick={() => navigate("./")}
            >
              Le Nemours
            </Typography>
          </Tooltip>
          <Tooltip title="Home">
            <IconButton
              size="large"
              color="inherit"
              aria-label="home"
              sx={{ display: isSmallMobile ? "block" : "none" }}
              onClick={() => navigate("")}
            >
              <HomeIcon sx={{ fontSize: "28px" }} />
            </IconButton>
          </Tooltip>
        </Box>

        <Box
          display="flex"
          flexGrow="1"
          justifyContent="end"
          alignItems="center"
          columnGap="20px"
        >
          <Box>
            <Typography
              variant="h5"
              sx={{
                "&:hover": {
                  cursor: "pointer",
                  borderBottom: "1px solid white",
                },
                display: isMobile ? "none" : "block",
              }}
              onClick={() => navigate("/TermsAndConditions")}
            >
              Terms & Conditions
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h5"
              sx={{
                "&:hover": {
                  cursor: "pointer",
                  borderBottom: "1px solid white",
                },
                display: isMobile ? "none" : "block",
              }}
              onClick={() => navigate("/PrivacyPolicy")}
            >
              Privacy Policy
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h5"
              sx={{
                "&:hover": {
                  cursor: "pointer",
                  borderBottom: "1px solid white",
                },
                display: isMobile ? "none" : "block",
              }}
              onClick={() => navigate("/About")}
            >
              About
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h5"
              sx={{
                "&:hover": {
                  cursor: "pointer",
                  borderBottom: "1px solid white",
                },
                display: isMobile ? "none" : "block",
              }}
              onClick={() => navigate("/Contact")}
            >
              Contact
            </Typography>
          </Box>

          <Tooltip title="Basket">
            <IconButton
              size="large"
              color="inherit"
              aria-label="basket"
              onClick={() => {
                dispatch(setIsBasketVisible({}));
              }}
            >
              <Badge badgeContent={basket.length} showZero max={99}>
                <ShoppingBasketIcon fontSize="28px" />
              </Badge>
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => {
          setIsDrawerOpen(false);
        }}
      >
        <Box
          sx={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url(${bgDrawer})`,
            width: "100%",
            height: "100%",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              background: "rgba(255,255,255,.7)",
            }}
          >
            <Box p={2} width="320px" role="presentation">
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <IconButton
                  color="inherit"
                  aria-label="Hide"
                  onClick={() => setIsDrawerOpen(false)}
                  sx={{ p: 1 }}
                >
                  <ArrowBackIcon sx={{ fontSize: 32 }} />
                </IconButton>
                <Typography
                  variant="h4"
                  sx={{
                    p: 1,
                  }}
                >
                  Menu
                </Typography>
              </Box>

              <Box sx={{ display: "flex", flexDirection: "column", mt: 3 }}>
                <Box
                  sx={{
                    ...menuItemStyle,
                  }}
                  onClick={() => {
                    navigate("");
                    setIsDrawerOpen(false);
                  }}
                >
                  <HomeIcon
                    sx={{ fontSize: 32, marginRight: 2 }}
                    color="inherit"
                    aria-label="Contact"
                  />
                  <Button
                    sx={{
                      ...menuButtonStyle,
                    }}
                  >
                    Home
                  </Button>
                </Box>
                <Box
                  sx={{
                    ...menuItemStyle,
                  }}
                  onClick={() => {
                    navigate("About");
                    setIsDrawerOpen(false);
                  }}
                >
                  <InfoIcon
                    sx={{ fontSize: 32, marginRight: 2 }}
                    color="inherit"
                    aria-label="Contact"
                  />
                  <Button
                    sx={{
                      ...menuButtonStyle,
                    }}
                  >
                    About
                  </Button>
                </Box>
                <Box
                  sx={{
                    ...menuItemStyle,
                  }}
                  onClick={() => {
                    navigate("Contact");
                    setIsDrawerOpen(false);
                  }}
                >
                  <CallIcon
                    sx={{ fontSize: 32, marginRight: 2 }}
                    color="inherit"
                    aria-label="Contact"
                  />
                  <Button
                    sx={{
                      ...menuButtonStyle,
                    }}
                  >
                    Contact
                  </Button>
                </Box>
                <Box
                  sx={{
                    ...menuItemStyle,
                  }}
                  onClick={() => {
                    navigate("TermsAndConditions");
                    setIsDrawerOpen(false);
                  }}
                >
                  <ArticleIcon
                    sx={{ fontSize: 32, marginRight: 2 }}
                    color="inherit"
                    aria-label="Terms & Conditions"
                  />
                  <Button
                    sx={{
                      ...menuButtonStyle,
                    }}
                  >
                    Terms & Conditions
                  </Button>
                </Box>
                <Box
                  sx={{
                    ...menuItemStyle,
                  }}
                  onClick={() => {
                    navigate("PrivacyPolicy");
                    setIsDrawerOpen(false);
                  }}
                >
                  <SecurityIcon
                    sx={{ fontSize: 32, marginRight: 2 }}
                    color="inherit"
                    aria-label="Contact"
                  />
                  <Button
                    sx={{
                      ...menuButtonStyle,
                    }}
                  >
                    Privacy Policy
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default NavigationBar;
