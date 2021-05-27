import React, { useState, useEffect } from "react";
import style from "../../styles/dayforecast.module.css";

const DayForecastCard = ({
	date,
	icon,
	humidity,
	description,
	selected,
	setSelected,
	dataIndex,
}) => {
	const [isSelected, setIsSelected] = useState(false);

	const handleClick = () => {
		setSelected(dataIndex);
	};

	useEffect(() => {
		if (selected === dataIndex) {
			setIsSelected(true);
		} else setIsSelected(false);
	}, [selected, dataIndex]);

	const classNames = isSelected
		? `${style.container} ${style.isSelected}`
		: `${style.container}`;
	return (
		<div className={classNames} onClick={handleClick}>
			<h4 className="date">{date}</h4>
			<img
				src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
				alt={description}
			/>
			<h5>Humidity</h5>
			<span>{humidity}</span>
		</div>
	);
};

export default DayForecastCard;
