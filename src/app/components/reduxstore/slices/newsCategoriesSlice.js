import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseurl } from "../utils";

 export const getNewsCategories= createAsyncThunk("/catagor",async()=>{
const response= await axios.get(`${baseurl}/getcategories`)
return response.data

 })


 const createCategoriesSlice= createSlice({
    name:"categories",
    initialState:{info:null,isLoading:false,isError:false},
    extraReducers:(builder)=>{
        builder.addCase(getNewsCategories.pending,(state)=>{
            state.isLoading=true;
            state.isError=false
        })
        builder.addCase(getNewsCategories.fulfilled,(state,action)=>{
            state.info=action.payload;
           state.isLoading=false;
           state.isError=false
        })
        builder.addCase(getNewsCategories.rejected,(state)=>{
            state.isError=true;
            state.isLoading=false;
        })




    }
 })


const categoriesSlice= createCategoriesSlice.reducer;

export default categoriesSlice;