import { combineReducers } from "@reduxjs/toolkit";

import basketReducer from "./slices/basketSlice";
import restaurantReducer from "./slices/rerstaurantSlice";

const rootReducer = combineReducers({
  basket: basketReducer,
  restaurant: restaurantReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
