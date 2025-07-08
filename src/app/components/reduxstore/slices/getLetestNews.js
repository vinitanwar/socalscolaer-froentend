import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseurl } from "../utils";


 export const getlatestnews=createAsyncThunk("/latestnews",async()=>{
const response= await axios.get(`${baseurl}/getlatest`);
const data= response.data;
return data;


 })

 const topNewsSLice= createSlice({
    name:"topnews",
    initialState:{info:{},isLoading:false,isError:false},
    extraReducers:(builder)=>{
        builder.addCase(getlatestnews.pending,(state)=>{
            state.isLoading=true
        })
          builder.addCase(getlatestnews.fulfilled,(state,action)=>{
            state.info=action.payload;
            state.isLoading=false;
        })
          builder.addCase(getlatestnews.rejected,(state)=>{
            state.isLoading=false
            state.isError=true
        })
    }
 })

const topnews= topNewsSLice.reducer;
 export default topnews