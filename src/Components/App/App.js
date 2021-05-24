import React, { useState } from "react";
import CurrentWeather from "../CurrentWeather/CurrentWeather";
import { useQuery } from "react-query";
import api from "../../Utils/apiCalls";
import Input from "../Input/Input";
import useCity from "../../Hooks/useCity";

//TODO create some test cases
//TODO refractor code
//TODO fix searching error
const App = () => {
	const [search, setSearch] = useState("");
	const [city, setCity] = useState(null);
	const [isWeather, setIsWeather] = useState(false);
	const [showCityList, setShowCityList] = useState(true);
	const { cityData, cityIsSuccess } = useCity(search);

	//fetch list of cities from api that match the user input
	//when user input is greater than 2
	//otherwise do nothing

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
		setShowCityList(true);
		setSearch(target.value);
	};

	/*
	 *handle the click event when a user clicks or selects a city from the list
	 *the search query will be called with the city name and country code of the selected city
	 */

	const handleCityClick = (cityName, countryCode) => {
		setIsWeather(true);
		setCity([cityName, countryCode]);
		setShowCityList(false);
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
		setShowCityList(false);
		setSearch("");
	};

	/*
	 *function to remove the city recommendation list on input blur or out of focus
	 */
	const handleBlur = () => {
		setShowCityList(false);
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
				showCityList={showCityList}
				handleBlur={handleBlur}
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
