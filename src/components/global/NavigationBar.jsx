import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import {
  Badge,
  Box,
  IconButton,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setIsBasketVisible } from "../../state";

const NavigationBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket.basket);
  const isMobile = useMediaQuery("(max-width:768px)");

  return (
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
  );
};

export default NavigationBar;
