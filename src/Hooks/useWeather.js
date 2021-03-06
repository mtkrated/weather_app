import { useQuery } from "react-query";
import api from "../Utils/apiCalls";

const useWeather = (lat, lon, searchWeather) => {
	const {
		data: weatherData,
		isLoading: weatherIsLoading,
		isSuccess: weatherIsSuccess,
		isError: weatherIsError,
		error: weatherError,
	} = useQuery(["weather", lat, lon], () => api.fetchWeather(lat, lon), {
		enabled: searchWeather,
		refetchOnReconnect: false,
		refetchOnWindowFocus: false,
		cacheTime: 10000,
	});
	return { weatherData, weatherError, weatherIsError, weatherIsLoading, weatherIsSuccess };
};

export default useWeather;
