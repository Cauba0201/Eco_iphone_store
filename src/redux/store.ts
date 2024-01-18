import { configureStore } from "@reduxjs/toolkit";
import CartSlices from "./Slice/CartSlices";

export const store = configureStore({
  reducer: {
    cart: CartSlices,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
