export interface WeatherData {
  location: {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    tz_id: string;
    localtime_epoch: number;
    localtime: string;
  };
  current: {
    last_updated_epoch: number;
    last_updated: string;
    temp_c: number;
    temp_f: number;
    is_day: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
    wind_mph: number;
    wind_kph: number;
    wind_degree: number;
    wind_dir: string;
    pressure_mb: number;
    pressure_in: number;
    precip_mm: number;
    precip_in: number;
    humidity: number;
    cloud: number;
    feelslike_c: number;
    feelslike_f: number;
    vis_km: number;
    vis_miles: number;
    uv: number;
    gust_mph: number;
    gust_kph: number;
  };
  forecast: {
    forecastday: {
      date: string;
      date_epoch: number;
      day: {
        maxtemp_c: number;
        maxtemp_f: number;
        mintemp_c: number;
        mintemp_f: number;
        avgtemp_c: number;
        avgtemp_f: number;
        maxwind_mph: number;
        maxwind_kph: number;
        totalprecip_mm: number;
        totalprecip_in: number;
        totalsnow_cm: number;
        avgvis_km: number;
        avgvis_miles: number;
        avghumidity: number;
        daily_will_it_rain: number;
        daily_chance_of_rain: number;
        daily_will_it_snow: number;
        daily_chance_of_snow: number;
        condition: {
          text: string;
          icon: string;
          code: number;
        };
        uv: number;
      };
      astro: object;
      hour: HourData[];
    }[];
  };
}

export interface HourData {
  time_epoch: number;
  time: number;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: {
    text: string;
    icon: string;
    code: number;
  };
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  snow_cm: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  windchill_c: number;
  windchill_f: number;
  heatindex_c: number;
  heatindex_f: number;
  dewpoint_c: number;
  dewpoint_f: number;
  will_it_rain: number;
  chance_of_rain: number;
  will_it_snow: number;
  chance_of_snow: number;
  vis_km: number;
  vis_miles: number;
  gust_mph: number;
  gust_kph: number;
  uv: number;
  short_rad: number;
  diff_rad: number;
}

const getWeather = async (pos: number[]): Promise<WeatherData> => {
  const res = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=36fcca8b0e42466594a102649241003&q=${pos[0]},${pos[1]}&days=2`
  );
  return res.json();
};

const getForecastWeather = (data?: WeatherData, hoursRequired = 24): (HourData[] | undefined)[] => {
  const now = new Date();
  let hoursAdded = 0;
  const hoursOfFirstDay = data?.forecast.forecastday[0].hour.filter(h => {
    if (h.time_epoch * 1000 >= now.valueOf() && hoursAdded < hoursRequired) {
      hoursAdded++;
      return h;
    }
  })

  const hoursOfSecondDay = data?.forecast.forecastday[1].hour.filter(h => {
    if (h.time_epoch * 1000 >= now.valueOf() && hoursAdded < hoursRequired) {
      hoursAdded++;
      return h;
    }
  })

  return [hoursOfFirstDay, hoursOfSecondDay];
  
};

export { getWeather, getForecastWeather };
