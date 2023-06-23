import { Box, Button } from "@mui/material";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
const CheckoutSuccess = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <Box
      m="90px auto"
      width="80%"
      height="50vh"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Alert severity="success" sx={{ fontSize: "1.2rem" }}>
        <AlertTitle sx={{ fontSize: "1.5rem" }}>
          {t("addToBasketAlertTitle")}
        </AlertTitle>
        {t("finalizedPayment")} <br />
        <strong> {t("finalizedPaymentThanks")}</strong>
      </Alert>
      <Button
        fullWidth
        type="submit"
        color="primary"
        variant="contained"
        sx={{
          boxShadow: "none",
          color: "white",
          borderRadius: 0,
          padding: "15px 40px",
          mt: 2,
          width: "200px",
        }}
        onClick={() => {
          navigate("/");
        }}
      >
        {t("checkout.returnHome")}
      </Button>
    </Box>
  );
};

export default CheckoutSuccess;
