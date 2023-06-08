import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import InfoIcon from "@mui/icons-material/Info";
import CallIcon from "@mui/icons-material/Call";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import {
  Badge,
  Box,
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
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
              <MenuIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Home">
            <Typography
              variant="h5"
              sx={{ "&:hover": { cursor: "pointer" } }}
              onClick={() => navigate("./")}
            >
              Le Nemours
            </Typography>
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
                "&:hover": { cursor: "pointer" },
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
                "&:hover": { cursor: "pointer" },
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
                <ShoppingBasketIcon />
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
        <Box p={2} width="320px" role="presentation">
          <IconButton
            color="inherit"
            aria-label="Hide"
            onClick={() => setIsDrawerOpen(false)}
            sx={{ p: 2 }}
          >
            <ArrowBackIcon sx={{ fontSize: 32 }} />
          </IconButton>

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box
              sx={{ p: 2, borderBottom: "1px solid black", display: "flex" }}
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
              <Typography variant="h4"> About</Typography>
            </Box>
            <Box
              sx={{ p: 2, borderBottom: "1px solid black", display: "flex" }}
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
              <Typography variant="h4"> Contact</Typography>
            </Box>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default NavigationBar;
