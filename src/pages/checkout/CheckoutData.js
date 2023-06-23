import { loadStripe } from "@stripe/stripe-js";
import * as yup from "yup";

export const initialValues = {
  shippingAddress: {
    firstName: "",
    lastName: "",
    country: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
  },
  email: "",
  phoneNumber: "",
};

export const checkoutSchema = [
  yup.object().shape({
    shippingAddress: yup.object().shape({
      firstName: yup.string().required("required"),
      lastName: yup.string().required("required"),
      country: yup.string().required("required"),
      street: yup.string().required("required"),
      city: yup.string().required("required"),
      state: yup.string().required("required"),
      zipCode: yup.string().required("required"),
    }),
  }),
  yup.object().shape({
    email: yup.string().required("required"),
    phoneNumber: yup.string().required("required"),
  }),
];

export const stripePromise = loadStripe(
  "pk_test_51MNz5KFJcWLRGDqbgsy0gn50Qv7NkHACvdCXTIIxqwv2BmDpB6f5p0GLKLOW7nDUViQhIUK9HEImM1AGz2hHGpGn00LgjWGGBw"
);
