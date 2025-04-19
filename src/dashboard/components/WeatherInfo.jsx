import { useSelector } from "react-redux";

const WeatherInfo = ({location,temp,highest_temp,lowest_temp,humidity,weather,time}) => {
    const isLightTheme = useSelector((state) => state.theme.isLightTheme);
    const weatherImageUrl = () => {
        return isLightTheme ? "/src/common/assets/sun.png"  : "/src/common/assets/cloud.png" ;
    }
    return(
        <div>
            <div className="flex justify-between p-0 m-0">
                <div className="text flex flex-col ">
                    <span className="text-sm opacity-70 md:pl-1">Today's Weather</span>
                    <span className="text-7xl md:text-8xl md:-mt-3">{temp}°</span>
                    <span className="text-sm opacity-70 md:pl-1">H:{highest_temp}°L:{lowest_temp}°</span>
                    <div className="text-sm text-left md:pl-1">
                        {location}
                    </div>
                </div>
                <img 
                    src={weatherImageUrl()}
                    alt="" 
                    className="
                        absolute
                        w-[40%]
                        -top-15
                        sm:-top-23
                        md:-top-27
                        right-0
                        md:w-3/6
                        lg:w-1/2
                        xl:w-1/3
                    "
                />
                
            </div>
            <div className="flex flex-col-reverse justify-end md:gap-10 -mt-15 md:flex-row md:-mt-5 lg:gap-13 xl:gap-20 2xl:gap-39">
                <div className="col-span-2 text-sm opacity-70 md:text-center text-right">
                    {time}
                </div>
                <div className="col-span-2 text-sm opacity-70 md:text-center text-right">
                    Humidity: {humidity}%
                </div>
                <div className="text-sm opacity-70 text-right">
                    {weather}
                </div>
            </div>
               
        </div>
        
    );
};

export default WeatherInfo;