import React from "react";
import { TTitle } from "../../Results";
import "./ResultsItem.css";

interface IProps {
	title: TTitle;
	setSelectedTitle: (title: TTitle) => void;
}

export function ResultsItem({ title, setSelectedTitle }: IProps) {
	const handleClick = () => {
		setSelectedTitle(title);
	};

	console.log("title", title);

	const { Title, Year, Type, Poster } = title;

	return (
		<div className="results-item">
			<div>{Title}</div>
			<div>
				{Year} {Type}
			</div>
			<img src={Poster} alt={Title} width={150} />
			<div className="details-button" onClick={() => handleClick()}>
				Details
			</div>
		</div>
	);
}
