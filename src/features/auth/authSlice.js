import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
    },
});

export default authSlice.reducer;

export const login = createAsyncThunk("auth/login", async (credentials, thunkAPI) => {
    try {
        const response = await axios.post("/api/login", credentials);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});
