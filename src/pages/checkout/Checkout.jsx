import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Box,
  Button,
  Step,
  StepLabel,
  Stepper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { Formik } from "formik";

import { checkoutSchema, initialValues, stripePromise } from "./CheckoutData";
import Payment from "./Payment";
import Shipping from "./Shipping";

const Checkout = () => {
  const { t } = useTranslation();

  const isMobile = useMediaQuery("(max-width:525px)");

  const basket = useSelector((state) => state.basket.basket);
  const [currentStep, setCurrentStep] = useState(0);
  const isStep = (step) => currentStep === step;
  const stepOne = isStep(0);
  const stepTwo = isStep(1);

  const handleFormSubmit = async (values, actions) => {
    setCurrentStep(currentStep + 1);
    if (stepTwo) {
      makePayment(values);
    }
    actions.setTouched({});
  };

  const makePayment = async (values) => {
    const stripe = await stripePromise;
    const { firstName, lastName, email } = values;
    const userName = [firstName, lastName].join(" ");

    const response = await fetch("http://localhost:1337/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userName,
        email,
        products: basket.map(({ id, count }) => ({ id, count })),
      }),
    });

    const session = await response.json();
    await stripe.redirectToCheckout({
      sessionId: session.id,
    });
  };

  const StepperComponent = (
    <Stepper
      activeStep={currentStep}
      sx={{
        m: "25px 0",
        alignItems: isMobile ? "center" : "",
      }}
      orientation={isMobile ? "vertical" : "horizontal"}
    >
      <Step>
        <StepLabel>
          <Typography sx={{ fontSize: "16px" }}>
            {t("checkout.steps.shipping")}
          </Typography>
        </StepLabel>
      </Step>
      <Step>
        <StepLabel>
          <Typography sx={{ fontSize: "16px" }}>
            {t("checkout.steps.payment")}
          </Typography>
        </StepLabel>
      </Step>
    </Stepper>
  );

  return (
    <Box width="90%" m="120px auto">
      <Typography variant="h4" sx={{ textAlign: "center" }}>
        {t("stepper.progress")}
      </Typography>
      {StepperComponent}
      <Box>
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={checkoutSchema[currentStep]}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
            setFieldValue,
          }) => (
            <form onSubmit={handleSubmit}>
              {stepOne && (
                <Shipping
                  values={values}
                  errors={errors}
                  touched={touched}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  setFieldValue={setFieldValue}
                />
              )}
              {stepTwo && (
                <Payment
                  values={values}
                  errors={errors}
                  touched={touched}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  setFieldValue={setFieldValue}
                />
              )}
              <Box display="flex" justifyContent="space-between" gap="50px">
                {!stepOne && (
                  <Button
                    onClick={() => setCurrentStep(currentStep - 1)}
                    sx={{
                      p: "15px 40px",
                    }}
                    fullWidth
                    color="primary"
                    variant="contained"
                  >
                    {t("checkout.buttons.back")}
                  </Button>
                )}
                <Button
                  sx={{
                    p: "15px 40px",
                  }}
                  fullWidth
                  type="submit"
                  color="primary"
                  variant="contained"
                >
                  {!stepTwo
                    ? t("checkout.buttons.next")
                    : t("checkout.buttons.placeOrder")}
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default Checkout;
