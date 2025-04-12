import { useEffect } from "react";
import MainData from "../Components/MainData/MainData";
import Sidebar from "../Components/Sidebar/Sidebar";
import DayImage from "../assets/dayImage.png";
import { fetchData } from "../Redux/Slices/ForecastSlice";
import { useAppDispatch } from "../Hooks/hooks";

function Home(){

    const dispatch = useAppDispatch();

    useEffect(() =>{
        dispatch(fetchData())
    }, []);

    return(
        <div className="min-h-[100vh] px-8 py-8 flex flex-row justify-center items-stretch" 
            style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${DayImage})`, 
            backgroundSize: 'cover'}}
        >
                <Sidebar />
                <MainData />
        </ div>
    )


}


export default Home;