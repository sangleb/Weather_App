import LowerHalf from "./LowerHalf";
import UpperHalf from "./UpperHalf";

function Sidebar() {


    return(
        <div className="basis-1/4 flex flex-col items-center justify-between text-black h-full rounded-tl-3xl rounded-bl-3xl bg-[#f6f6f8]" >
            <UpperHalf />
            <LowerHalf />
        </div>

    )
}


export default Sidebar;