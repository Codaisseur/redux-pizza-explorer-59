import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  name: null,
  favorites: [67283, 357311],
};

export const userSlice = createSlice({
  initialState,
  name: "userSlice",
  reducers: {
    toggleFav: (state, action) => {
      const pizzaId = action.payload;

      // check if it's already there
      if (state.favorites.includes(pizzaId)) {
        // if it is => remove it
        state.favorites = state.favorites.filter((pId) => pId !== pizzaId);
      } else {
        // if it's not => add it
        state.favorites = [...state.favorites, pizzaId];
      }
    },
  },
});

export const { toggleFav } = userSlice.actions;

export default userSlice.reducer;
