import React, { useEffect, useState } from "react";
import axios from "axios";
import { TTitle } from "../../Results";
import { TSelectedResults } from "./types";
import "./ResultsDetails.css";

interface IProps {
	title: TTitle;
	setSelectedTitle: (value: TTitle | null) => void;
}

export function ResultsDetails({ title, setSelectedTitle }: IProps) {
	const [
		selectedResults,
		setSelectedResults,
	] = useState<TSelectedResults | null>();

	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_OMDB_API}&i=${title.imdbID}`)
			.then((res) => setSelectedResults(res.data))
			.catch((e) => console.log(e));
	}, [title.imdbID]);

	const Title = selectedResults?.Title;
	const Year = selectedResults?.Year;
	const Type = selectedResults?.Type;
	const Released = selectedResults?.Released;
	const Genre = selectedResults?.Genre;
	const Ratings = selectedResults?.Ratings;
	const Director = selectedResults?.Director;
	const Actors = selectedResults?.Actors;

	const imdbUrl = `https://imdb.com/title/${title.imdbID}`;

	return (
		<div className="results-details">
			<div className="back" onClick={() => setSelectedTitle(null)}>
				Back
			</div>

			<div className="row-container">
				<div
					className="title-container"
					onClick={() => window.open(imdbUrl, "_blank")}
				>
					<div>{Title}</div>
					{!!Title && <img src={title.Poster} alt={Title} width={200} />}
				</div>
				<div className="details-container">
					<div className="detail">
						Year: <span className="detail-data">{Year}</span>
					</div>
					<div className="detail">
						Type: <span className="detail-data">{Type}</span>
					</div>
					<div className="detail">
						Date Released: <span className="detail-data">{Released}</span>
					</div>
					<div className="detail">
						Genre: <span className="detail-data">{Genre}</span>
					</div>
					<div className="ratings">
						{!!Ratings &&
							Ratings.map((rating) => (
								<div key={rating.Source} className="detail">
									{rating.Source}:{" "}
									<span className="detail-data">{rating.Value}</span>
								</div>
							))}
					</div>
					<div>--------</div>
					<div className="detail">
						Director: <span className="detail-data">{Director}</span>
					</div>
					<div className="detail">
						Actors: <span className="detail-data">{Actors}</span>
					</div>
				</div>
			</div>
		</div>
	);
}
