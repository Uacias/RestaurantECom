import { Box, Typography, useMediaQuery } from "@mui/material";
import imgTwo from "../../img/other/josh-hild-v4LQkXJPK0o-unsplash.jpg";
import imgOne from "../../img/other/stefan-c-asafti-9p6pFEwq-wI-unsplash.jpg";
import imgThree from "../../img/other/sebastian-coman-photography-cQbOSRpElxw-unsplash.jpg";
const OurStory = () => {
  const isMobile = useMediaQuery("(max-width: 425px)");

  return (
    <Box
      margin="40px auto"
      sx={{ textAlign: "center", width: isMobile ? "100%" : "75%" }}
    >
      <Typography variant="h2" sx={{ fontWeight: "bold", mb: 3 }}>
        Our Story
      </Typography>
      <Box margin="0 auto" width="100%" padding={2}>
        <Box
          display="grid"
          gridTemplateColumns={{ lg: "100%", xl: "70% 30%" }}
          gap="8px 0"
        >
          <Box>
            <img src={imgOne} alt="test" width="90%" />
          </Box>
          <Box
            marginY={{
              lg: "16px",
              xl: "0",
              maxWidth: isMobile ? "100%" : "90%",
            }}
            marginX="auto"
          >
            <Typography
              variant="h4"
              fontWeight="bold"
              marginBottom={{ lg: "8px", xl: "16px" }}
            >
              History
            </Typography>
            <Typography variant="h5" textAlign={"left"}>
              La Nemours is a charming French restaurant located in the heart of
              the city. The story of La Nemours began when the owner, a French
              chef, fell in love with the culinary culture of his home country.
              His passion for French cuisine and dedication to quality
              ingredients led him to open La Nemours, where guests can savor
              classic French dishes made with the freshest ingredients. With its
              elegant atmosphere and delicious food, La Nemours has become a
              beloved dining destination for locals and visitors alike.
            </Typography>
          </Box>

          <Box>
            <img src={imgTwo} alt="test" width="90%" />
          </Box>
          <Box marginY={{ lg: "16px", xl: "0" }} maxWidth="90%" marginX="auto">
            <Typography
              variant="h4"
              fontWeight="bold"
              marginBottom={{ lg: "8px", xl: "16px" }}
            >
              Fresh French Flavors
            </Typography>
            <Typography variant="h5" textAlign={"left"}>
              At La Nemours, we take pride in serving only the freshest
              ingredients to create delicious French cuisine. Our menu features
              classic dishes made with high-quality, locally sourced
              ingredients, ensuring that every dish is bursting with flavor.
              From our savory entrees to our decadent desserts, we strive to
              provide our guests with an unforgettable dining experience. At La
              Nemours, you'll savor the taste of authentic French cuisine,
              prepared with care and served with passion.
            </Typography>
          </Box>
          <Box>
            <img src={imgThree} alt="test" width="90%" />
          </Box>
          <Box marginY={{ lg: "16px", xl: "0" }} maxWidth="90%" marginX="auto">
            <Typography
              variant="h4"
              fontWeight="bold"
              marginBottom={{ lg: "8px", xl: "16px" }}
            >
              Passionate Professionals
            </Typography>
            <Typography variant="h5" textAlign={"left"}>
              At La Nemours, our team of skilled cooks and friendly staff are
              dedicated to providing exceptional service and delicious French
              food. With years of experience and a passion for French cooking
              techniques, our chefs create unforgettable dishes using the
              freshest ingredients. Our welcoming staff will make you feel at
              home, ensuring a memorable dining experience
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default OurStory;
