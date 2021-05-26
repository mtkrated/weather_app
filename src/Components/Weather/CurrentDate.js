import React from "react";
import style from "../../styles/date.module.css";
import { currentDate } from "../../Utils/date";

const CurrentDate = () => {
	const date = currentDate();
	return (
		<span
			className={style.date}
		>{`${date.time}, ${date.weekday} ${date.month} ${date.day}`}</span>
	);
};

export default CurrentDate;
