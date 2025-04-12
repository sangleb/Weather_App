import TempCard from "../TempCard";
import sunnyDay from "../../assets/sunnyDay.png";
import { useSelector } from "react-redux";
import ReduxState from "../../Interfaces/ReduxState";


function WeekRow(){

    const dayForecast = useSelector((state: ReduxState) => state.forecast.data.dayForecast);

    const weekdays = [
        'Sun',
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat'
    ]

    return(
        <div className="w-full px-12 py-2 flex flex-wrap gap-5">
            {dayForecast && dayForecast.map((forecast) => {
                return <TempCard title={weekdays[(new Date(forecast.date)).getDay()]} temperature={forecast.avgtemp_c.toString()} image={sunnyDay}/>
            })}            
            
        </div>
    )
    
}

export default WeekRow;