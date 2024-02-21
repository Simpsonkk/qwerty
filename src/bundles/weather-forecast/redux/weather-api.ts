import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { WeatherApiPath } from '~/bundles/weather-forecast/enums/weather-api-path.js';
import { type DateRangeWithCity } from '~/bundles/weather-forecast/types/date-range-with-city.type.js';
import { type WeatherForecast } from '~/bundles/weather-forecast/types/weather-forecast.type.js';

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({
    baseUrl: WeatherApiPath.BASE,
  }),
  endpoints: (builder) => ({
    getWeatherForecast: builder.query<WeatherForecast, DateRangeWithCity>({
      query: ({ city, startDate, endDate }) => {
        const dateRange = startDate ? `${startDate}/${endDate}` : 'today';
        const url = `${city}/${dateRange}`;

        return {
          url,
          params: {
            unitGroup: 'metric',
            include: 'days',
            key: import.meta.env.VITE_WEATHER_API_KEY,
            contentType: 'json',
          },
        };
      },
    }),
  }),
});
export const { useGetWeatherForecastQuery } = weatherApi;
