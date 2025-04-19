import { useSelector } from "react-redux";
import { HiSearchCircle } from "react-icons/hi";
import { TiDelete } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { removeSearchHistory } from "@/redux/weather-search-history/slice";
import dayjs from "dayjs";
import "@/common/styles/Scrollbar.css"
const WeatherSearchHistory = ({onSearchClick}) => {
    const dispatch = useDispatch();
    const searchHistory = useSelector(state => state.weatherSearchHistory.searchHistory);
    console.log("Search History: ", JSON.stringify(searchHistory, null, 2));
    return (
        <div className="p-5 container bg-black/20 rounded-3xl text-sm">
            <h3 className="opacity-80">Search History</h3>
            <div className="flex flex-col gap-2 mt-3 md:h-[400px] overflow-y-auto custom-scrollbar pr-2">
                {searchHistory && searchHistory.length > 0 ? (
                    searchHistory.map((history) => (
                        // console.log("History: ", history)
                        <div className="p-3 container bg-black/30 rounded-2xl">
                        <div className="flex justify-between items-center">
                            <div>
                                <span className="opacity-70">{history.name + ", " + history.sys.country}</span>
                            </div>
                            <div className="flex items-center opacity-30">
                                <span className="pr-1">{dayjs.unix(history.dt).format("DD-MM-YYYY HH:mm A")}</span>
                                <HiSearchCircle className="-rotate-90 text-[30px] p-0 m-0 cursor-pointer" onClick={() => onSearchClick(history.name)}/>
                                <TiDelete  className="text-[38px] cursor-pointer" onClick={() => dispatch(removeSearchHistory(history.id))}/>
                            </div>
                        </div>
                    </div>
                    ))
                    ): (
                        <div className="flex items-center justify-center content-center w-full h-full">
                            <span className="opacity-20 text-xl">NO SEARCH HISTORY</span>

                        </div>
                    )
                    
                }
               
            </div>
        </div>
    );
}

export default WeatherSearchHistory;