import React from "react";
import Input from "../Input/Input";
import style from "../../styles/search.module.css";
import City from "../City/City";

const Search = ({
	onChange,
	searchTerm,
	data,
	isSuccess,
	setLat,
	setLon,
	handleSubmit,
	handleClear,
	showCityList,
	handleCityClick,
	// handleBlur,
}) => {
	return (
		<div className={style.container}>
			<Input
				onChange={onChange}
				searchTerm={searchTerm}
				handleSubmit={handleSubmit}
				handleClear={handleClear}
			/>
			{isSuccess && data.data && showCityList
				? data.data.map(city => {
						return (
							<City
								city={city.name}
								countryCode={city.countryCode}
								key={city.id}
								setLat={setLat}
								setLon={setLon}
								handleCityClick={handleCityClick}
								lat={city.latitude}
								lon={city.longitude}
							/>
						);
				  })
				: null}
		</div>
	);
};

export default Search;
