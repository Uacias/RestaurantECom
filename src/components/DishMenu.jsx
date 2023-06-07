import { setItems } from "../state";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Box, Tab, Tabs, Typography, useMediaQuery } from "@mui/material";

import Dish from "./Dish";

const DishMenu = () => {
  const dishes = useSelector((state) => state.basket.items);
  const [categoryValue, setCategoryValue] = useState("all");
  const dispatch = useDispatch();
  const isMobile = useMediaQuery("(max-width:1000px)");

  const handleChange = (event, newValue) => {
    setCategoryValue(newValue);
  };

  async function getDishList() {
    const dishes = await fetch(
      "http://localhost:1337/api/dishes?populate=image"
    );
    const dishesJson = await dishes.json();
    dispatch(setItems(dishesJson.data));
    console.log(dishes);
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
        margin="0 auto"
        display="grid"
        justifyContent="space-around"
        gridTemplateColumns="repeat(auto-fill, 300px)"
        rowGap="16px"
      >
        {categoryValue === "all" &&
          dishes.map((dish) => {
            return <Dish dish={dish} key={`${dish.name}_${dish.id}`}></Dish>;
          })}
        {categoryValue === "appetizer" &&
          menuCategoriesItems.appetizer.map((dish) => {
            return <Dish dish={dish} key={`${dish.name}_${dish.id}`}></Dish>;
          })}
        {categoryValue === "soup" &&
          menuCategoriesItems.soup.map((dish) => {
            return <Dish dish={dish} key={`${dish.name}_${dish.id}`}></Dish>;
          })}
        {categoryValue === "seafood" &&
          menuCategoriesItems.seafood.map((dish) => {
            return <Dish dish={dish} key={`${dish.name}_${dish.id}`}></Dish>;
          })}
        {categoryValue === "pasta" &&
          menuCategoriesItems.pasta.map((dish) => {
            return <Dish dish={dish} key={`${dish.name}_${dish.id}`}></Dish>;
          })}
        {categoryValue === "steak" &&
          menuCategoriesItems.steak.map((dish) => {
            return <Dish dish={dish} key={`${dish.name}_${dish.id}`}></Dish>;
          })}
        {categoryValue === "burger" &&
          menuCategoriesItems.burger.map((dish) => {
            return <Dish dish={dish} key={`${dish.name}_${dish.id}`}></Dish>;
          })}
        {categoryValue === "dessert" &&
          menuCategoriesItems.dessert.map((dish) => {
            return <Dish dish={dish} key={`${dish.name}_${dish.id}`}></Dish>;
          })}
      </Box>
    </Box>
  );
};

export default DishMenu;
