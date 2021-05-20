import React, { useState } from "react";
import CurrentWeather from "../CurrentWeather/CurrentWeather";
import { useQuery } from "react-query";
import api from "../../Utils/apiCalls";
import Input from "../Input/Input";

const App = () => {
	const [search, setSearch] = useState("");
	const [city, setCity] = useState(null);
	const [isWeather, setIsWeather] = useState(false);

	//fetch list of cities from api that match the user input
	//when user input is greater than 2
	//otherwise do nothing
	const { data: cityData, isSuccess: cityIsSuccess } = useQuery(
		["search", search],
		() => api.fetchCities(search),
		{
			enabled: search.length > 2,
			refetchOnReconnect: false,
			refetchOnWindowFocus: false,
			cacheTime: 1000 * 60,
		}
	);

	//get the current weather when the isWeather is set to true
	//otherwise do nothing
	const { data, isLoading, isSuccess, isError, error } = useQuery(
		"weather",
		() => api.fetchWeather(city[0], city[1]),
		{
			refetchOnReconnect: false,
			refetchOnWindowFocus: false,
			enabled: isWeather,
			cacheTime: 10000,
		}
	);

	/*handle the current value when the user types or searches*/
	const handleSearch = ({ target }) => {
		setSearch(target.value);
	};

	/*
	 *handle the click event when a user clicks or selects a city from the list
	 *the search query will be called with the city name and country code of the selected city
	 */

	const handleCityClick = (cityName, countryCode) => {
		setIsWeather(true);
		setCity([cityName, countryCode]);
	};

	/*
	 *handle submit when the user clicks the search icon or presses enter
	 *the function sets the isWeather to true to start the search query
	 *the current state of search will be sent on click or enter
	 */
	const handleSubmit = e => {
		e.preventDefault();
		setIsWeather(true);
		setCity([search, null]);
	};
	return (
		<div>
			<Input
				onChange={handleSearch}
				search={search}
				handleSubmit={handleSubmit}
				data={cityData}
				isSuccess={cityIsSuccess}
				setCity={handleCityClick}
			/>
			{isWeather ? (
				<CurrentWeather
					data={data}
					error={error}
					isLoading={isLoading}
					isSuccess={isSuccess}
					isError={isError}
				/>
			) : null}
		</div>
	);
};

export default App;
