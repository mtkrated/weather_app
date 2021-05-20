import React from "react";
import style from "../../styles/city.module.css";

const City = props => {
	return (
		<div
			className={style.city}
			onClick={props.handleClick}
		>{`${props.city}, ${props.countryCode}`}</div>
	);
};

export default City;
