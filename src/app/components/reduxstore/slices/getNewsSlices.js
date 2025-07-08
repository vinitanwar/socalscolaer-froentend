import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseurl } from "../utils";

 export const getNews= createAsyncThunk("/news",async(data="all")=>{
const response= await axios.get(`${baseurl}/getnews?data=${data}`)
return response.data

 })


 const createNewaSlice= createSlice({
    name:"news",
    initialState:{info:null,isLoading:false,isError:false},
    extraReducers:(builder)=>{
        builder.addCase(getNews.pending,(state)=>{
            state.isLoading=true;
            state.isError=false
        })
        builder.addCase(getNews.fulfilled,(state,action)=>{
            state.info=action.payload;
           state.isLoading=false;
           state.isError=false
        })
        builder.addCase(getNews.rejected,(state)=>{
            state.isError=true;
            state.isLoading=false;
        })




    }
 })


const newsSlice= createNewaSlice.reducer;

export default newsSlice;