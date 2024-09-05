import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import Card from "./Card";
import "tachyons";
import { robots } from "./robots";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Card id={robots[0].id} name={robots[0].name} email={robots[0].email} username={robots[0].username}/>
		<Card id={robots[1].id} name={robots[1].name} email={robots[1].email} username={robots[1].username}/>
		<Card id={robots[2].id} name={robots[2].name} email={robots[2].email} username={robots[2].username}/>
		<Card id={robots[3].id} name={robots[3].name} email={robots[3].email} username={robots[3].username}/>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
