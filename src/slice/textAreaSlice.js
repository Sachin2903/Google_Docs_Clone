import { createSlice } from "@reduxjs/toolkit";

export const textAreaSliceRef=createSlice({
    initialState:"",
    name:"textAreaRef",
    reducers:{
        "addRef":((state,action)=>{
            
            return action.payload;
        })
    }
})