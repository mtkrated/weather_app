const cityApiKey = process.env.REACT_APP_CITY_API_KEY;
const weatherApiKey = process.env.REACT_APP_WEATHER_API_KEY;

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
	fetchHourlyForecast: async (city, countryCode = null) => {
		if (countryCode) {
			const response = await fetch(
				`https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${city}&appid=${weatherApiKey}`
			);
			return response.json();
		}
		const response = await fetch(
			`https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}`
		);
		return response.json();
	},
};

export default api;
