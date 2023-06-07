import { Box, Typography } from "@mui/material";

const Menu = () => {
  return (
    <Box
      sx={{
        p: 2,
        bgcolor: "rgba(0,0,0,.95)",
        width: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h3"
        color="whitesmoke"
        sx={{ borderBottom: 1, borderColor: "whitesmoke" }}
      >
        Menu
      </Typography>
    </Box>
  );
};

export default Menu;
