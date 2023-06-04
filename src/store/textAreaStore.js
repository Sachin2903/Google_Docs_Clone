import { configureStore } from "@reduxjs/toolkit";
import { textAreaSliceRef } from "../slice/textAreaSlice";
export const store=configureStore({
    reducer:{
        "textAreaRef":textAreaSliceRef.reducer

    }
})