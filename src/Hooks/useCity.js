import { useQuery } from "react-query";
import api from "../Utils/apiCalls";

const useCity = cityName => {
	const { data: cityData, isSuccess: cityIsSuccess } = useQuery(
		["search", cityName],
		() => api.fetchCities(cityName),
		{
			enabled: cityName.length > 2 && cityName.length !== 0,
			refetchOnReconnect: false,
			refetchOnWindowFocus: false,
			cacheTime: 1000 * 60,
		}
	);
	return { cityData, cityIsSuccess };
};

export default useCity;
