import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

const dashboardApiService= createApi({
    reducerPath: 'dashboardApi',
    baseQuery: fetchBaseQuery({ baseUrl: "https://api.openweathermap.org"}),
    endpoints: (builder) => ({
        fetchWeather: builder.query({
            query: (city, lat, lon) => ({
                url: '/data/2.5/weather',
                method: 'GET',
                params: {
                    q: city,
                    lat: lat,
                    lon: lon,
                    appid: API_KEY,
                    units: 'metric',
                }
            })
        }),
        fetchCityLatLon: builder.query({
            query: (city) => ({
                url: '/geo/1.0/direct',
                method: 'GET',
                params: {
                    q: city,
                    limit: 1,
                    appid: API_KEY,
                }
            })
        })
    })
})

export const { 
    useLazyFetchWeatherQuery,
    useLazyFetchCityLatLonQuery,
 } = dashboardApiService;
export default dashboardApiService;