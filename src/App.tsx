import React, { useState } from "react";
import { Main, TTitles } from "./components/Main";
import { Results } from "./components/Results";
import "./App.css";

function App() {
	const [titles, setTitles] = useState<TTitles[]>([]);
	console.log("titles", titles);
	return (
		<div className="App">
			<Main setTitles={setTitles} />
			{!!titles && titles.length !== 0 && <Results titles={titles} />}
			{!titles && (
				<div className="no-results">
					No results came back for that search term. Try another!
				</div>
			)}
		</div>
	);
}

export default App;
