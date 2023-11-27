import React, { useState } from "react";
import axios from "axios";

import "./App.css";

export default function App() {
	let [city, changeCity] = useState("");
	let [weather, changeWeather] = useState({});
	const [refreshed, changeRefreshed] = useState(false);

	function currentWeather(response) {
		changeRefreshed(true);
		changeWeather({
			city: response.data.city,
			temperature: response.data.temperature.current,
			wind: response.data.wind.speed,
			humidity: response.data.temperature.humidity,
			icon: response.data.condition.icon_url,
			description: response.data.condition.description,
		});
	}

	function handleSubmit(event) {
		event.preventDefault();
		let apiKey = "8942b6bt940fbcoac33ad8a55c33f639";
		let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
		axios.get(apiUrl).then(currentWeather);
	}

	function updateCity(event) {
		changeCity(event.target.value);
	}

	let form = (
		<form onSubmit={handleSubmit}>
			<input
				type="search"
				placeholder="Enter a city.."
				onChange={updateCity}
			/>
			<button type="Submit">Search</button>
		</form>
	);

	if (refreshed) {
		return (
			<div className="App">
				<h1>My Weather App</h1>
				{form}
				<ul>
					<li>Temperature: {Math.round(weather.temperature)}°C</li>
					<li>Description: {weather.description}</li>
					<li>Humidity: {weather.humidity}%</li>
					<li>Wind: {weather.wind}km/h</li>
					<li>
						<img src={weather.icon} />
					</li>
				</ul>
			</div>
		);
	} else {
		return (
			<div className="App">
				<h1>My Weather App</h1>
				{form}
			</div>
		);
	}
}
