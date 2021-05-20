import React from "react";
import CurrentDate from "./Date";
import style from "../../styles/current_weather.module.css";

const CurrentWeather = ({ city, data, isLoading, isError, error, isSuccess }) => {
	return (
		<div>
			{!data && null}
			{isLoading && <div>Loading...</div>}
			{isError && <div>{error.message}</div>}
			{isSuccess && data.weather ? (
				<div>
					<CurrentDate dateTime={style.dateTime} />
					<h1>{`${city}`}</h1>
					{data.weather.map(val => {
						return <div key={val.id}>{val.main}</div>;
					})}
				</div>
			) : null}
		</div>
	);
};

export default CurrentWeather;
