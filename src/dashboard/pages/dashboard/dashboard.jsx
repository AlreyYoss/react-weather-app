import React, { useEffect, useState } from 'react';
import SearchInput from '@/common/components/Input/SearchInput';
import WeatherDisplay from '@/dashboard/components/WeatherDisplay';
import { useLazyFetchWeatherQuery, useLazyFetchCityLatLonQuery } from '@/dashboard/services';
import { useDispatch } from 'react-redux';
import { addSearchHistory } from '@/redux/weather-search-history/slice';


export const Dashboard = () => {
    const dispatch = useDispatch();
    const [error, setError] = useState(null);
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    // const [geoData, setGeoData] = useState(null);

    const [triggerGetWeather, {isLoading, weatherError}] = useLazyFetchWeatherQuery();
    const [triggerGetLatLonByCity, {isGeoLoading, geoError}] = useLazyFetchCityLatLonQuery();

    const combinedError = weatherError ?? geoError ?? error;
    const errorMessage = combinedError?.data?.message ?? combinedError;

    const handleSearchWeather = async () => {

        if (!city) return;
        try{
            // const geoInfo = await triggerGetLatLonByCity(city).unwrap();
            // setGeoData(geoInfo[0]);

            // console.log("Geo Data: ",geoInfo);
            console.log(city);
            const weatherInfo = await triggerGetWeather(
                city
            ).unwrap();
            console.log("Weather data: ", weatherInfo);

            // const weatherInfo =  {
            //     coord: { lon: 101.6138, lat: 3.0257 },
            //     weather: [
            //       {
            //         id: 200,
            //         main: "Thunderstorm",
            //         description: "thunderstorm with light rain",
            //         icon: "11n",
            //       },
            //     ],
            //     base: "stations",
            //     main: {
            //       temp: 26.85,
            //       feels_like: 30.7,
            //       temp_min: 25.81,
            //       temp_max: 27.03,
            //       pressure: 1010,
            //       humidity: 94,
            //       sea_level: 1010,
            //       grnd_level: 1007,
            //     },
            //     visibility: 9000,
            //     wind: { speed: 1.03, deg: 0 },
            //     rain: { "1h": 0.1 },
            //     clouds: { all: 20 },
            //     dt: 1745078402,
            //     sys: {
            //       type: 1,
            //       id: 9446,
            //       country: "MY",
            //       sunrise: 1745103986,
            //       sunset: 1745147889,
            //     },
            //     timezone: 28800,
            //     id: 1733046,
            //     name: "Puchong",
            //     cod: 200,
            //   };
            setWeatherData(weatherInfo);
            dispatch(addSearchHistory(weatherInfo));

        }catch(err) {
            console.log("Failed to fetch weather data: ", err);
            setError(err?.data?.message);
        }
    };

    return (
        <div className='flex flex-col items-center justify-center w-full'>
            <div className='pb-12 md:pb-23 w-[90%] md:w-2/3 lg:w-1/2'>
                <SearchInput
                    label="City/Country"
                    type="text"
                    name="city"
                    className="
                       w-full
                        " 
                    onClick={handleSearchWeather}
                    onChange={(e) => setCity(e.target.value)}
                />
                
                {combinedError && <span className="text-sm text-red-500/70 pl-2 font-mono">*Error city not found! Reason: {errorMessage}</span>} 
            </div>
            <div className='w-[90%] md:w-2/3 lg:w-1/2 h-full'>
                <WeatherDisplay 
                    weather={weatherData} 
                    onHistorySearchClick = {(cityName)=>{
                        setCity(cityName);
                        handleSearchWeather();
                    }}
                    />
            </div>
        </div>
    );
}