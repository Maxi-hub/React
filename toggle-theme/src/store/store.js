import { configureStore } from '@reduxjs/toolkit';
// import themeReducer from './themeReducer';
import themeReducer from './themeSlice';

export const store = configureStore({
    reducer: {
        theme: themeReducer,
    }
});