import { createSlice } from "@reduxjs/toolkit";
import { Restaurant } from "../../types";
import type { RootState } from "../store";

// Define a type for the slice state
interface RestaurantState {
  restaurant: Restaurant | undefined;
}

// Define the initial state using that type
const initialState: RestaurantState = {
  restaurant: undefined,
};

export const restaurantSlice = createSlice({
  name: "restaurant",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setRestaurant: (state, action) => {
      state.restaurant = action.payload;
    },
  },
});

export const { setRestaurant } = restaurantSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectRestaurant = (state: RootState) =>
  state.restaurant.restaurant;

export default restaurantSlice.reducer;
