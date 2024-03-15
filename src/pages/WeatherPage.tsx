import { useEffect, useMemo, useState } from "react";
import {
  WeatherData,
  getForecastWeather,
  getWeather,
} from "../utils/weatherHandler";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import WeatherCard from "../components/WeatherCard";

const WeatherPage = () => {
  const [pos, setPos] = useState<number[]>();
  const { isPending, error, data } = useQuery<WeatherData>({
    queryKey: ["weather", pos],
    queryFn: pos !== undefined ? () => getWeather(pos) : undefined,
    enabled: !!pos,
    placeholderData: keepPreviousData,
  });

  const filteredData = useMemo(() => getForecastWeather(data), [data]);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) =>
        setPos([position.coords.latitude, position.coords.longitude])
      );
    }
  }, []);

  if (pos === undefined || error !== null)
    return <div>Position cannot be found</div>;
  if (isPending) return <div>Loading...</div>;

  return (
    <>
      <h1 className="text-4xl my-10 text-center">Forecast for <span className="font-medium">{data.location.region}</span></h1>
      {filteredData[0]?.length != 0 ? <div className="text-2xl">Today, {new Date(data.forecast.forecastday[0].hour[0].time_epoch * 1000).toLocaleString('ru-RU', {month: '2-digit', day: '2-digit', year: "numeric"})}</div> : ""}
      <div className="flex flex-row flex-wrap items-center justify-center">
        {filteredData[0]?.map((h) => (
          <WeatherCard key={h.time_epoch} weather={h} />
        ))}
      </div>
      {filteredData[1]?.length != 0 ? <div className="text-2xl">Tomorrow, {new Date(data.forecast.forecastday[1].hour[0].time_epoch * 1000).toLocaleString('ru-RU', {month: '2-digit', day: '2-digit', year: "numeric"})}</div> : ""}
      <div className="flex flex-row flex-wrap items-center justify-center">
        {filteredData[1]?.map((h) => (
          <WeatherCard key={h.time_epoch} weather={h} />
        ))}
      </div>
    </>
  );
};

export default WeatherPage;
