import { configureStore } from "@reduxjs/toolkit";
import user from './reducers/User'


export default configureStore({
    reducer:{
        user:user,

    }
});