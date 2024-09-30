import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUserbyID = createAsyncThunk(
    'users/fetchUserbyID',
    async (id, thunkApi) => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
            if (!response.ok) {
                throw new Error('Sorry, Something is wrong');
            }
            const user = await response.json();
            return user;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

const initialState = {
    user: '',
    idLoading: false,
    idError: null,
};

const userIdSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) =>
        builder
            .addCase(fetchUserbyID.pending, (state) => {
                state.idLoading = true;
                state.idError = null;
            })
            .addCase(fetchUserbyID.fulfilled, (state, action) => {
                state.idLoading = false;
                state.user = action.payload;
            })
            .addCase(fetchUserbyID.rejected, (state, action) => {
                state.idLoading = false;
                state.idError = action.payload;
            })
});

export const { fetchUserbyIDPending, fetchUserbyIDFulfilled, fetchUserbyIDRejected } = userIdSlice.actions;
export default userIdSlice.reducer;
