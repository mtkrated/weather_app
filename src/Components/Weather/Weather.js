import React from "react";
import CurrentWeather from "./CurrentWeather";

import style from "../../styles/weather.module.css";

const Weather = ({
	weatherData,
	weatherError,
	weatherIsError,
	weatherIsLoading,
	weatherIsSuccess,
}) => {
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
