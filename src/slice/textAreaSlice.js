import { createSlice } from "@reduxjs/toolkit";

export const textAreaSliceRef=createSlice({
    initialState:{
     textAreaValue:""
    },
    name:"textAreaRef",
    reducers:{
        "addRef":((state,action)=>{
            return action.payload;
        }),
        setTextAreaValue:((state,action)=>{
          


        })
    }
})