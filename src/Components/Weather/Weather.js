import React from "react";
import useWeather from "../../Hooks/useWeather";
import CurrentWeather from "./CurrentWeather";

import style from "../../styles/weather.module.css";

const Weather = ({ lat, lon }) => {
	const { weatherData, weatherError, weatherIsError, weatherIsLoading, weatherIsSuccess } =
		useWeather(lat, lon);

	if (weatherIsError) return <div className={style.weather}>{weatherError.message}</div>;
	else if (weatherIsLoading) return <div className={style.weather}>Loading...</div>;
	else if (weatherIsSuccess && weatherData)
		return (
			<div className={style.weather}>
				<CurrentWeather data={weatherData} />
			</div>
		);
	return null;
};

export default Weather;
