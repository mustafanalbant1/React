import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import WeatherCard from '../components/WeatherCard';
import useWeather from '../hooks/useWeather';

const Home = () => {
    const [city, setCity] = useState('');
    const { weather, loading, error } = useWeather(city);

    const handleSearch = (city) => {
        setCity(city);
    };

    return (
        <div className="home">
            <h1>Weather App</h1>
            <SearchBar onSearch={handleSearch} />
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {weather && <WeatherCard weatherData={weather} />}
        </div>
    );
};

export default Home;
