import React, { useState } from "react";
import { ResultsItem } from "./components/ResultsItem";
import { ResultsDetails } from "./components/ResultsDetails";
import "./Results.css";

export type TTitle = {
	Title: string;
	Year: string;
	imdbID: string;
	Type: string;
	Poster: string;
};

interface IProps {
	titles: TTitle[];
}

export function Results({ titles }: IProps) {
	const [selectedTitle, setSelectedTitle] = useState<TTitle | null>(null);

	if (!!selectedTitle) {
		return (
			<ResultsDetails
				title={selectedTitle}
				setSelectedTitle={setSelectedTitle}
			/>
		);
	}

	return (
		<div className="results">
			{titles.map((title: TTitle) => (
				<ResultsItem
					key={title.imdbID}
					title={title}
					setSelectedTitle={setSelectedTitle}
				/>
			))}
		</div>
	);
}
