import React, { useState } from "react";
import useCity from "../../Hooks/useCity";
import useWeather from "../../Hooks/useWeather";
import Search from "../Search/Search";
import Weather from "../Weather/Weather";

//TODO create some test cases
//TODO refractor code
//TODO fix searchTerming error

const App = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [showCityList, setShowCityList] = useState(true);
	const [searchWeather, setSearchWeather] = useState(false);
	const [lat, setLat] = useState(null);
	const [lon, setLon] = useState(null);
	const { cityData, cityIsSuccess } = useCity(searchTerm);
	const { weatherData, weatherError, weatherIsError, weatherIsLoading, weatherIsSuccess } =
		useWeather(lat, lon, searchWeather);
	/*
	 *handle the current value when the user types or searchTermes
	 */
	const handleSearchTerm = ({ target }) => {
		setShowCityList(true);
		setSearchTerm(target.value);
	};

	const search = (lat, lon) => {
		setLat(lat);
		setLon(lon);
		setShowCityList(false);
		setSearchTerm("");
		setSearchWeather(true);
	};

	/*
	 *handle the click event when a user clicks or selects a city from the list
	 *the searchTerm query will be called with the city name and country code of the selected city
	 */

	const handleCityClick = (lat, lon) => {
		console.log(lat);
		setSearchWeather(false);
		console.log(searchWeather);
		search(lat, lon);
	};

	/*
	 *handle submit when the user clicks the searchTerm icon or presses enter
	 *the function sets the isWeather to true to start the searchTerm query
	 *the current state of searchTerm will be sent on click or enter
	 */
	const handleSubmit = e => {
		if (searchTerm.length > 0) {
			e.preventDefault();
			setShowCityList(false);
			setSearchTerm("");
		}
		return null;
	};

	const handleClear = () => {
		setSearchTerm("");
	};

	/*
	 *function to remove the city recommendation list on input blur or out of focus
	 */
	const handleBlur = () => {
		setShowCityList(false);
	};

	const handleFocus = () => {
		setShowCityList(true);
	};

	return (
		<main>
			<Search
				onChange={handleSearchTerm}
				searchTerm={searchTerm}
				handleSubmit={handleSubmit}
				handleCityClick={handleCityClick}
				data={cityData}
				isSuccess={cityIsSuccess}
				handleClear={handleClear}
				showCityList={showCityList}
				handleBlur={handleBlur}
				handleFocus={handleFocus}
			/>

			<Weather
				weatherData={weatherData}
				weatherError={weatherError}
				weatherIsError={weatherIsError}
				weatherIsLoading={weatherIsLoading}
				weatherIsSuccess={weatherIsSuccess}
			/>
		</main>
	);
};

export default App;
