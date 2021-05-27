import React from "react";
import CurrentDate from "./CurrentDate";
import style from "../../styles/current_weather.module.css";

const CurrentWeather = ({ data, selected }) => {
	return (
		<div className={style.weather__current}>
			<CurrentDate />
			<div className={style.temperature}>
				<img
					src={`http://openweathermap.org/img/wn/${data.daily[selected].weather[0].icon}@2x.png`}
					alt={data.daily[selected].weather[0].description}
				/>
				<span>
					{selected === 0
						? data.current.temp
						: data.daily[selected].temp.day}
					<sup>&#8451;</sup>
				</span>
			</div>

			<h2>{data.daily[selected].weather[0].description}</h2>

			<div className={style.info_container}>
				<div className={style.more_info}>
					<h4>Humidity</h4>
					<span className={style.humidity}>
						{data.daily[selected].humidity}%
					</span>
				</div>
				<div className={style.more_info}>
					<h4>Wind speed</h4>
					<span className={style.humidity}>
						{data.daily[selected].wind_speed} km/j
					</span>
				</div>
			</div>
		</div>
	);
};

export default CurrentWeather;
