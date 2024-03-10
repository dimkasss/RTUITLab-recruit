import { useEffect, useState } from "react";
import { WeatherData, getWeather } from "../utils/weatherHandler";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

const WeatherPage = () => {
  const [pos, setPos] = useState<number[]>();
  const { isPending, error, data } = useQuery<WeatherData>({
    queryKey: ["weather", pos],
    queryFn: pos !== undefined ? () => getWeather(pos) : undefined,
    enabled: !!pos,
    placeholderData: keepPreviousData,
  });

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

  return <>{JSON.stringify(data)}</>;
};

export default WeatherPage;
