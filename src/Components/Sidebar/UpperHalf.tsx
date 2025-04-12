import { IoSearch } from "react-icons/io5";
import sunnyDay from "../../assets/sunnyday.png";
import { useSelector } from "react-redux";
import ReduxState from "../../Interfaces/ReduxState";


function UpperHalf() {

    const currentData = useSelector((state: ReduxState) => state.forecast.data.currentData);


    return (
        <div className="max-h-[30rem] w-full p-4 flex flex-col justify-center items-start basis-[65%]">
            <div className="flex flex-start w-full mt-8">
                {/* Search bar div */}
                <input
                    placeholder="Search"
                    className="p-2 rounded-bl-md rounded-tl-md block basis-[90%] bg-white text-black"
                    type="text"
                />
                <button className="block basis-[10%] text-white text-lg font-semibold bg-sky-500 p-2 rounded-br-md rounded-tr-md">
                    <IoSearch />
                </button>
            </div>
            
            <div className="w-full h-[50%] flex justify-center mt-8">
                {/* image container */}
                <img 
                    src={sunnyDay} 
                    className="w-[50%] h-full"
                />  
            </div>

            <div className="flex flex-col mt-6">
                {/* Temperature Data */}
                <div className="text-block text-7xl text-center">
                    {currentData.temp_c} °C
                </div>
                <div className="text-black text-xl">
                    Tuesday, 9:35 PM
                </div>
            </div>
        </ div>        
    )
}

export default UpperHalf;