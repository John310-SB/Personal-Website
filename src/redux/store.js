import { configureStore } from "@reduxjs/toolkit";
import tourReducer from '../redux/tour'

export default configureStore({
    reducer: {
        tour: tourReducer
    }
})