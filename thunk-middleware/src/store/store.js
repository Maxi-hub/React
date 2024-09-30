import { configureStore } from '@reduxjs/toolkit';
import { loggerMiddleWare } from './loggerMiddleWare';
import userByIDReducer from './userByIDReducer';
import userReducer from './userReducer';

const store = configureStore({
    reducer: {
        users: userReducer,
        user: userByIDReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleWare),
});

export default store;