import LowerHalf from "./LowerHalf";
import UpperHalf from "./UpperHalf";

function Sidebar() {


    return(
        <div className="overflow-y-auto basis-1/4 flex flex-col items-center justify-between text-black rounded-tl-3xl rounded-bl-3xl" 
            style={{background: 'rgba(255, 255, 255, 0.815)'}}
        >
            <UpperHalf />
            {/* <div className="divider bg-white text-white"></div> */}
            <div className="h-[2px] w-[90%] bg-sky-200 mt-8 rounded-full">
            </div>
            <LowerHalf />
        </div>

    )
}


export default Sidebar;