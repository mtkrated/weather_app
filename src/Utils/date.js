export const currentDate = (date = Date.now()) => {
	const formattedDate = {
		time: Intl.DateTimeFormat("en-US", { timeStyle: "short" }).format(date),
		weekday: Intl.DateTimeFormat("en-US", { weekday: "short" }).format(date),
		day: Intl.DateTimeFormat("en-US", { day: "2-digit" }).format(date),
		month: Intl.DateTimeFormat("en-US", { month: "long" }).format(date),
		year: Intl.DateTimeFormat("en-US", { year: "numeric" }).format(date),
	};
	return formattedDate;
};

export const getDay = idx => {
	const date = new Date(Date.now());
	let day;
	switch (idx) {
		case 0:
			day = "Today";
			break;
		default:
			const formattedDate = currentDate(date.setDate(date.getDate() + idx));
			day = `${formattedDate.day} ${formattedDate.month}`;
			break;
	}
	return day;
};

const date = { getDay, currentDate };

export default date;
