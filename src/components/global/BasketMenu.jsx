import { Box, Typography, IconButton, Button, Drawer } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import Tooltip from "@mui/material/Tooltip";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromBasket,
  setIsBasketVisible,
  removeAllFromBasket,
  decreaseCount,
  increaseCount,
} from "../../state";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const BasketMenu = () => {
  const dispatch = useDispatch();
  const isBasketVisible = useSelector((state) => state.basket.isBasketVisible);
  const basket = useSelector((state) => state.basket.basket);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const total = basket.reduce((price, item) => {
    return (price += item.attributes.price * item.count);
  }, 0);

  const truncateString = (str) => {
    return str.length > 35 ? str.slice(0, 35) + "..." : str;
  };

  const handleCloseDrawer = () => {
    dispatch(setIsBasketVisible());
  };

  const handleCheckout = () => {
    dispatch(setIsBasketVisible({}));
    navigate("/checkout");
  };

  const handleRemoveAllFromBasket = () => {
    dispatch(removeAllFromBasket());
  };

  const handleDecreaseCount = (id) => {
    dispatch(decreaseCount({ id }));
  };

  const handleIncreaseCount = (id) => {
    dispatch(increaseCount({ id }));
  };

  const handleRemoveFromBasket = (id) => {
    dispatch(removeFromBasket({ id }));
  };

  return (
    <Drawer anchor="right" open={isBasketVisible} onClose={handleCloseDrawer}>
      <Box p={2} width="320px" role="presentation">
        {/* TOP */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              p: 1,
            }}
          >
            {t("basket.title")}
          </Typography>
          <IconButton
            color="inherit"
            aria-label="Hide"
            onClick={handleCloseDrawer}
            sx={{
              p: 1,
            }}
          >
            <ArrowForwardIcon sx={{ fontSize: 32 }} />
          </IconButton>
        </Box>
        {/* CORE ACTIONS*/}
        {basket.length > 0 ? (
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Typography variant="h4" mt={2} fontWeight="bold">
              {t("basket.total")}
            </Typography>
            <Typography variant="h4" mt={1} fontWeight="bold">
              {`$${total.toFixed(2)}`}
            </Typography>

            <Button
              fullWidth
              type="submit"
              color="success"
              variant="contained"
              sx={{
                boxShadow: "none",
                color: "white",
                borderRadius: 0,
                padding: "15px 40px",
                mt: 2,
              }}
              onClick={handleCheckout}
            >
              {t("basket.checkout")}
            </Button>
            <Button
              fullWidth
              type="submit"
              color="error"
              variant="contained"
              sx={{
                boxShadow: "none",
                color: "white",
                borderRadius: 0,
                padding: "15px 40px",
                mt: 1,
              }}
              onClick={handleRemoveAllFromBasket}
            >
              {t("clearBasket")}
            </Button>
          </Box>
        ) : (
          <Box sx={{ mt: 3 }}>
            <Typography variant="h5">{t("basket.empty")}</Typography>
          </Box>
        )}

        {/* INDIVIDUAL DISH ORDER */}
        <Box>
          {basket.map((dish) => {
            const dishImage =
              dish?.attributes?.image?.data?.attributes?.formats?.medium?.url;
            const dishName =
              i18n.language === "pl"
                ? dish.attributes.namePL
                : dish.attributes.name;
            const dishPrice = (dish.attributes.price * dish.count).toFixed(2);

            return (
              <Box
                key={`${dish.id}_${dish.attributes.name}`}
                sx={{
                  mt: 3,
                  border: "1px solid black",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundImage: `url(http://localhost:1337${dishImage})`,
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "rgba(255,255,255,0.63)",
                  }}
                >
                  <Typography
                    sx={{
                      marginInline: 4,
                      pt: 2,

                      textShadow: "1px 1px 2px #000000",
                    }}
                    variant="h5"
                  >
                    {truncateString(dishName)}
                  </Typography>
                  <Box
                    sx={{
                      p: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-around",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderRadius: "6px",
                      }}
                    >
                      <Box>
                        <Tooltip title={t("basket.tooltips.decrease")}>
                          <IconButton
                            sx={{ background: "rgba(0,0,0,.3)" }}
                            onClick={() => handleDecreaseCount(dish.id)}
                          >
                            <RemoveIcon
                              sx={{
                                fontSize: 26,
                              }}
                            />
                          </IconButton>
                        </Tooltip>
                      </Box>
                      <Box>
                        <Typography
                          variant="h5"
                          fontWeight="bold"
                          sx={{ paddingInline: 1, fontSize: "26px" }}
                        >
                          {dish.count}
                        </Typography>
                      </Box>
                      <Box>
                        <Tooltip title={t("basket.tooltips.increase")}>
                          <IconButton
                            sx={{ background: "rgba(0,0,0,.3)" }}
                            onClick={() => handleIncreaseCount(dish.id)}
                          >
                            <AddIcon sx={{ fontSize: 26 }} />
                          </IconButton>
                        </Tooltip>
                      </Box>
                    </Box>
                    <Box>
                      <Tooltip title={t("basket.tooltips.remove")}>
                        <IconButton
                          sx={{
                            backgroundColor: "rgba(0,0,0, .3)",
                            borderRadius: "50%",
                          }}
                          onClick={() => handleRemoveFromBasket(dish.id)}
                        >
                          <DeleteIcon
                            sx={{
                              fontSize: 26,
                              color: "rgb(255, 102, 102)",
                            }}
                          />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  </Box>
                  <Typography
                    variant="h5"
                    textAlign={"center"}
                    sx={{ textShadow: "1px 1px 2px #000000" }}
                  >
                    {t("basket.subtotal")}
                  </Typography>
                  <Typography
                    variant="h5"
                    textAlign={"center"}
                    sx={{ pb: 2, fontWeight: "bold" }}
                  >
                    {`$${dishPrice}`}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
      {/* BASKET END */}
    </Drawer>
  );
};

export default BasketMenu;
