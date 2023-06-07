import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basket: [],
  items: [],
  isBasketVisible: false,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    setIsBasketVisible(state) {
      state.isBasketVisible = !state.isBasketVisible;
    },

    setItems(state, action) {
      state.items = action.payload;
    },

    addToBasket(state, action) {
      const basketItem = state.basket.find(
        (e) => e.id === action.payload.dish.id
      );

      if (basketItem) {
        basketItem.count += action.payload.dish.count;
      } else {
        state.basket.push({ ...action.payload.dish });
      }
    },

    removeFromBasket(state, action) {
      state.basket = state.basket.filter((e) => e.id !== action.payload.id);
    },

    increaseCount(state, action) {
      state.basket = state.basket.map((e) => {
        if (e.id === action.payload.id) e.count++;
        return e;
      });
    },

    decreaseCount(state, action) {
      state.basket = state.basket.map((e) => {
        if (e.count > 1 && e.id === action.payload.id) --e.count;
        return e;
      });
    },
  },
});

export const {
  addToBasket,
  removeFromBasket,
  setIsBasketVisible,
  setItems,
  increaseCount,
  decreaseCount,
} = basketSlice.actions;

export default basketSlice.reducer;
