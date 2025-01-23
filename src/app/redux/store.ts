
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartslice"; // Adjust the path as needed

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
