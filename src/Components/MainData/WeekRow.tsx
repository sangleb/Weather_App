import TempCard from "../TempCard";
import sunnyDay from "../../assets/sunnyDay.png";
import { useSelector } from "react-redux";
import ReduxState from "../../Interfaces/ReduxState";


function WeekRow(){

    const currentData = useSelector((state: ReduxState) => state.forecast.data.currentData);

    return(
        <div className="w-full px-12 py-2 flex flex-wrap gap-5">
            <TempCard title="Mon" temperature="20 °C" image={sunnyDay}/>
            <TempCard title="Mon" temperature="20 °C" image={sunnyDay}/>
            <TempCard title="Mon" temperature="20 °C" image={sunnyDay}/>
            <TempCard title="Mon" temperature="20 °C" image={sunnyDay}/>
            <TempCard title="Mon" temperature="20 °C" image={sunnyDay}/>
            <TempCard title="Mon" temperature="20 °C" image={sunnyDay}/>
            <TempCard title="Mon" temperature="20 °C" image={sunnyDay}/>
        </div>
    )
    
}

export default WeekRow;