import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isNotValidate: false,
}

const buildFormValidSlice = createSlice({
    name: "buildFormValidate",
    initialState,
    reducers: {
        openValid: (state) => {
            state.isNotValidate = true;
        },
        closeValid: (state) => {
            state.isNotValidate = false;
        },
    }
})

export const { openValid, closeValid } = buildFormValidSlice.actions;
export default buildFormValidSlice.reducer;