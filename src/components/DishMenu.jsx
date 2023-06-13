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

const DishMenu = () => {
  const dishes = useSelector((state) => state.basket.items);
  const options = dishes.map((dish) => {
    return {
      firstLetter: dish.attributes.category[0],
      category: dish.attributes.category,
      label: dish.attributes.name,
    };
  });
  const [searchValue, setSearchValue] = useState(null);
  const [categoryValue, setCategoryValue] = useState("all");
  const dispatch = useDispatch();
  const isMobile = useMediaQuery("(max-width:1000px)");
  const handleChange = (event, newValue) => {
    setCategoryValue(newValue);
    setSearchValue(null);
  };

  async function getDishList() {
    const dishes = await fetch(
      "http://localhost:1337/api/dishes?populate=image"
    );
    const dishesJson = await dishes.json();
    dispatch(setItems(dishesJson.data));
  }

  useEffect(() => {
    getDishList();
  }, []);

  const menuCategoriesItems = {
    appetizer: dishes.filter((e) => e.attributes.category === "appetizer"),
    soup: dishes.filter((e) => e.attributes.category === "soup"),
    burger: dishes.filter((e) => e.attributes.category === "burger"),
    steak: dishes.filter((e) => e.attributes.category === "steak"),
    pasta: dishes.filter((e) => e.attributes.category === "pasta"),
    seafood: dishes.filter((e) => e.attributes.category === "seafood"),
    dessert: dishes.filter((e) => e.attributes.category === "dessert"),
  };

  return (
    <Box width="75%" margin="40px auto">
      <Typography variant="h2" textAlign="center">
        Check Our Menu
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", mt: "16px" }}>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          autoHighlight
          options={options.sort((a, b) =>
            a.firstLetter.localeCompare(b.firstLetter)
          )}
          groupBy={(option) => option.category.toUpperCase()}
          getOptionLabel={(option) => option.label}
          value={searchValue}
          isOptionEqualToValue={(option, value) => option.label === value.label}
          onChange={(event, newValue) => {
            setSearchValue(newValue);
          }}
          sx={{
            width: useMediaQuery("(min-width:450px)") ? "300px" : "200px",
          }}
          renderInput={(params) => (
            <TextField {...params} label="Search for products" />
          )}
        />
      </Box>

      <Tabs
        value={categoryValue}
        onChange={handleChange}
        centered
        TabIndicatorProps={{ sx: { display: isMobile ? "none" : "block" } }}
        sx={{
          m: "12px",
          "& .MuiTabs-flexContainer": {
            flexWrap: "wrap",
          },
        }}
      >
        <Tab label="All" value="all" />
        <Tab label="Appetizer" value="appetizer" />
        <Tab label="Soup" value="soup" />
        <Tab label="Seafood" value="seafood" />
        <Tab label="Pasta" value="pasta" />
        <Tab label="Steak" value="steak" />
        <Tab label="Burger" value="burger" />
        <Tab label="Dessert" value="dessert" />
      </Tabs>
      <Box
        sx={{ m: "0 auto", display: searchValue ? "flex" : "grid" }}
        margin="0 auto"
        display="grid"
        justifyContent="space-around"
        gridTemplateColumns="repeat(auto-fill, 300px)"
        rowGap="16px"
      >
        {searchValue
          ? dishes
              .filter((dish) => dish.attributes.name === searchValue.label)
              .map((dish) => (
                <Dish dish={dish} key={`${dish.name}_${dish.id}`}></Dish>
              ))
          : categoryValue === "all"
          ? dishes.map((dish) => (
              <Dish dish={dish} key={`${dish.name}_${dish.id}`}></Dish>
            ))
          : categoryValue === "appetizer"
          ? menuCategoriesItems.appetizer.map((dish) => (
              <Dish dish={dish} key={`${dish.name}_${dish.id}`}></Dish>
            ))
          : categoryValue === "soup"
          ? menuCategoriesItems.soup.map((dish) => (
              <Dish dish={dish} key={`${dish.name}_${dish.id}`}></Dish>
            ))
          : categoryValue === "seafood"
          ? menuCategoriesItems.seafood.map((dish) => (
              <Dish dish={dish} key={`${dish.name}_${dish.id}`}></Dish>
            ))
          : categoryValue === "pasta"
          ? menuCategoriesItems.pasta.map((dish) => (
              <Dish dish={dish} key={`${dish.name}_${dish.id}`}></Dish>
            ))
          : categoryValue === "steak"
          ? menuCategoriesItems.steak.map((dish) => (
              <Dish dish={dish} key={`${dish.name}_${dish.id}`}></Dish>
            ))
          : categoryValue === "burger"
          ? menuCategoriesItems.burger.map((dish) => (
              <Dish dish={dish} key={`${dish.name}_${dish.id}`}></Dish>
            ))
          : categoryValue === "dessert"
          ? menuCategoriesItems.dessert.map((dish) => (
              <Dish dish={dish} key={`${dish.name}_${dish.id}`}></Dish>
            ))
          : null}
      </Box>
    </Box>
  );
};

export default DishMenu;
