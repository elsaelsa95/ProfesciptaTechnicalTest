import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../features/loginSlice";
import orderReducer from "../features/orderSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    order: orderReducer,
  },
});
