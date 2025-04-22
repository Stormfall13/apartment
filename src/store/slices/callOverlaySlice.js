import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false, // Изначально оверлей скрыт
};

const callOverlaySlice = createSlice({
    name: "callOverlay",
    initialState,
    reducers: {
        openOverlay: (state) => {
            state.isOpen = true;
        },
        closeOverlay: (state) => {
            state.isOpen = false;
        },
    },
});

export const { openOverlay, closeOverlay } = callOverlaySlice.actions;
export default callOverlaySlice.reducer;
