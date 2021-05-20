import React from "react";
import style from "../../styles/city.module.css";

const City = props => {
	return (
		<li
			className={style.city}
			onClick={props.handleClick}
		>{`${props.city}, ${props.countryCode}`}</li>
	);
};

export default City;
