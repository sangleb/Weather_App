import { FaCloud, FaDroplet} from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import { useSelector } from "react-redux";
import ReduxState from "../../Interfaces/ReduxState";

function LowerHalf() {

    const currentData = useSelector((state: ReduxState) => state.forecast.data.currentData);
    const location = useSelector((state: ReduxState) => state.forecast.data.location);


    return (
        <div className="h-[50%] w-full p-4 flex flex-col justify-between">
            <div className="flex flex-col">
                {/* Percipitation */}
                <div className="flex items-center gap-4 my-2 text-sm">
                    <div>
                        <FaCloud />
                    </div>
                    <div>
                        {currentData.condition}
                    </div>   
                </div>

                <div className="flex items-center gap-4 my-2 text-sm">
                    <div>
                        <FaDroplet />   
                    </div>
                    <div>
                        perc-{currentData.chance_of_rain}%
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-4 mb-2 ">
                {/* City */}
                <div>
                    <IoLocation />
                </div>
                <div>
                    {location.name}, {location.region}, {location.country}
                </div>
            </div>
        </ div>        
    )
}

export default LowerHalf;