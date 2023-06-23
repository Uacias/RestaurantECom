import { Box, Typography, useMediaQuery } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useTranslation } from "react-i18next";
const Payment = ({ values, touched, errors, handleBlur, handleChange }) => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery("(max-width:768px)");
  return (
    <Box sx={{ m: "35px 0" }}>
      <Box>
        <Typography sx={{ mb: "15px" }} fontSize="18px">
          {t("checkout.contactInfo")}
        </Typography>
        <Box
          sx={{ display: "grid" }}
          gap="24px"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
        >
          <TextField
            sx={{ gridColumn: isMobile ? "span 4" : "span 2" }}
            name="email"
            type="text"
            label={t("checkout.paymentForm.email")}
            variant="standard"
            fullWidth
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.email}
            error={!!touched.email && !!errors.email}
            helperText={touched.email && errors.email}
          />
          <TextField
            sx={{ gridColumn: isMobile ? "span 4" : "span 2" }}
            name="phoneNumber"
            type="text"
            label={t("checkout.paymentForm.phoneNumber")}
            variant="standard"
            fullWidth
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.phoneNumber}
            error={!!touched.phoneNumber && !!errors.phoneNumber}
            helperText={touched.phoneNumber && errors.phoneNumber}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Payment;
