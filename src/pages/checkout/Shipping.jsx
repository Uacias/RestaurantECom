import { Box, Typography, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";
import { getIn } from "formik";
import useMediaQuery from "@mui/material/useMediaQuery";

const Shipping = ({
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  setFieldValue,
}) => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery("(max-width:768px)");

  const formattedName = (input) => `shippingAddress.${input}`;
  const formattedError = (input) =>
    Boolean(
      getIn(touched, formattedName(input)) &&
        getIn(errors, formattedName(input))
    );

  const addressFields = [
    {
      key: "firstName",
      label: t("checkout.addressForm.firstName"),
      gridColumn: "span 2",
    },
    {
      key: "lastName",
      label: t("checkout.addressForm.lastName"),
      gridColumn: "span 2",
    },
    {
      key: "country",
      label: t("checkout.addressForm.country"),
      gridColumn: "span 2",
    },
    {
      key: "street",
      label: t("checkout.addressForm.street"),
      gridColumn: "span 2",
    },
    {
      key: "city",
      label: t("checkout.addressForm.city"),
      gridColumn: "span 2",
    },
    {
      key: "state",
      label: t("checkout.addressForm.state"),
      gridColumn: "1fr",
    },
    {
      key: "zipCode",
      label: t("checkout.addressForm.zipCode"),
      gridColumn: "1fr",
    },
  ];

  return (
    <Box sx={{ m: "60px auto" }}>
      <Box>
        <Typography variant="h4" sx={{ textAlign: "center", mb: "25px" }}>
          {t("checkout.steps.shipping")}
        </Typography>
        <Box
          sx={{ display: isMobile ? "flex" : "grid", flexDirection: "column" }}
          gap="24px"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
        >
          {addressFields.map(({ key, label, gridColumn }) => (
            <TextField
              key={key}
              fullWidth
              variant="standard"
              type="text"
              label={label}
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.shippingAddress[key]}
              name={formattedName(key)}
              error={formattedError(key)}
              sx={{ gridColumn }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Shipping;
