const cityApiKey = "ce90fc468fmshf53d29d768b06f5p1b550fjsn661b20185864";
const weatherApiKey = "d2f652f51c1fadbc0ebbd7fa064b4716";

const api = {
	fetchCities: async city => {
		const response = await fetch(
			`https://wft-geo-db.p.rapidapi.com/v1/geo/cities?limit=10&offset=0&namePrefix=${city}`,
			{
				method: "GET",
				headers: {
					"x-rapidapi-key": cityApiKey,
					"x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
				},
			}
		);
		return response.json();
	},
	fetchWeather: async (city, countryCode = null) => {
		if (countryCode) {
			const response = await fetch(
				`https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${weatherApiKey}`
			);
			return response.json();
		}
		const response = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}`
		);
		return response.json();
	},
};

export default api;
