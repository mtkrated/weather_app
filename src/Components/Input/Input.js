import React from "react";
import style from "../../styles/search.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";

const Input = ({ onChange, searchTerm, handleSubmit, handleClear, handleFocus }) => {
	return (
		<div className={style.search} onSubmit={handleSubmit}>
			<input
				type="text"
				value={searchTerm}
				onChange={onChange}
				placeholder="Search a city"
				onFocus={handleFocus}
			/>
			{searchTerm.length > 0 && (
				<FontAwesomeIcon
					icon={faTimes}
					size={"1x"}
					className={style.clear_icon}
					onClick={handleClear}
				/>
			)}
			{searchTerm.length > 0 && <div className={style.break}></div>}
			<FontAwesomeIcon
				icon={faSearch}
				size={"1x"}
				className={style.search_icon}
				type="submit"
				onClick={handleSubmit}
			/>
		</div>
	);
};

export default Input;
