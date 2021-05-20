import React from "react";

const CurrentDate = ({ dateTime }) => {
	const date = Date.now();
	const formattedDate = {
		time: Intl.DateTimeFormat("en-US", { timeStyle: "short" }).format(date),
		weekday: Intl.DateTimeFormat("en-US", { weekday: "short" }).format(date),
		day: Intl.DateTimeFormat("en-US", { day: "2-digit" }).format(date),
		month: Intl.DateTimeFormat("en-US", { month: "long" }).format(date),
		year: Intl.DateTimeFormat("en-US", { year: "numeric" }).format(date),
	};
	return (
		<span
			className={dateTime}
		>{`${formattedDate.time}, ${formattedDate.weekday} ${formattedDate.month} ${formattedDate.day}`}</span>
	);
};

export default CurrentDate;
