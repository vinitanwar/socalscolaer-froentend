"use client"
import { configureStore } from "@reduxjs/toolkit";
import newsSlice from "./slices/getNewsSlices";
import categoriesSlice from "./slices/newsCategoriesSlice";
import topnews from "./slices/getLetestNews";

const store = configureStore({
  reducer: {
   news:newsSlice,
     newscat:categoriesSlice,
     topnews

  },
});

export default store;
