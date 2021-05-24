import React, { useState } from "react";
import Input from "../Input/Input";
import useCity from "../../Hooks/useCity";
import Weather from "../Weather/Weather";

//TODO create some test cases
//TODO refractor code
//TODO fix searching error
const App = () => {
	const [search, setSearch] = useState("");
	const [isSearch, setIsSearch] = useState(false);
	const [showCityList, setShowCityList] = useState(true);
	const { cityData, cityIsSuccess } = useCity(search);
	const [lat, setLat] = useState(null);
	const [lon, setLon] = useState(null);
	/*
	 *handle the current value when the user types or searches
	 */
	const handleSearch = ({ target }) => {
		setShowCityList(true);
		setSearch(target.value);
	};

	/*
	 *handle the click event when a user clicks or selects a city from the list
	 *the search query will be called with the city name and country code of the selected city
	 */

	const handleCityClick = (lat, lon) => {
		setIsSearch(true);
		setLat(lat);
		setLon(lon);
		setShowCityList(false);
	};

	/*
	 *handle submit when the user clicks the search icon or presses enter
	 *the function sets the isWeather to true to start the search query
	 *the current state of search will be sent on click or enter
	 */
	const handleSubmit = e => {
		e.preventDefault();
		setIsSearch(true);
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
				handleCityClick={handleCityClick}
				data={cityData}
				isSuccess={cityIsSuccess}
				setLat={setLat}
				setLon={setLon}
				showCityList={showCityList}
				handleBlur={handleBlur}
			/>
			{isSearch ? <Weather lat={lat} lon={lon} /> : null}
		</div>
	);
};

export default App;
