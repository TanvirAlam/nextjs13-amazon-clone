import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    addToBasket: (state, action) => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    removeFromBasket: (state, action) => {},
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state: { basket: { items: any } }) =>
  state.basket.items;

export default basketSlice.reducer;
