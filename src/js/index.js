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
Secondscounter.proptypes = {
	digOne: PropTypes.number,
	digTwo: PropTypes.number,
	digThree: PropTypes.number,
	digFour: PropTypes.number
};

setInterval(function() {
	let six = Math.floor(counter / 100000);
	let five = Math.floor(counter / 10000);
	let four = Math.floor(counter / 1000);
	let three = Math.floor(counter / 100);
	let two = Math.floor(counter / 10);
	let one = Math.floor(counter / 1);
	counter++;
	//console.log(three, two, one);

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
}, 1000);

//render your react application
