import { Box, Typography, useMediaQuery } from "@mui/material";
import termsBackground from "../../img/terms-policy/bg-terms.jpg";
const TermsConditions = () => {
  const isMobile = useMediaQuery("(max-width:425px)");
  return (
    <Box
      sx={{
        width: "100%",
        mt: "64px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(${termsBackground})`,
      }}
    >
      <Box
        sx={{
          background: "rgba(255,255,255,.6)",
          paddingBlock: 10,
          paddingInline: "12.5%",
        }}
      >
        <Typography
          variant="h2"
          sx={{ textAlign: "center", fontWeight: "bold" }}
        >
          Terms & Conditions
        </Typography>
        <Typography variant={isMobile ? "h5" : "h4"} sx={{ mt: 8 }}>
          Witamy w naszej usłudze! Przed rozpoczęciem korzystania z naszego
          serwisu, prosimy o zapoznanie się z poniższymi warunkami i zasadami:
        </Typography>
        <Typography variant={isMobile ? "h5" : "h4"} sx={{ mt: 7 }}>
          1. Korzystając z naszej usługi, akceptujesz nasze warunki użytkowania
          oraz politykę prywatności.
          <br />
          <br />
          2. Zabrania się używania naszej usługi w sposób niezgodny z
          obowiązującym prawem.
          <br />
          <br />
          3. Zastrzegamy sobie prawo do wprowadzania zmian w naszej usłudze w
          dowolnym momencie. Informacje dotyczące zmian będą udostępniane
          użytkownikom w sposób odpowiedni, na przykład poprzez ogłoszenia na
          stronie internetowej lub powiadomienia emailowe. Kontynuowanie
          korzystania z naszej usługi po wprowadzeniu zmian oznacza akceptację
          nowych warunków.
          <br />
          <br />
          4. Wszelkie prawa autorskie i własność intelektualna należą do naszej
          firmy.
          <br />
          <br />
          <br />
          <br />
          Dziękujemy za skorzystanie z naszej usługi. Jeśli masz jakiekolwiek
          pytania lub wątpliwości, skontaktuj się z nami.
        </Typography>
      </Box>
    </Box>
  );
};

export default TermsConditions;
