import { configureStore } from "@reduxjs/toolkit";
import callOverlayReducer from "./slices/callOverlaySlice";

const store = configureStore({
    reducer: {
        callOverlay: callOverlayReducer,
    },
});

export default store;
