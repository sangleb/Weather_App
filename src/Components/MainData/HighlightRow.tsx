import HighlightCard from "../HighlightCards";
import { useSelector } from "react-redux";
import ReduxState from "../../Interfaces/ReduxState";


function HighlightRow(){

    const currentData = useSelector((state: ReduxState) => state.forecast.data.currentData);

    function uvRange() : string {
        if(currentData.uv <= 2) return 'low';
        else if(currentData.uv > 5 && currentData.uv < 8) return 'Moderate';
        else if(currentData.uv >= 8 && currentData.uv < 11) return 'High';
        else return 'very high';
    }

    function humidityRange() : string {
        if(currentData.hunmidity > 0 && currentData.hunmidity <= 30) return 'Low';
        else if(currentData.hunmidity > 30 && currentData.hunmidity < 60) return 'Moderate(Comfortable)';
        else return 'high';
    }


    function airQualityRange() : string {
        if(currentData.aqi > 0 && currentData.hunmidity <= 50) return 'Good';
        else if(currentData.aqi > 50 && currentData.aqi <= 100) return 'Moderate';
        else if(currentData.aqi > 100 && currentData.aqi <= 150) return 'Unhealthy for sensitive people';
        else if(currentData.aqi > 150 && currentData.aqi <= 200) return 'Unhealthy';
        else if(currentData.aqi > 200 && currentData.aqi <= 300) return 'Very unhealthy';
        else return 'Hazardous';
    }


    return(
        <div className="flex flex-wrap  gap-10 px-12 py-2">
            <HighlightCard title="UV Index" data={currentData.uv.toString()} footer={uvRange()} />
            <HighlightCard title="Wind Status" data={currentData.wind_kph.toString()} footer="km/hr" />
            <HighlightCard title="Sunrise and Sunset" data={currentData.sunrise} footer={currentData.sunset}/> 
            <HighlightCard title="Humidity" data={currentData.hunmidity.toString()} footer= {humidityRange()} />
            <HighlightCard title="Visibility" data={currentData.vis_km.toString()} footer="km"/>
            <HighlightCard title="Air Quality" data={currentData.aqi.toString()} footer={airQualityRange()} />
                        
        </div>
    )
}

export default HighlightRow;