import React from "react";
import style from "../../styles/dayforecast.module.css";

const DayForecastCard = ({ date, icon, humidity }) => {
	return (
		<div className={style.container}>
			<h4 className="date">{date}</h4>
			<img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
			<h5>Humidity</h5>
			<span>{humidity}</span>
		</div>
	);
};

export default DayForecastCard;
