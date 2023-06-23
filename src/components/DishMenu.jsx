import { setItems } from "../state";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  Autocomplete,
  Box,
  Tab,
  Tabs,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Dish from "./Dish";
import { useTranslation } from "react-i18next";

const DishMenu = () => {
  const { t, i18n } = useTranslation();
  const dishes = useSelector((state) => state.basket.items);
  const [searchValue, setSearchValue] = useState(null);
  const [categoryValue, setCategoryValue] = useState("all");
  const dispatch = useDispatch();
  const isMobile = useMediaQuery("(max-width:1025px)");

  const getDishList = async () => {
    const response = await fetch(
      "http://localhost:1337/api/dishes?populate=image"
    );
    const data = await response.json();
    dispatch(setItems(data.data));
  };

  useEffect(() => {
    getDishList();
  }, []);

  const dishesForAutocomplete = dishes.map((dish) => ({
    label:
      i18n.language === "pl" ? dish.attributes.namePL : dish.attributes.name,
  }));

  const menuCategoriesItems = {
    all: dishes,
    appetizer: dishes.filter((e) => e.attributes.category === "appetizer"),
    soup: dishes.filter((e) => e.attributes.category === "soup"),
    burger: dishes.filter((e) => e.attributes.category === "burger"),
    steak: dishes.filter((e) => e.attributes.category === "steak"),
    pasta: dishes.filter((e) => e.attributes.category === "pasta"),
    seafood: dishes.filter((e) => e.attributes.category === "seafood"),
    dessert: dishes.filter((e) => e.attributes.category === "dessert"),
  };

  const filteredItems = menuCategoriesItems[categoryValue] || [];

  const handleChange = (event, newValue) => {
    setCategoryValue(newValue);
    setSearchValue(null);
  };

  const renderDishes = () => {
    if (searchValue) {
      return dishes.filter((dish) => {
        const name =
          i18n.language === "pl"
            ? dish.attributes.namePL
            : dish.attributes.name;
        return name === searchValue.label;
      });
    }
    return filteredItems;
  };

  return (
    <Box width="75%" margin="40px auto">
      <Typography variant="h1" textAlign="center" fontWeight="bold">
        {t("dishMenu.title")}
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center", mt: "16px" }}>
        <Autocomplete
          sx={{ width: isMobile ? "250px" : "350px" }}
          renderInput={(params) => (
            <TextField {...params} label={t("dishMenu.searchLabel")} />
          )}
          disablePortal
          autoHighlight
          options={dishesForAutocomplete}
          value={searchValue}
          isOptionEqualToValue={(option, value) => option.label === value.label}
          onChange={(event, newValue) => {
            setSearchValue(newValue);
          }}
        />
      </Box>

      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Tabs
          value={categoryValue}
          onChange={handleChange}
          textColor="secondary"
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          sx={{
            m: "24px",
          }}
        >
          <Tab label={t("dishMenu.all")} value="all" />
          <Tab label={t("dishMenu.appetizer")} value="appetizer" />
          <Tab label={t("dishMenu.soup")} value="soup" />
          <Tab label={t("dishMenu.seafood")} value="seafood" />
          <Tab label={t("dishMenu.pasta")} value="pasta" />
          <Tab label={t("dishMenu.steak")} value="steak" />
          <Tab label={t("dishMenu.burger")} value="burger" />
          <Tab label={t("dishMenu.dessert")} value="dessert" />
        </Tabs>
      </Box>

      <Box
        margin="0 auto"
        display="grid"
        justifyContent="space-around"
        rowGap="32px"
        columnGap="16px"
        gridTemplateColumns={searchValue ? "1fr" : "repeat(auto-fill, 300px)"}
        sx={{
          placeItems: searchValue ? "center" : "unset",
        }}
      >
        {renderDishes().map((dish) => (
          <Dish dish={dish} key={`${dish.name}_${dish.id}`} />
        ))}
      </Box>
    </Box>
  );
};

export default DishMenu;
