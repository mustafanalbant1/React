import clearImage from '../assets/images/clear.png'
import cloudsImage from '../assets/images/clouds.png';
import drizzleImage from '../assets/images/drizzle.png';
import mistleImage from '../assets/images/mist.png';
import rainyImage from '../assets/images/rain.png';
import snowyImage from '../assets/images/snow.png';
import humidityImage from '../assets/images/humidity.png';
import windImage from '../assets/images/wind.png';

function WeatherCard({ weatherData }) {
    if (!weatherData) return null;

    const cityName = weatherData.name;
    const temperature = (weatherData.main.temp).toFixed(1); // Kelvin yerine Celsius zaten geliyor
    const humidity = weatherData.main.humidity;
    const windSpeed = (weatherData.wind.speed * 3.6).toFixed(1); // m/s'den km/h'ye çevir
    const weatherCondition = weatherData.weather[0].main;

    const getWeatherImage = (condition) => {
        switch (condition) {
            case 'Clear':
                return clearImage;
            case 'Drizzle':
                return drizzleImage;
            case 'Mist':
                return mistleImage;
            case 'Clouds':
                return cloudsImage;
            case 'Rain':
                return rainyImage;
            case 'Snow':
                return snowyImage;
            default:
                return '/assets/images/default.png'; // Varsayılan resim
        }
    };

    const weatherImage = getWeatherImage(weatherCondition);

    return (
        <div>
            <div className="weather">
                <img src={weatherImage} alt={weatherCondition} />
                <h1 className="temp">{temperature}°C</h1>
                <h2 className="city">{cityName}</h2>
            </div>

            <div className="details">
                <div className="col">
                    <img src={humidityImage} alt="Humidity" className="col-img" />
                    <div>
                        <p className="humidity">{humidity}%</p>
                        <p>Humidity</p>
                    </div>
                </div>
                <div className="col">
                    <img src={windImage} alt="Wind Speed" className="col-img" />
                    <div>
                        <p className="wind">{windSpeed} km/h</p>
                        <p>Wind Speed</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WeatherCard;
