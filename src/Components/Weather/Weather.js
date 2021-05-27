import React from "react";
import CurrentWeather from "./CurrentWeather";

import style from "../../styles/weather.module.css";
import DayForecastCard from "./DayForecastCard";
import { getDay } from "../../Utils/date";

const Weather = ({
	weatherData,
	weatherError,
	weatherIsError,
	weatherIsLoading,
	weatherIsSuccess,
	selected,
	setSelected,
}) => {
	if (weatherIsError) return <div className={style.weather}>{weatherError.message}</div>;
	else if (weatherIsLoading)
		return (
			<div className={style.loading}>
				<h1>Loading...</h1>
			</div>
		);
	else if (weatherIsSuccess && weatherData)
		return (
			<div className={style.weather}>
				<CurrentWeather data={weatherData} selected={selected} />
				<h3>8-day Forecast</h3>
				<div className={style.daily_forecast}>
					{weatherData.daily.map((day, index) => (
						<DayForecastCard
							key={index}
							dataIndex={index}
							date={getDay(index)}
							humidity={day.humidity}
							icon={day.weather[0].icon}
							description={day.weather[0].desciption}
							selected={selected}
							setSelected={setSelected}
						/>
					))}
				</div>
			</div>
		);
	return null;
};

export default Weather;
