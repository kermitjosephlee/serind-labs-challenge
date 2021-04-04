import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import "./Main.css";

type Inputs = {
	searchField: String;
	type: String;
	year: Number;
};

export type TTitles = {
	Poster: string;
	Title: string;
	Type: string;
	Year: string;
	imdbID: string;
};

interface IProps {
	setTitles: (titles: TTitles[]) => void;
}

const urlConstructor = ({ searchField, type, year }: Inputs) => {
	const baseUrl = `${process.env.REACT_APP_OMDB_API}&s=${searchField}`;
	if (!!type && !!year) return `${baseUrl}&t=${type}&y=${year}`;
	if (!!type && !year) return `${baseUrl}&t=${type}`;
	if (!type && !!year) return `${baseUrl}&y=${year}`;
	return baseUrl;
};

export function Main({ setTitles }: IProps) {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<Inputs>();

	const onSubmit = handleSubmit(({ searchField, type, year }) => {
		const url = urlConstructor({ searchField, type, year });
		axios
			.get(url)
			.then((data) => setTitles(data.data.Search))
			.catch((e) => console.log(e));
	});

	return (
		<form onSubmit={onSubmit} className={"main-form"}>
			<input
				className="text-area search"
				placeholder="Enter Search"
				{...register("searchField", { required: true })}
			/>
			{errors.searchField && "Search is required"}
			<div>
				<input
					className="text-area year"
					placeholder="Enter Year"
					{...register("year", { required: false, min: 1900, max: 2022 })}
				/>
				{errors.year && "Enter a year between 1900 and 2022"}
				<select
					className="text-area type"
					placeholder="Enter Type"
					{...register("type", { required: false })}
				>
					<option value="">type</option>
					<option value="movie">Movie</option>
					<option value="series">Series</option>
					<option value="episode">Episode</option>
				</select>
			</div>
			<input className="submit" type="submit" value="Search" />
		</form>
	);
}
