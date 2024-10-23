import { useState, useEffect } from 'react';
import { fetchWeather } from '../api/WeatherApi';

const useWeather = (city) => {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getWeather = async () => {
            try {
                const data = await fetchWeather(city);
                setWeather(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        if (city) {
            getWeather();
        }
    }, [city]);

    return { weather, loading, error };
};

export default useWeather;
