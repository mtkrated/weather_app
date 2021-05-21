import React from "react";
import CurrentDate from "./Date";
import style from "../../styles/current_weather.module.css";

const CurrentWeather = ({ city, data, isLoading, isError, error, isSuccess }) => {
	return (
		<div>
			{!data && null}
			{isLoading && <div>Loading...</div>}
			{isError && <div>{error.message}</div>}

			<CurrentDate dateTime={style.dateTime} />
			{isSuccess && data.weather ? (
				<div>
					<h1>{`${data.name}, ${data.sys.country}`}</h1>
					<div>
						<img
							src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
							alt={data.weather[0].description}
						/>
						<h2>{data.main.temp}</h2>
					</div>
					<div>{data.weather.description}</div>
					<div>
						<div>
							<h4>Humidity</h4>
							<h3>{data.main.humidity}%</h3>
						</div>
						<div>
							<h4>Wind speed</h4>
							<h3>{data.wind.speed} km/j</h3>
						</div>
					</div>
				</div>
			) : null}
		</div>
	);
};

export default CurrentWeather;
