import WeatherInfo from "./WeatherInfo";
import WeatherSearchHistory from "./WeatherSearchHistory";
import dayjs from "dayjs";

const WeatherDisplay = ({weather, onHistorySearchClick}) => {
    return(
        <div className="bg-black/20 rounded-lg h-[75vh] w-full  max-h-screen lg:h-[76vh] relative">
            <div className="p-4 md:p-10">
                <div className="pb-3">
                    {weather ? 
                        <WeatherInfo 
                            location={weather.name + ", " + weather.sys.country}
                            temp={weather.main.temp}
                            highest_temp={weather.main.temp_max}
                            lowest_temp={weather.main.temp_min}
                            humidity={weather.main.humidity}
                            weather={weather.weather[0].main}
                            time={dayjs.unix(weather.dt).format("DD-MM-YYYY HH:mm A")}
                        /> : <></>
                    }
                    
                </div>
                <div>
                    <WeatherSearchHistory onSearchClick={onHistorySearchClick} />
                </div>
            </div>
        </div>
    );
}

export default WeatherDisplay;