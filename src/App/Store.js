import { configureStore } from "@reduxjs/toolkit";
import userDetail from "../Features/userDetailsSlice";

export const store = configureStore({
    reducer: {
app: userDetail,        
    },
});

