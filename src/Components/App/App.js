import React, { useState } from "react";
import useCity from "../../Hooks/useCity";
import Search from "../Search/Search";
import Weather from "../Weather/Weather";

//TODO create some test cases
//TODO refractor code
//TODO fix searchTerming error
const App = () => {
	const [searchTerm, setsearchTerm] = useState("");
	const [isSearchTerm, setIsSearchTerm] = useState(false);
	const [showCityList, setShowCityList] = useState(true);
	const { cityData, cityIsSuccess } = useCity(searchTerm);
	const [lat, setLat] = useState(null);
	const [lon, setLon] = useState(null);
	/*
	 *handle the current value when the user types or searchTermes
	 */
	const handleSearchTerm = ({ target }) => {
		setShowCityList(true);
		setsearchTerm(target.value);
	};

	/*
	 *handle the click event when a user clicks or selects a city from the list
	 *the searchTerm query will be called with the city name and country code of the selected city
	 */

	const handleCityClick = (lat, lon) => {
		setIsSearchTerm(true);
		setLat(lat);
		setLon(lon);
		setShowCityList(false);
	};

	/*
	 *handle submit when the user clicks the searchTerm icon or presses enter
	 *the function sets the isWeather to true to start the searchTerm query
	 *the current state of searchTerm will be sent on click or enter
	 */
	const handleSubmit = e => {
		if (searchTerm.length > 0) {
			e.preventDefault();
			setIsSearchTerm(true);
			setShowCityList(false);
			setsearchTerm("");
		}
		return null;
	};

	const handleClear = () => {
		setsearchTerm("");
	};

	/*
	 *function to remove the city recommendation list on input blur or out of focus
	 */
	const handleBlur = () => {
		setShowCityList(false);
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
				setLat={setLat}
				setLon={setLon}
				handleClear={handleClear}
				showCityList={showCityList}
				handleBlur={handleBlur}
			></Search>
			{isSearchTerm ? <Weather lat={lat} lon={lon} /> : null}
		</main>
	);
};

export default App;
