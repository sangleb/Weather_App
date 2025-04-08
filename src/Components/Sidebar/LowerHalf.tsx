import { FaCloud, FaDroplet} from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";

function LowerHalf() {
    return (
        <div className="h-[50%] w-full p-4 flex flex-col justify-between">
            <div className="flex flex-col">
                {/* Percipitation */}
                <div className="flex items-center gap-4 my-2 text-sm">
                    <div>
                        <FaCloud />
                    </div>
                    <div>
                        Partially cloudy
                    </div>   
                </div>

                <div className="flex items-center gap-4 my-2 text-sm">
                    <div>
                        <FaDroplet />   
                    </div>
                    <div>
                        perc-10 %
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-4 mb-2 ">
                {/* City */}
                <div>
                    <IoLocation />
                </div>
                <div>
                    Pune, MH, India
                </div>
            </div>
        </ div>        
    )
}

export default LowerHalf;