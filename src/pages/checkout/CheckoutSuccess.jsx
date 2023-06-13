import { Box, Button } from "@mui/material";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { useNavigate } from "react-router-dom";

const CheckoutSuccess = () => {
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
        <AlertTitle sx={{ fontSize: "1.5rem" }}>Success</AlertTitle>
        You have finalized your purchase. <br />
        <strong> Thank you for choosing Le Nemours</strong>
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
        Return Home
      </Button>
    </Box>
  );
};

export default CheckoutSuccess;
