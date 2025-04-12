import TopRow from "./TopRow";
import WeekRow from "./WeekRow";
import HighlightRow from "./HighlightRow";

function MainData() {

    
    return(
        <div className="overflow-y-auto flex flex-col justify-start items-start py-4 basis-9/12 text-black bg-[#f6f6f8] rounded-br-3xl rounded-tr-3xl" >
            <div className="flex flex-col ml-10">
                <TopRow />
                <WeekRow /> 
            <div className="font-semibold text-2xl text-left w-full mt-8 px-12 py-2">
                Today's Highlight
            </div>
                <HighlightRow />
            </div>
        </ div>
    )
}


export default MainData;


//flex flex-col justify-between items-center basis-3/4 text-black h-full rounded-br-3xl rounded-tr-3xl bg-[#f6f6f8] p-4