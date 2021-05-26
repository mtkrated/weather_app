import React from "react";

const DayForecastCard = ({ date, icon, humidity }) => {
	return (
		<div>
			<span>{date}</span>
			<img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
			<span>Humidity</span>
			<span>{humidity}</span>
		</div>
	);
};

export default DayForecastCard;
