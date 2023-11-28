import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
		<div className="code">
			<a
				href="https://github.com/Korewaa-30/my-app"
				target="_blank"
				rel="noreferrer"
			>
				Open-source code,
			</a>
			<em> by Sarah Duker</em>
		</div>
	</React.StrictMode>
);
