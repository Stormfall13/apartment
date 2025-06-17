import { configureStore } from "@reduxjs/toolkit";
import callOverlayReducer from "./slices/callOverlaySlice";
import buildFormValidSlice from './slices/bulidFormValidateSlice';

const store = configureStore({
    reducer: {
        callOverlay: callOverlayReducer,
        buildFormValidate: buildFormValidSlice,
    },
});

export default store;
