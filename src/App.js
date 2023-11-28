import React from "react";

import "./App.css";

export default function App() {
	return (
		<div className="App">
			<h1>Weather Dashboard</h1>
			<form>
				<div id="search-city">
					<div className="row">
						<div className="col-md-8">
							<input
								type="text"
								className="form-control"
								placeholder="Enter your city..."
								defaultValue=""
								autoFocus="on"
								autoComplete="off"
								id="city-input"
							/>
						</div>
						<div className="col-md-3">
							<button
								type="submit"
								className="btn btn-primary"
								id="search"
							>
								Search
							</button>
						</div>
					</div>
				</div>
				<div className="separator"></div>
				<div className="row">
					<div className="col-md-8">
						<button
							type="button"
							className="btn btn-info"
							id="current-location"
						>
							Use your current location
						</button>
					</div>
				</div>
			</form>
			<div id="weather-today">
				<h2 id="city">Accra</h2>
				<div id="date">Monday, November 27, 2023. 16:13</div>
				<div
					className="row"
					id="row"
				>
					<div className="col-md-6">
						<div id="description"></div>
						<img
							src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
							alt="icon"
							width="80px"
							id="current-icon"
						/>
						<span className="temp-today">30</span>
						<span className="units">
							<a
								href="/"
								id="celsius-link"
								rel="noreferrer"
							>
								°C
							</a>
							<span className="unit-separator">|</span>
							<a
								href="/"
								id="fahrenheit-link"
								rel="noreferrer"
							>
								°F
							</a>
						</span>
					</div>
					<div className="col-md-6">
						<br />
						<div id="humidity">
							<img
								src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/102/363/original/icons8-humidity-32.png?1698661745"
								alt=""
								width="20px"
							/>
							Humidity: <span id="humidity-value">12</span>
							<span>%</span>
						</div>
						<div id="wind">
							<img
								src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/102/364/original/icons8-wind-64.png?1698661902"
								alt=""
								width="20px"
							/>
							Wind: <span id="wind-value">5.6</span>
							<span> m/s</span>
						</div>
					</div>
				</div>
				<br />
				<h3>Next 5 Days</h3>
				<div className="row">
					<div className="col-md-1 sm-none"></div>
					<div className="col-2">
						<div className="forecast-day">Tue</div>
						<img
							src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
							alt="icon"
							width="70px"
							id="forecast-icon"
						/>
						<div id="forecast-temp">
							<span id="max-temp">30°</span>
							<span id="min-temp">25°</span>
						</div>
					</div>
					<div className="col-2">
						<div className="forecast-day">Wed</div>
						<img
							src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"
							alt="icon"
							width="70px"
							id="forecast-icon"
						/>
						<div id="forecast-temp">
							<span id="max-temp">30°</span>
							<span id="min-temp">26°</span>
						</div>
					</div>
					<div className="col-2">
						<div className="forecast-day">Thu</div>
						<img
							src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"
							alt="icon"
							width="70px"
							id="forecast-icon"
						/>
						<div id="forecast-temp">
							<span id="max-temp">29°</span>
							<span id="min-temp">26°</span>
						</div>
					</div>
					<div className="col-2">
						<div className="forecast-day">Fri</div>
						<img
							src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
							alt="icon"
							width="70px"
							id="forecast-icon"
						/>
						<div id="forecast-temp">
							<span id="max-temp">30°</span>
							<span id="min-temp">25°</span>
						</div>
					</div>
					<div className="col-2">
						<div className="forecast-day">Sat</div>
						<img
							src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"
							alt="icon"
							width="70px"
							id="forecast-icon"
						/>
						<div id="forecast-temp">
							<span id="max-temp">29°</span>
							<span id="min-temp">25°</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
