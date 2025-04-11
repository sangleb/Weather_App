import DayForecast from "./DayForecast";
import CurrentDayForecast from "./CurrentDayForecast";


export default interface ForecastData {
    location: {localtime: string, country: string, region: string, name: string},
    forecast: DayForecast[],
    currentData: CurrentDayForecast
}