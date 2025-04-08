import LowerHalf from "./LowerHalf";
import UpperHalf from "./UpperHalf";

function Sidebar() {


    return(
        <div className="basis-1/4 flex flex-col items-center justify-between text-black h-full rounded-tl-3xl rounded-bl-3xl bg-[#f6f6f8]" >
            <UpperHalf />
            {/* <div className="divider bg-white text-white"></div> */}
            <div className="h-[2px] w-[90%] bg-sky-200 mt-8 rounded-full">
            </div>
            <LowerHalf />
        </div>

    )
}


export default Sidebar;