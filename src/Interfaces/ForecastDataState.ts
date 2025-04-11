import ForecastData from './ForecastData';

export default interface ForecastDataState {
    status: 'default' | 'loading' | 'success' | 'failed';
    data: ForecastData[] | undefined; // Replace with the actual type of your data
}