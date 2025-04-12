import ForecastData from './ForecastData';

export default interface ForecastDataState {
    status: 'default' | 'loading' | 'success' | 'failed';
    data: ForecastData; // Replace with the actual type of your data
}