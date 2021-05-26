import React from "react";
import Input from "../Input/Input";
import style from "../../styles/search.module.css";
import City from "../City/City";

const Search = ({
	onChange,
	searchTerm,
	data,
	isSuccess,
	handleSubmit,
	handleClear,
	showCityList,
	handleCityClick,
	handleBlur,
	handleFocus,
}) => {
	return (
		<div className={style.container} onBlur={() => handleBlur()}>
			<Input
				onChange={onChange}
				searchTerm={searchTerm}
				handleSubmit={handleSubmit}
				handleClear={handleClear}
				handleFocus={handleFocus}
			/>
			{isSuccess && data.data && showCityList
				? data.data.map(city => {
						return (
							<City
								city={city.name}
								countryCode={city.countryCode}
								key={city.id}
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
