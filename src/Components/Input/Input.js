import React from "react";
import style from "../../styles/search.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import City from "../City/City";

const Input = ({
	onChange,
	search,
	data,
	isSuccess,
	setCity,
	handleSubmit,
	showCityList,
	handleBlur,
	handleFocus,
}) => {
	const handleClick = ({ target }) => {
		const searchString = target.innerText.split(",");
		setCity(searchString[0], searchString[1]);
	};

	return (
		<div className={style.search}>
			<form action="#" className={style.form} onSubmit={handleSubmit}>
				<input
					type="text"
					value={search}
					onChange={onChange}
					placeholder="Search a city"
					onBlur={() => handleBlur()}
					onFocus={() => handleFocus()}
				/>
				<FontAwesomeIcon
					icon={faSearch}
					size={"2x"}
					className={style.search__icon}
					type="submit"
					onClick={handleSubmit}
				/>
			</form>
			<>
				{isSuccess && data.data && showCityList
					? data.data.map(city => {
							return (
								<City
									city={city.name}
									countryCode={
										city.countryCode
									}
									key={city.id}
									handleClick={handleClick}
								/>
							);
					  })
					: null}
			</>
		</div>
	);
};

export default Input;
