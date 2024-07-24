import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    users: [],
    user: null,
    loading: '',
    error: null,
}


export const getPostUsersSlice = createAsyncThunk(
    'getPostUsersSlice',
    async () => {
        const response = await axios('https://jsonplaceholder.typicode.com/users ')
        return response.data;
    }
)

export const getPostUser = createAsyncThunk(
    'getPostUser',
    async (id) => {
        const response = await axios(`https://jsonplaceholder.typicode.com/users/${id} `)
        return response.data;
    }
)

const getPostsSlice = createSlice({
    name:'getPostsSlice',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(getPostUsersSlice.pending, (state) => {
                state.loading = 'идет загрузка родной'
            })
            .addCase(getPostUsersSlice.rejected, (state) => {
                state.error = 'ошибка родной при запросе'
            })
            .addCase(getPostUsersSlice.fulfilled, (state, action) => {
                state.users = action.payload
                state.loading = 'загрузка успешно'
            })


            .addCase(getPostUser.pending, (state) => {
                state.loading = 'идет загрузка родной'
            })
            .addCase(getPostUser.rejected, (state) => {
                state.error = 'ошибка родной при запросе'
            })
            .addCase(getPostUser.fulfilled, (state, action) => {
                state.user = action.payload
                state.loading = 'загрузка успешно'
            })
    }
})
export default getPostsSlice.reducer