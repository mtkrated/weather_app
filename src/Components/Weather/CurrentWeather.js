import React from "react";
import CurrentDate from "./CurrentDate";
import style from "../../styles/current_weather.module.css";

const CurrentWeather = ({ data }) => {
	return (
		<div className={style.weather__current}>
			<CurrentDate />
			<div className={style.temperature}>
				<img
					src={`http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`}
					alt={data.current.weather[0].description}
				/>
				<span>
					{data.current.temp}
					<sup>&#8451;</sup>
				</span>
			</div>

			<h2>{data.current.weather[0].description}</h2>

			<div className={style.info_container}>
				<div className={style.more_info}>
					<h4>Humidity</h4>
					<h3>{data.current.humidity}%</h3>
				</div>
				<div className={style.more_info}>
					<h4>Wind speed</h4>
					<h3>{data.current.wind_speed} km/j</h3>
				</div>
			</div>
		</div>
	);
};

export default CurrentWeather;
