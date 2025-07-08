"use client"
import { configureStore } from "@reduxjs/toolkit";
import newsSlice from "./slices/getNewsSlices";
import categoriesSlice from "./slices/newsCategoriesSlice";

const store = configureStore({
  reducer: {
   news:newsSlice,
     newscat:categoriesSlice

  },
});

export default store;
