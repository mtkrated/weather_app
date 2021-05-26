import React from "react";
import style from "../../styles/city.module.css";

const City = ({ city, countryCode, lat, lon, handleCityClick }) => {
	return (
		<div
			className={style.city}
			onClick={() => handleCityClick(lat, lon)}
			onMouseDown={e => e.preventDefault()}
		>{`${city}, ${countryCode}`}</div>
	);
};

export default City;
