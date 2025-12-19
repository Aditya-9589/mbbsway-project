import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


// API URL 
const HOME_API_URL = "https://admin.mbbsway.in/api/get-home";


// Async thunk 
export const fetchHomeData = createAsyncThunk(
    "home/fetchHomeData",
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch(HOME_API_URL);

            if (!response.ok) {
                throw new Error("Failed to fetch home data")
            }

            const result = await response.json();

            // we only store result.data in Redux
            return result.data;
        }   catch (error) {
            return rejectWithValue(error.message);
        }
    }
);


// Initial state
const initialState = {
    data: null,
    loading: false,
    error: null,
};


const homeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchHomeData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchHomeData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchHomeData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Something went wrong";
            });
    },
});

export default homeSlice.reducer;