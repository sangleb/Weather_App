import { IoSearch } from "react-icons/io5";
import sunnyDay from "../../assets/sunnyday.png";

function UpperHalf() {
    return (
        <div className="h-[50%] w-full p-4 flex flex-col justify-center items-center">
            <div className="flex flex-start w-full">
                {/* Search bar div */}
                <input
                    placeholder="Search"
                    className="px-2 py-2 rounded-bl-md rounded-tl-md block basis-3/4 bg-white text-black"
                    type="text"
                />
                <button className="block basis-auto text-white text-lg font-semibold bg-sky-500 p-2 rounded-br-md rounded-tr-md">
                    <IoSearch />
                </button>
            </div>
            
            <div>
                {/* image container */}
                <img src={sunnyDay} alt="" />
            </div>
        </ div>        
    )
}

export default UpperHalf;