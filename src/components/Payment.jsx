import { Box, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useTranslation } from "react-i18next";
const Payment = ({ values, touched, errors, handleBlur, handleChange }) => {
  const { t } = useTranslation();
  return (
    <Box sx={{ m: "35px 0" }}>
      {/* CONTACT INFO */}
      <Box>
        <Typography sx={{ mb: "15px" }} fontSize="18px">
          Contact Info
        </Typography>
        <TextField
          fullWidth
          type="text"
          label={t("checkout.paymentForm.email")}
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.email}
          name="email"
          error={!!touched.email && !!errors.email}
          helperText={touched.email && errors.email}
          sx={{ gridColumn: "span 4", marginBottom: "15px" }}
        />
        <TextField
          fullWidth
          type="text"
          label={t("checkout.paymentForm.phoneNumber")}
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.phoneNumber}
          name="phoneNumber"
          error={!!touched.phoneNumber && !!errors.phoneNumber}
          helperText={touched.phoneNumber && errors.phoneNumber}
          sx={{ gridColumn: "span 4" }}
        />
      </Box>
    </Box>
  );
};

export default Payment;
