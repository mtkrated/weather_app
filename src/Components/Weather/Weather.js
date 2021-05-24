import React from "react";
import useWeather from "../../Hooks/useWeather";
import CurrentWeather from "./CurrentWeather";
import CurrentDate from "../Weather/Date";

const Weather = ({ lat, lon }) => {
	const { weatherData, weatherError, weatherIsError, weatherIsLoading, weatherIsSuccess } =
		useWeather(lat, lon);
	return (
		<div>
			<CurrentDate />
			<CurrentWeather
				data={weatherData}
				error={weatherError}
				isLoading={weatherIsLoading}
				isSuccess={weatherIsSuccess}
				isError={weatherIsError}
			/>
		</div>
	);
};

export default Weather;
