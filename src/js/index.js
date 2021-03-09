//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { Secondscounter } from "./component/secondscounter";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components

let counter = 0;
let one = 0;

let fin = setInterval(function() {
	let six = Math.floor(counter / 100000);
	let five = Math.floor(counter / 10000);
	let four = Math.floor(counter / 1000);
	let three = Math.floor(counter / 100);
	let two = Math.floor(counter / 10);
	one = Math.floor(counter / 1);
	counter++;

	ReactDOM.render(
		<Secondscounter
			digOne={one}
			digTwo={two}
			digThree={three}
			digFour={four}
			digFive={five}
			digSix={six}
		/>,
		document.querySelector("#app")
	);
	if (one == 999999) {
		clearInterval(fin);
		alert("He llegado al fin, F5 para volver a comenzar");
	}
}, 1000);

//render your react application
