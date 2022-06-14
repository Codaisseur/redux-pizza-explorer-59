// src/store/index.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/slice";
import pizzasReducer from "./pizzas/slice";

const store = configureStore({
  reducer: {
    pizzas: pizzasReducer,
    user: userReducer,
  },
});

export default store;
