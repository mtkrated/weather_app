import { useQuery } from "react-query";

const fetchCities = async city => {
	const response = await fetch(
		`https://wft-geo-db.p.rapidapi.com/v1/geo/cities?limit=5&offset=0&namePrefix=${city}`,
		{
			method: "GET",
			headers: {
				"x-rapidapi-key":
					"ce90fc468fmshf53d29d768b06f5p1b550fjsn661b20185864",
				"x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
			},
		}
	);
	return response.json();
};

const useSearch = searchString => {
	const res = useQuery("search", () => fetchCities(searchString));
	return res;
};

export default useSearch;
