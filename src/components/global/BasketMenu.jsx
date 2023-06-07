import { Box, Typography, IconButton, Avatar, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import Tooltip from "@mui/material/Tooltip";
import { useDispatch, useSelector } from "react-redux";
import { removeFromBasket, setIsBasketVisible } from "../../state";
import { decreaseCount, increaseCount } from "../../state";
import { useNavigate } from "react-router-dom";

const BasketMenu = () => {
  const dispatch = useDispatch();
  const isBasketVisible = useSelector((state) => state.basket.isBasketVisible);
  const basket = useSelector((state) => state.basket.basket);
  const navigate = useNavigate();

  const total = basket.reduce((price, item) => {
    return (price += item.attributes.price * item.count);
  }, 0);

  return (
    <Box
      display={isBasketVisible ? "block" : "none"}
      position="fixed"
      zIndex={5}
      width="100%"
      height="100%"
      left="0"
      top="0"
      overflow="auto"
      backgroundColor="rgba(0, 0, 0, 0.5)"
    >
      <Box
        display="flex"
        flexDirection="column"
        position="fixed"
        width="max(30%, 325px)"
        height="100%"
        top="0"
        right="0"
        overflow="auto"
        padding="16px"
        backgroundColor="rgba(0,0,0, 0.95)"
      >
        {/* TOP */}
        <Box
          width="100%"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          borderBottom="1px solid white"
        >
          <Typography variant="h3" color="white">
            Your Shopping Basket
          </Typography>
          <IconButton
            caria-label="close"
            size="large"
            onClick={() => {
              dispatch(setIsBasketVisible({}));
            }}
          >
            <CloseIcon sx={{ color: "white" }} />
          </IconButton>
        </Box>
        {/* TOP END */}

        {/* INDIVIDUAL DISH ORDER */}
        <Box>
          {basket.map((dish) => {
            return (
              // wrapper for individual order
              <Box
                key={`${dish.id}_${dish.attributes.name}`}
                sx={{
                  p: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderBottom: "1px solid white",
                }}
              >
                {/* Image of product */}
                <Box>
                  <Avatar
                    alt={`${dish.attributes.name}`}
                    sx={{ width: 56, height: 56 }}
                    src={`http://localhost:1337${dish?.attributes?.image?.data?.attributes?.formats?.medium?.url}`}
                  />
                </Box>
                {/* Name of product */}
                {/* TODO: WHAT IF NAME 2 LONG */}
                <Box>
                  <Typography variant="h5" fontWeight="bold" color="white">
                    {dish.attributes.name}
                  </Typography>
                </Box>
                <Box>
                  <Tooltip title="Decrease">
                    <IconButton
                      sx={{ color: "rgba(255,255,255,0.88)" }}
                      onClick={() => {
                        dispatch(decreaseCount({ id: dish.id }));
                      }}
                    >
                      <RemoveIcon />
                    </IconButton>
                  </Tooltip>
                </Box>
                <Box>
                  <Typography variant="h5" color="white" fontWeight="bold">
                    {dish.count}
                  </Typography>
                </Box>
                <Box>
                  <Tooltip title="Increase">
                    <IconButton
                      sx={{ color: "rgba(255,255,255,0.88)" }}
                      onClick={() => {
                        dispatch(increaseCount({ id: dish.id }));
                      }}
                    >
                      <AddIcon />
                    </IconButton>
                  </Tooltip>
                </Box>
                <Box>
                  <Tooltip title="Remove All">
                    <IconButton
                      sx={{ color: "rgba(255,255,255,0.88)" }}
                      onClick={() => {
                        dispatch(removeFromBasket({ id: dish.id }));
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </Box>
              </Box>
            );
          })}
        </Box>
        {/* BOTTOM - USER ACTIONS */}

        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Typography variant="h5" color="white" mt={6} fontWeight="bold">
            Total price: {`$${total.toFixed(2)}`}
          </Typography>
          <Button
            sx={{ mt: "16px" }}
            onClick={() => {
              dispatch(setIsBasketVisible({}));
              navigate("/checkout");
            }}
          >
            Checkout
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default BasketMenu;
