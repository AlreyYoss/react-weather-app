import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './theme/slice';
import weatherSearchHistoryReducer from './weather-search-history/slice';
import dashboardApiService from '@/dashboard/services';

const store = configureStore({
    reducer: {
        theme: themeReducer,
        weatherSearchHistory: weatherSearchHistoryReducer,

        // API service reducer
        [dashboardApiService.reducerPath]: dashboardApiService.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([dashboardApiService.middleware])
})

export default store;