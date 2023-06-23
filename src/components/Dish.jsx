import {
  Box,
  Typography,
  IconButton,
  Button,
  Alert,
  AlertTitle,
  Zoom,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CheckSharpIcon from "@mui/icons-material/CheckSharp";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToBasket } from "../state";
import { useTranslation } from "react-i18next";

const Dish = ({ dish, width }) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [showAlert, setShowAlert] = useState(false);
  const { name, price, image, namePL } = dish.attributes;

  const url = `http://localhost:1337${image?.data?.attributes?.formats?.small?.url}`;
  const { t, i18n } = useTranslation();

  const handleAddToBasket = () => {
    dispatch(addToBasket({ dish: { ...dish, count } }));
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 1500);
  };

  const styleActions = {
    color: "rgba(0,0,0,0.88)",
  };

  return (
    <Box width={width}>
      <Box position="relative">
        <img
          alt={dish.name}
          width="300px"
          height="400px"
          src={`${url}`}
          loading="lazy"
        />
        <Zoom in={showAlert}>
          <Alert
            icon={<CheckSharpIcon fontSize="inherit" />}
            variant="filled"
            severity="success"
            sx={{
              fontSize: "13px",
              position: "absolute",
              top: "10%",

              width: "100%",
              opacity: "0.88",
              borderRadius: "0",
            }}
          >
            <AlertTitle>{t("addToBasketAlertTitle")}</AlertTitle>
            {t("addToBasketAlertContent")}
          </Alert>
        </Zoom>
        <Box display="block" width="100%" padding="0 18px">
          <Box display="flex" justifyContent="space-between">
            <Box display="flex" alignItems="center" borderRadius="2px">
              <IconButton
                onClick={() => {
                  setCount(Math.max(count - 1, 1));
                }}
                sx={{ ...styleActions }}
              >
                <RemoveIcon />
              </IconButton>
            </Box>
            <Box>
              <Typography variant="h6" sx={{ mt: "6px", ...styleActions }}>
                {count}
              </Typography>
            </Box>
            <Box>
              <IconButton
                onClick={() => {
                  setCount(Math.max(count + 1));
                }}
                sx={{ ...styleActions }}
              >
                <AddIcon />
              </IconButton>
            </Box>

            <Button
              onClick={handleAddToBasket}
              sx={{ fontWeight: "bold", ...styleActions, fontSize: "13px" }}
              variant="outlined"
              color="success"
            >
              {t("addToBasket")}
            </Button>
          </Box>
        </Box>
      </Box>
      <Box>
        <Typography variant="h6" maxWidth="300px">
          {i18n.language === "pl" ? namePL : name}
        </Typography>

        <Typography variant="h6" fontWeight="bold">
          ${price}
        </Typography>
      </Box>
    </Box>
  );
};

export default Dish;
