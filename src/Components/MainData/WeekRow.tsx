import TempCard from "../TempCard";
import sunnyDay from "../../assets/sunnyDay.png" 


function WeekRow(){
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