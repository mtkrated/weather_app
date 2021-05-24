import React from "react";

const CurrentWeather = ({ data, isLoading, isError, error, isSuccess }) => {
	return (
		<div>
			{!data && null}
			{isLoading && <div>Loading...</div>}
			{isError && <div>{error.message}</div>}

			{isSuccess && data.current ? (
				<div>
					<div>
						<img
							src={`http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`}
							alt={data.current.weather[0].description}
						/>
						<h2>{data.current.temp}</h2>
					</div>
					<div>{data.current.weather[0].description}</div>
					<div>
						<div>
							<h4>Humidity</h4>
							<h3>{data.current.humidity}%</h3>
						</div>
						<div>
							<h4>Wind speed</h4>
							<h3>{data.current.speed} km/j</h3>
						</div>
					</div>
				</div>
			) : null}
		</div>
	);
};

export default CurrentWeather;
