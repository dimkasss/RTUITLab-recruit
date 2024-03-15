import { HourData } from "../utils/weatherHandler";

interface IWeatherCard {
  weather: HourData;
}

const WeatherCard: React.FC<IWeatherCard> = ({ weather }) => {
  return ( 
    <section className="border border-[--border-half-opacity] rounded-xl m-2 py-5 px-7 items-center flex flex-col justify-center text-center">
      <div className="text-2xl mb-2">{new Date(weather.time_epoch * 1000).toLocaleString('ru-RU', { hour: '2-digit', minute: '2-digit'})}</div>
      <div>{weather.condition.text}<img src={weather.condition.icon} width="50px" /></div>
      <div className="text-3xl py-4 font-black">{weather.temp_c} °C</div>
      <div>Feels like {weather.feelslike_c} °C</div>
      <div>Wind: {weather.wind_kph} kph</div>
    </section>
   );
}
 
export default WeatherCard;