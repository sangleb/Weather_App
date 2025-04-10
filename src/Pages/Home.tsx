import MainData from "../Components/MainData/MainData";
import Sidebar from "../Components/Sidebar/Sidebar";
import nightImg from "../assets/nightImg.jpg";
import DayImage from "../assets/dayImage.png";

function Home(){
    return(
        <div className="h-[100vh]" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${DayImage})`, backgroundSize: 'cover'}}>
            <div className="h-full mx-8 flex flex-row justify-center items-center">
                <Sidebar />
                <MainData />
            </div>
        </ div>
    )


}


export default Home;