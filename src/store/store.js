import {configureStore} from "@reduxjs/toolkit";
import getPostSlice from "../reducer/getPostUsersSlice.js";

const store = configureStore({
    reducer:{
        getPostSlice,
    }
})
export default store;